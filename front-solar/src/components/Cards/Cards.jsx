import React,{useState,useEffect} from "react";
import { Grid,ButtonGroup,Button } from "@material-ui/core";
import styles from "./Cards.module.css";
import SelfCard from "./SelfCard.jsx";
import axios from 'axios';

const Cards = (props) => {

	const [data, setData] = useState({ data: null});
	const [dataGroupedBy, setDataGroupedBy] = useState("dia");
  	const [disabledButtons, setDisabledButtons] = useState({ mes: false,dia: true,hora: false});

	const onButtonClick = (wich) => {
		let data;		
		switch (wich) {
			case 'mes' :	data = { mes: true,dia: false,hora: false};break;
			case 'dia' :	data = { mes: false,dia: true,hora: false};break;
			case 'hora':	data = { mes: false,dia: false,hora: true};break;
			default    :	data = { mes: false,dia: true,hora: false};break;
		};
		setDisabledButtons(data);
		setDataGroupedBy(wich);	
		setData({ data: null});	
		
  	}
 
  	useEffect(() => {
  
		if( data.data === null){
			axios.get( 'http://localhost:5000/historicos', {
				params: {
					dataGroupedBy: dataGroupedBy
				}
			  })
			.then(function(result){      
				console.log(result.data.data[0].VALOR);
				setData(result.data.data)
		
			});
		}
	});
	
	if( data.data === null){	return (<div className={styles.container}></div>);}
  	return (
			<div className={styles.container}>
			  <ButtonGroup className={styles.buttonGroup} size="large" color="primary" aria-label="large outlined primary button group">
				<Button onClick={() => onButtonClick('mes')} disabled={disabledButtons.mes}>Mensual</Button>
				<Button onClick={() => onButtonClick('dia')} disabled={disabledButtons.dia} >Diario</Button>
				<Button onClick={() => onButtonClick('hora')} disabled={disabledButtons.hora} >Horario</Button>
			  </ButtonGroup>
			  <Grid container spacing={6} justify="center">        
				<SelfCard
					data={data[0].VALOR}
					date={data[0].CLAVE}
					style={styles.carga}
					title={"Carga(Kv)"}
				/>
				<SelfCard
					data={data[1].VALOR}
					date={data[1].CLAVE}
					style={styles.descarga}
					title={"Descarga(Kv)"}
				/>
				<SelfCard
					data={data[2].VALOR}
					date={data[2].CLAVE}
					style={styles.usoPropio}
					title={"Uso propio(Kv)"}
				/>
				<SelfCard
					data={data[4].VALOR}
					date={data[4].CLAVE}
					style={styles.nubosidad}
					title={"Potencia inversor(Kv)"}
				/>
				<SelfCard
					data={data[5].VALOR}
					date={data[5].CLAVE}
					style={styles.temperatura}
					title={"Voltaje panel(Kv)"}
				/>
				<SelfCard
					data={data[3].VALOR}
					date={data[3].CLAVE}
					style={styles.pv}
					title={"Pv(Kv)"}
				/>
			  </Grid>
			</div>
		  );
};

export default Cards;
