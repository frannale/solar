import React,{useEffect,useState} from "react";

import List from "./List";
import Filter from "./Filter";

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

const Listado = (props) => {

	const [data, setData] = useState([]);
    const [dataAsked, setDataAsked] = useState(false);
    const [grouped, setGrouped] = useState('no');
    const [filterDates, setFilterDates] = useState({ from: pastMonth()   ,hasta : new Date()});

    const onFilteredHanlderDesde = (date) => {
        setFilterDates({...filterDates,['from']: date });
        setDataAsked(false);
    }

    const onFilteredHanlderHasta = (date) => {
        
        setFilterDates({...filterDates,['hasta']: date });
        setDataAsked(false);
    }

    const onFilteredGrouped = (event) => {
        setGrouped(event.target.value);   
        setDataAsked(false);
    }

    const fetchData = () => {
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
                result.data.data.map(function(row){
                    parsed_data.push(createData(row))
                })
                setData(parsed_data);
    
            });
    }

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
				result.data.data.map(function(row){
					parsed_data.push(createData(row))
				})
				setDataAsked(true);
				setData(parsed_data);

			});
		}
	});

    return (
        <div>
            <Filter dates={filterDates} grouped={grouped} onFiltered={ {from: onFilteredHanlderDesde, hasta: onFilteredHanlderHasta,grouped: onFilteredGrouped} }/>   
            <List mediciones={data}/>
        </div> 
        
    );
}
export default Listado;