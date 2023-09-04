
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useDenunciasStore } from "../hooks/useDenunciasStore";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


export const LinesChartDenuncias = () => {
 
    const { atencionsfp, atencionoic, atenciontja, onGetDataAtencionSFP, onGetDataAtencionOIC, onGetDataAtencionTJA } = useDenunciasStore()
    //console.log(atencionsfp);
    useEffect(() => {
      if(atencionsfp.length === 0) onGetDataAtencionSFP()
      if(atencionoic.length === 0) onGetDataAtencionOIC()
    //  if(atenciontja.length === 0) onGetDataAtencionTJA()
    },[])

//console.log(denunciastotal)

            const groupByMes = atencionsfp.reduce((group, denuncia) => {
            const { mesRadicacion } = denuncia;
            group[mesRadicacion] = group[mesRadicacion] ?? [];
            group[mesRadicacion].push(denuncia);
            return group;
          }, {});

          const groupByMesOIC = atencionoic.reduce((group, denuncia) => {
            const { mesRadicacion } = denuncia;
            group[mesRadicacion] = group[mesRadicacion] ?? [];
            group[mesRadicacion].push(denuncia);
            return group;
          }, {});
        //    const groupByMesTJA = atenciontja.reduce((group, denuncia) => {
            // const { mesRadicacion } = denuncia;
            // group[mesRadicacion] = group[mesRadicacion] ?? [];
            // group[mesRadicacion].push(denuncia);
            // return group;
            // }, {});
          
    let enero = groupByMes['enero']?.length
    if(enero === undefined){
        enero=0
    }
    let febrero = groupByMes['febrero']?.length 
    if(febrero === undefined){
        febrero=0
    }
    let marzo = groupByMes['marzo']?.length
    if(marzo === undefined){
    marzo=0
    }
    let abril = groupByMes['abril']?.length
    if(abril === undefined){
    abril=0
    }
    let mayo = groupByMes['mayo']?.length
    if(mayo === undefined){
    mayo=0
    }
    let junio = groupByMes['junio']?.length
    if(junio === undefined){
    junio=0
    }
    let julio = groupByMes['julio']?.length
    if(julio === undefined){
    julio=0
    }
    let agosto = groupByMes['agosto']?.length
    if(agosto === undefined){
    agosto=0
    }
    let septiembre = groupByMes['septiembre']?.length
    if(septiembre === undefined){
    septiembre=0
    }
    let octubre = groupByMes['octubre']?.length
    if(octubre === undefined){
    octubre=0
    }
    let noviembre = groupByMes['noviembre']?.length
    if(noviembre === undefined){
    noviembre=0
    }
    let diciembre = groupByMes['diciembre']?.length
    if(diciembre === undefined){
    diciembre=0
    }

    //***********************OICS */
    let eneroO = groupByMesOIC['enero']?.length
    if(eneroO === undefined){
        eneroO=0
    }
    let febreroO = groupByMesOIC['febrero']?.length 
    if(febreroO === undefined){
        febreroO=0
    }
    let marzoO = groupByMesOIC['marzo']?.length
    if(marzoO === undefined){
        marzoO=0
    }
    let abrilO = groupByMesOIC['abril']?.length
    if(abrilO === undefined){
        abrilO=0;
    }
    let mayoO = groupByMesOIC['mayo']?.length
    if(mayoO === undefined){
        mayoO=0;
    }
    let junioO = groupByMesOIC['junio']?.length
    if(junioO === undefined){
        junioO=0;
    }
    let julioO = groupByMesOIC['julio']?.length
    if(julioO === undefined){
        julioO=0;
    }
    let agostoO = groupByMesOIC['agosto']?.length
    if(agostoO === undefined){
        agostoO=0;
    }
    let septiembreO = groupByMesOIC['septiembre']?.length
    if(septiembreO === undefined){
        septiembreO=0;
    }
    let octubreO = groupByMesOIC['octubre']?.length
    if(octubreO === undefined){
        octubreO=0;
    }
    let noviembreO = groupByMesOIC['noviembre']?.length
    if(noviembreO === undefined){
        noviembreO=0;
    }
    let diciembreO = groupByMesOIC['diciembre']?.length
    if(diciembreO === undefined){
        diciembreO=0;
    }

    // //*************************TJAS */
    // let eneroT = groupByMesTJA['enero']?.length
    // if(eneroT === undefined){
        // eneroT=0;
    // }
    // let febreroT = groupByMesTJA['febrero']?.length 
    // if(febreroT === undefined){
        // febreroT=0;
    // }
    // let marzoT = groupByMesTJA['marzo']?.length
    // if(marzoT === undefined){
        // marzoT=0;
    // }
    // let abrilT = groupByMesTJA['abril']?.length
    // if(abrilT === undefined){
        // abrilT=0;
    // }
    // let mayoT = groupByMesTJA['mayo']?.length
    // if(mayoT === undefined){
        // mayoT=0;
    // }
    // let junioT = groupByMesTJA['junio']?.length
    // if(junioT === undefined){
        // junioT=0;
    // }
    // let julioT = groupByMesTJA['julio']?.length
    // if(julioT === undefined){
        // julioT=0;
    // }
    // let agostoT = groupByMesTJA['agosto']?.length
    // if(agostoT === undefined){
        // agostoT=0;
    // }
    // let septiembreT = groupByMesTJA['septiembre']?.length
    // if(septiembreT === undefined){
        // septiembreT=0;
    // }
    // let octubreT = groupByMesTJA['octubre']?.length
    // if(octubreT === undefined){
        // octubreT=0;
    // }
    // let noviembreT = groupByMesTJA['noviembre']?.length
    // if(noviembreT === undefined){
        // noviembreT=0;
    // }
    // let diciembreT = groupByMesTJA['diciembre']?.length
    // if(diciembreT === undefined){
        // diciembreT=0;
    // }


    var mioptions = {
        responsive: true,
    plugins: {
        legend: {
    position: 'top',
        },
        title: {
    display: true,
    text: 'Seguimiento a Denuncias',
    font: {
    size: 24
    }
        },
    },
    };
    
    var denunciassfp = [enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre];
    var denunciasoic = [eneroO, febreroO, marzoO, abrilO, mayoO, junioO, julioO, agostoO, septiembreO, octubreO, noviembreO, diciembreO];
    // var denunciastja = [eneroT, febreroT, marzoT, abrilT, mayoT, junioT, julioT, agostoT, septiembreT, octubreT, noviembreT, diciembreT];
    var meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    var midata = {
        labels: meses,
        datasets: [
            {
                label: 'SFP',
                data: denunciassfp,
                tension: 0.5,
                fill: false,
                borderColor: 'green',
                backgrounColor: 'green',
                pointRadius: 5,
                pointBorderColor: 'green',
                pointBackgroundColor: 'green',
            
            },
            {
                label: 'OIC',
                data: denunciasoic,
                tension: 0.5,
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                backgrounColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            },
            // {
            //     label: 'TJA',
            //     data: denunciastja,
            //     tension: 0.5,
            //     fill: false,
            //     borderColor: 'blue',
            //     backgrounColor: 'blue',
            //     pointRadius: 5,
            //     pointBorderColor: 'blue',
            //     pointBackgroundColor: 'blue',
            // },
        ],
    };
    
                    return(

                     <Line data={midata} options={mioptions}/>
                     )
}
export default LinesChartDenuncias
    