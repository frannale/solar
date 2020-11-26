import React,{useEffect,useState} from "react";

import Filter from "../List/Filter";
import  Selects  from "./Selects.jsx";
import  Chart  from "./Chart";
// import Chart from "./Filter";
import {Typography } from "@material-ui/core";

import axios from 'axios';


function createData(row) {
    return { fecha: row.FECHA , carga : row.CARGA, descarga : row.DESCARGA, pv : row.PV, hora : row.HORA,
             nubosidad : row.NUBOSIDAD, temperatura : row.TEMPERATURA, pv_voltage : row.PV_VOLTAGE, uso_propio : row.USO_PROPIO,
             p_inversor : row.P_INVERSOR, p_grid : row.P_GRID
            };
}

function pastMonth(){
    var date = new Date();
    date.setDate(date.getDate() - 60);
    return date;
}

function convertDate(date){
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    date = dd + '/' + mm + '/' + yyyy;
    return date;
}

const TheChart = (props) => {

	const [data, setData] = useState([]);
    const [dataAsked, setDataAsked] = useState(false);
    const [grouped, setGrouped] = useState('dia');
    const [filterDates, setFilterDates] = useState({ from: pastMonth()   ,hasta : new Date()});
    const [seleccionadosValues, setSeleccionadosValues] = useState([]);
    const [selectOptions, setSelectOptions] = useState([]);

    const onFilteredHanlderDesde = (date) => {
        setFilterDates({...filterDates,['from']: date });
        setDataAsked(false);
    };

    const onFilteredHanlderHasta = (date) => {
        
        setFilterDates({...filterDates,['hasta']: date });
        setDataAsked(false);
    }

    const onFilteredGrouped = (event) => {
        setGrouped(event.target.value);   
        setDataAsked(false);
    }

    const onSelectChange = (item) => {
        setSeleccionadosValues(item);
      };

    const getRowID = (row) => {
        if(row.FECHA == undefined && row.HORA == undefined)
            return  row.fecha != '-' ? (row.hora == '-' ? row.fecha :row.fecha +' '+ row.hora+'hs') : row.hora;
        return  row.FECHA != '-' ? (row.HORA == '-' ? row.FECHA :row.FECHA +' '+ row.HORA+'hs') : row.HORA;
      };

    const getData = () => {
        
        
        let selected_values = seleccionadosValues != null ? seleccionadosValues.map(s => s.value) : [];            
        
        return  data.filter(m => selected_values.includes(getRowID(m)) );
        
      };

    useEffect(() => {
		if( !dataAsked){
            
            let desde = convertDate(filterDates.from);
            let hasta = convertDate(filterDates.hasta);
            
			axios.get( 'http://localhost:5000/mediciones', {
				params: {
                    dataGroupedBy: grouped,
                    desde : desde,
                    hasta : hasta,
                }
            })
			.then(function(result){
                let parsed_data =[]
                let parsed_select_options =[];
                let data = result.data.data;
				data.map(function(row){
                    let id_value = getRowID(row);                 
                    parsed_select_options.push({value: id_value, label: id_value});
                    parsed_data.push(createData(row));
				})
				setDataAsked(true);
                setData(parsed_data);
                setSelectOptions(parsed_select_options);
                setSeleccionadosValues(parsed_select_options.slice(0,2));       

			});
		}
	},[filterDates,grouped]);

    return (
        <div>
            <Filter dates={filterDates} grouped={grouped} onFiltered={ {from: onFilteredHanlderDesde, hasta: onFilteredHanlderHasta,grouped: onFilteredGrouped} }/>   
            <Selects options={selectOptions} default={seleccionadosValues} onChange={onSelectChange} />
            <Chart mediciones={getData()} />
        </div> 
        
    );
}
export default TheChart;