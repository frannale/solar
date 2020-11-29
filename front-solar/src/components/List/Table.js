import React,{useEffect} from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export default function Table(props){

  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableSelectCell:{
        root: {
          backgroundColor: 'whitesmoke',
        },
        headerCell:{
          backgroundColor:"gainsboro"
        }
      },
      MUIDataTableHeadCell:{
        root:{
          backgroundColor:"gainsboro",
        },
        fixedHeader:{
          backgroundColor:"gainsboro",
        }
      },
      MUIDataTableToolbar:{
        root:{
          backgroundColor:"#389393"
        },
        icon:{
          color:"white"
        },
        titleText:{
          color:"white",
          fontFamily:"Roboto Slab"
        }
      }
    }
  })

  const columnas = [
    {   
        name: "ID",
        options: {
          display:false,
          sort:false,
          numeric:true
        }
      },
    { 
      name: "FECHA",
      options: {
        display:true,
        sort:true
      }
    },
    { 
      name: "HORA",
      options: {
        display:true,
        sort:true
      }
    },
    { 
        name: "CARGA(Kv)",
        options: {
          display:true,
          sort:true,
          numeric:true
        }
      },
    { 
      name: "DESCARGA(Kv)",
      options: {
        display:true,
        sort:true
      }
    },
    { 
        name: "USO PROPIO(Kv)",
        options: {
          display:true,
          sort:true
        }
    },
    { 
        name: "PV(Kv)",
        options: {
          display:true,
          sort:true
        }
    },
    { 
        name: "P EXT(Kv)",
        options: {
            display:true,
            sort:true
        }
    },
    { 
        name: "P INV(Kv)",
        options: {
          display:true,
          sort:true
        }
    },
    { 
        name: "P VOLTAJE (Kv)",
        options: {
            display:true,
            sort:true,
            numeric:true
        }
    },
    { 
        name: "NUBOSIDAD(%)",
        options: {
          display:true,
          sort:true
        }
    },
    { 
        name: "TEMPERATURA(Cº)",
        options: {
            display:true,
            sort:true
        }
    }
  
  ];

  const options = {
    filterType: "dropdown",
    print: false,
    filter: true,
    selectableRows: 'multiple',
    responsive: "scroll",
    onRowsDelete:false ,
    selectToolbarPlacement: "replace",
    textLabels: {
      body: {
        noMatch: "No se encontraron registros",
        toolTip: "Orden",
        columnHeaderTooltip: column => `Ordenado por ${column.label}`
      },
      pagination: {
        next: "Pagina siguiente",
        previous: "Pagina anterior",
        rowsPerPage: "Mostrando:",
        displayRows: "de",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "Reiniciar",
      },
      viewColumns: {
        title: "Mostrar columnas",
        titleAria: "Mostrar/Ocultar columnas de la tabla",
      },
      selectedRows: {
        text: "Fila/s seleccionadas",
        delete: "Borrar",
        deleteAria: "Borrar fila/s seleccionadas",
      }
    }
  }

  const getData = () => {
    let data = [];
    data = props.datos.map( el =>
        [data.length,el.fecha,el.hora, el.carga,el.descarga,el.uso_propio,
        el.pv,el.p_grid,el.p_inversor,parseFloat(el.pv_voltage),el.nubosidad,el.temperatura]
        );
    return data;  
    }

return(
  <MuiThemeProvider theme={getMuiTheme()}>  
    <MUIDataTable
      title={"Mediciones"}
      data={getData()}
      columns={columnas}
      options={options}

  />
  </MuiThemeProvider>

)}
