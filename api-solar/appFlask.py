from flask import Flask,render_template,jsonify,url_for,session,request
import os
from flask_cors import CORS
from werkzeug.utils import secure_filename
import service
import weather  
# run
app = Flask(__name__)
app.secret_key = "super secret key"
# CONFIGURACION DE GUARDADO DE ARCHIVOS
UPLOAD_FOLDER = './CSVFiles'
ALLOWED_EXTENSIONS = {'text/csv','csv'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# HABILITACION CORS
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# RUTA PARA CARGA DE DATOS
@app.route('/cargarDatos', methods = ['POST'])
def cargarDatos():
    # GUARDADO DE FILE    
    if request.method == 'POST':
        file = request.files['file']

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    # CARGA DE DATOS
    cargados,fallidos = service.insertarDatos(filename)
    
    return jsonify(cargados=cargados,fallidos=fallidos)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# RUTA PARA HISTORICOS    
@app.route('/historicos', methods = ['GET'])
def getHistoricos():    
    return jsonify(data=service.getHistoricos(request.args.get('dataGroupedBy')))

# RUTA PARA LISTADO    
@app.route('/mediciones', methods = ['GET'])
def getAllMediciones():    
    return jsonify(data=service.getAllMediciones(request.args))
