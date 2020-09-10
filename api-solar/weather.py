import requests

def getWeather(i_fecha):
    key="fc56ef3290d74b4a9a2235728201608"
    fecha = i_fecha[6:10] + '-' + i_fecha[3:5]  + '-' + i_fecha[0:2]
    response = requests.get(
        "http://api.weatherapi.com/v1/history.json?key="+ key +"&q=-34.874408,-58.083395&dt="+fecha
    )
    # RETORNO ARREGLO CON LA HORA COMO INDICE
    
    try:
        respuesta = response.json()['forecast']['forecastday'][0]['hour']
    except:
        respuesta = []
    
    return respuesta

