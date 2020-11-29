import React from "react";
import { Button} from "@material-ui/core";
import { FilePicker } from 'react-file-picker-preview';
import { useAlert } from 'react-alert'
import axios from 'axios';

const SendFileButton = (props) => {

    const alert = useAlert();

    const sendFileHandler = (file) =>{
        let formData = new FormData();
        formData.append('file', file);

        axios.post( 'http://localhost:5000/cargarDatos',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(result){
            let total = result.data.cargados + result.data.fallidos
            alert.show( result.data.cargados + " de " + total +" cargados exitosamente! ");
        })
        .catch(function(){
            alert.show('Fallo la conexion con el servidor!')
        });
    
    }

    return (<FilePicker
                className="button"
                extensions={['text/csv','.csv','xlsx','text/comma-separated-values', 'application/csv', 'application/excel', 'application/vnd.ms-excel', 'application/vnd.msexcel']}
                onChange={(file) => sendFileHandler(file)}
                onError={error => { alert.show('El archivo debe ser de tipo CSV') }}
            >
                <Button color="inherit" className={props.style}> Cargar </Button>
            </FilePicker>
    );
};

export default SendFileButton;