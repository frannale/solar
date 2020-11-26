import db
import weather
import csv
import datetime
import os, sys, time
from decimal import Decimal

def insertarDatos(filename):
    # SETEOS
    cargados,fallidos = 0,0
    last_date = ''
    data_anterior = {'AccumulatedDischargerPower' : 0,'AccumulatedLoadPower' : 0,'AccumulatedSelfusePower' : 0,'AccumulatedPvPower' : 0}    
    #ABRO EL CSV FILE
    dir_path = os.getcwd() + '/CSVFiles' + '/' + filename   
    with open(dir_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        # PROCESO CADA REGISTRO
        for row in reader:
            # SI CAMBIA EL DIA PEGALE A LA API-WEATHER            
            current_date = row['RecordTime'][0:21].replace("\n", "")
            if last_date != current_date[0:10]:
                clima_por_hora = weather.getWeather(current_date)
            last_date = current_date[0:10]                
            # PROCESO DE A 1 REGISTRO     
            data_anterior = procesarUno(row,clima_por_hora,data_anterior)
            try:
                
                cargados += 1
            except:
                fallidos += 1    
    
    return cargados,fallidos

def procesarUno(row,clima,data_anterior):
    #SETEO DE NUEVO REGISTRO Y INICIALIZACION DE ACUMULABLES
    new_row =  {}
    # VERIFICACION POR CADA ACUMULATED PARA HACER EL CALCULO
    for key in data_anterior:
        current_value = round(Decimal(row[key].replace('KWH','')),3)
        new_row[key] = current_value - data_anterior[key]
        data_anterior[key] = current_value     
    new_row['PInverter'] = row['PInverter']  
    new_row['PGrid'] = row['PGrid']
    new_row['PV voltage'] = row['PV voltage']
    new_row['Load percent'] = row['Load percent']
    #SETEO DE FECHA Y FORMATEO DE LA HORA
    new_row['fecha'] =  row['RecordTime'][0:10]
    new_row['hora'] =  formatearHora(row['RecordTime'])
    # SETEO DE CLIMA
    new_row['nubosidad'] = clima[int(new_row['hora'])]['cloud'] if clima else "NULL"
    new_row['temperatura'] = clima[int(new_row['hora'])]['temp_c'] if clima else "NULL"
    #INSERTO EN DB    
    db.insert(new_row)
    
    return data_anterior

def formatearHora(i_hora):
    
    hora_a_p = int(i_hora[11:13])
    if i_hora[20:21] == 'a' and hora_a_p == 12:
        hora_a_p = 0
    elif i_hora[20:21] == 'p'and hora_a_p != 12:
        hora_a_p += 12      
    
    return hora_a_p



def getAllMediciones(args):

    group_dict = { 'dia': ' GROUP BY FECHA','hora': ' GROUP BY HORA','mes': ' GROUP BY MONTH(FECHA)','no':''}

    group_select_dict = {
        "no":   "SELECT  DATE_FORMAT(FECHA,'%d/%m/%Y') AS FECHA,HORA,CARGA,DESCARGA,P_INVERSOR,P_GRID,PV,IFNULL(NUBOSIDAD,'-') AS NUBOSIDAD,"
                "IFNULL(TEMPERATURA,'-') AS TEMPERATURA,PV_VOLTAGE,USO_PROPIO",
        "hora": "SELECT '-' AS FECHA, HORA, ROUND(SUM(CARGA),3) AS CARGA,ROUND(SUM(DESCARGA),3) AS DESCARGA,ROUND(AVG(P_INVERSOR),3) AS P_INVERSOR,ROUND(AVG(P_GRID),3) AS P_GRID,ROUND(SUM(PV),3) AS PV,"
                "ROUND(IFNULL(AVG(NUBOSIDAD),'-'),3) AS NUBOSIDAD,ROUND(IFNULL(AVG(TEMPERATURA),'-'),3) AS TEMPERATURA,ROUND(AVG(PV_VOLTAGE),3) AS PV_VOLTAGE,ROUND(SUM(USO_PROPIO),3) AS USO_PROPIO",
        "dia": "SELECT  DATE_FORMAT(FECHA,'%d/%m/%Y') AS FECHA, '-' AS HORA, ROUND(SUM(CARGA),3) AS CARGA,ROUND(SUM(DESCARGA),3) AS DESCARGA,ROUND(AVG(P_INVERSOR),3) AS P_INVERSOR,ROUND(AVG(P_GRID),3) AS P_GRID,ROUND(SUM(PV),3) AS PV,"
                "ROUND(IFNULL(AVG(NUBOSIDAD),'-'),3) AS NUBOSIDAD,ROUND(IFNULL(AVG(TEMPERATURA),'-'),3) AS TEMPERATURA,ROUND(AVG(PV_VOLTAGE),3) AS PV_VOLTAGE,ROUND(SUM(USO_PROPIO),3) AS USO_PROPIO",
        "mes": "SELECT MONTH(FECHA) AS FECHA,'-' AS HORA, ROUND(SUM(CARGA),3) AS CARGA,ROUND(SUM(DESCARGA),3) AS DESCARGA,ROUND(AVG(P_INVERSOR),3) AS P_INVERSOR,ROUND(AVG(P_GRID),3) AS P_GRID,ROUND(SUM(PV),3) AS PV,"
                "ROUND(IFNULL(AVG(NUBOSIDAD),'-'),3) AS NUBOSIDAD,ROUND(IFNULL(AVG(TEMPERATURA),'-'),3) AS TEMPERATURA,ROUND(AVG(PV_VOLTAGE),3) AS PV_VOLTAGE,ROUND(SUM(USO_PROPIO),3) AS USO_PROPIO",
    }

    query  = group_select_dict[args.get('dataGroupedBy')]
    query += f" FROM SOLAR.MEDICION WHERE STR_TO_DATE('{args.get('desde')}','%d/%m/%Y') <= FECHA AND FECHA <= STR_TO_DATE('{args.get('hasta')}','%d/%m/%Y') "
    query += group_dict[args.get('dataGroupedBy')]

    data = db.makeQuery(query)
    return data

def getHistoricos(param):

    group_dict = { 'dia': 'FECHA','hora': 'HORA','mes': 'MONTH(FECHA)'}

    group_select_dict = { 'dia': "DATE_FORMAT(FECHA,'%d/%m/%Y')",'hora': 'HORA','mes': "DATE_FORMAT(FECHA,'%m')"}

    groupedBy = f"FROM SOLAR.MEDICION GROUP BY {group_dict[param]} ORDER BY VALOR DESC LIMIT 1"

    query = "SELECT A.* FROM("
    # FECHA Y VALOR DEL MAXIMO DE CARGA AGRUPADO
    query += f"(SELECT {group_select_dict[param]} AS CLAVE,SUM(CARGA) AS VALOR, 'Carga' AS CORRESPONDE {groupedBy}) UNION ALL "
    # FECHA Y VALOR DEL MAXIMO DE DESCARGA AGRUPADO
    query += f"(SELECT {group_select_dict[param]} AS CLAVE,SUM(DESCARGA) AS VALOR, 'Descarga' AS CORRESPONDE {groupedBy}) UNION ALL "
    # FECHA Y VALOR DEL MAXIMO DE USO PROPIO AGRUPADO
    query += f"(SELECT {group_select_dict[param]} AS CLAVE,SUM(USO_PROPIO) AS VALOR, 'Uso propio' AS CORRESPONDE {groupedBy}) UNION ALL "
    # FECHA Y VALOR DEL MAXIMO DE P INVERSOR AGRUPADO
    query += f"(SELECT {group_select_dict[param]} AS CLAVE,AVG(P_INVERSOR) AS VALOR, 'Potencia inversor' AS CORRESPONDE {groupedBy}) UNION ALL "
    # FECHA Y VALOR DEL MAXIMO DE PV VOLTAGE AGRUPADO
    query += f"(SELECT {group_select_dict[param]} AS CLAVE,AVG(PV_VOLTAGE) AS VALOR, 'Voltage panel' AS CORRESPONDE {groupedBy}) UNION ALL "
    # FECHA Y VALOR DEL MAXIMO DE PV AGRUPADO
    query += f"(SELECT {group_select_dict[param]} AS CLAVE,SUM(PV) AS VALOR, 'PV' AS CORRESPONDE {groupedBy})"
    query += ") A"
    data = db.makeQuery(query)    
    return data