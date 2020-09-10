# import the mysql client for python
import pymysql

def connectionDB():
    # Create a connection object
    databaseServerIP            = "127.0.0.1"  # IP address of the MySQL database server
    databaseUserName            = "root"       # User name of the database server
    databaseUserPassword        = ""           # Password for the database user

    charSet                     = "utf8mb4"     # Character set
    cusrorType                  = pymysql.cursors.DictCursor

    connectionInstance   = pymysql.connect(host=databaseServerIP, user=databaseUserName, password=databaseUserPassword,
                                            charset=charSet,cursorclass=cusrorType)
    
    return connectionInstance

def makeModification(query):
    try:
        # Create a cursor object
        connection = connectionDB()
        cursorInsatnce        = connection.cursor()    

        # SQL Statement to create a database
        sqlStatement  = query 

        # Execute the create database SQL statment through the cursor instance
        cursorInsatnce.execute(sqlStatement)
  
    except Exception as e:
        print("Exeception occured:{}".format(e))
        raise 

    finally:
        connection.close()
    
    return True

def makeQuery(query):
    try:
        # Create a cursor object
        connection = connectionDB()
        cursorInsatnce  = connection.cursor() 

        # Execute the sqlQuery
        cursorInsatnce.execute(query)

        #Fetch all the rows
        databaseList = cursorInsatnce.fetchall()

    except Exception as e:
        print("Exeception occured:{}".format(e))
        raise 

    finally:
        connection.close()
    
    return databaseList

def insert(row):
    query = "INSERT INTO SOLAR.MEDICION VALUES("
    query += "STR_TO_DATE('"+row['fecha']+"','%d/%m/%Y'),"
    query += str(row['AccumulatedDischargerPower']) +","
    query += str(row['AccumulatedLoadPower']) +","
    query += str(row['AccumulatedSelfusePower']) +","
    query += str(row['nubosidad']) +","
    query += str(row['temperatura']) +","
    query += str(row['AccumulatedPvPower']) +","
    query += str(row['hora']) +","
    query += str(row['PInverter']) +","
    query += str(row['PGrid']) +","
    query += str(row['Load percent']) +","
    query += str(row['PV voltage']) +")"

    ok = makeModification(query)
    
    return ok
