import { Bar } from "react-chartjs-2";
import React from "react";
import styles from "./Chart.module.css";


const Charts = (props) => {
  
  function getData(){

    //cambiar esto por lo del state de seleccionados
    return {labels: props.mediciones.map(m => m.fecha != '-' ? (m.hora == '-' ? m.fecha :m.fecha +' '+ m.hora+'hs') : m.hora),
        
    datasets: [
      {
        label: 'CARGA(Kv)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: props.mediciones.map(m => m.carga)
      },
      {
        label: 'DESCARGA(Kv)',
        backgroundColor: 'rgba(0,255,0,0.2)',
        borderColor: 'rgba(0,255,0,0.1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,255,0,0.4)',
        hoverBorderColor: 'rgba(0,255,0,1)',
        data: props.mediciones.map(m => m.descarga)
      },
      {
        label: 'USO PROPIO(Kv)',
        backgroundColor: 'rgba(0,0,255,0.2)',
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,0,255,0.4)',
        hoverBorderColor: 'rgba(0,0,255,1)',
        data: props.mediciones.map(m => m.usoPropio)
      },
      {
        label: 'PV(Kv)',
        backgroundColor: 'rgba(20,0,25,0.2)',
        borderColor: 'rgba(20,0,25,0.2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(20,0,25,0.2)',
        hoverBorderColor: 'rgba(0,0,255,1)',
        data: props.mediciones.map(m => m.pv)
      },
      {
        label: 'P EXT(Kv)',
        backgroundColor: 'rgba(0,255,132,0.2)',
        borderColor: 'rgba(0,255,132,0.2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(0,255,132,0.2)',
        data: props.mediciones.map(m => m.p_grid)
      },
      {
        label: 'P INV(Kv)',
        backgroundColor: 'rgba(74,255,52,0.2)',
        borderColor: 'rgba(74,255,52,0.2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,255,0,0.4)',
        hoverBorderColor: 'rgba(74,255,52,0.2)',
        data: props.mediciones.map(m => m.p_inversor)
      },
      {
        label: 'P VOLTAJE (Kv)',
        backgroundColor: 'rgba(145,120,10,0.2)',
        borderColor: 'rgba(145,120,10,0.2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,0,255,0.4)',
        hoverBorderColor: 'rgba(145,120,10,0.2)',
        data: props.mediciones.map(m => m.pv_voltage)
      },
      {
        label: 'NUBOSIDAD(%)',
        backgroundColor: 'rgba(20,255,255,0.2)',
        borderColor: 'rgba(20,0,25,0.2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(20,0,25,0.2)',
        hoverBorderColor: 'rgba(20,255,255,0.2)',
        data: props.mediciones.map(m => m.nubosidad)
      },
      {
        label: 'TEMPERATURA(Cº)',
        backgroundColor: 'rgba(249,160,125,0.2)',
        borderColor: 'rgba(249,160,125,0.2)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(249,160,125,0.2)',
        hoverBorderColor: 'rgba(0,0,255,1)',
        data: props.mediciones.map(m => m.temperatura)
      },
    ]}

  };

  return (
        <div>         
          <div className={styles.chart}>
            <Bar
              data={getData()}
              
              options={{
                responsive: true,
                aspectRatio: 2,
                scales: {
                  xAxes: [
                    {
                      reverse: true, // Esto cambia el orden de los datos, de mayor a menor
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
    );
    
}
export default Charts;
