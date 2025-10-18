
import React, { useEffect, useState } from 'react'
import LineChart from '../../components/Linegraph/LineChart'
import SquareChart from '../../components/barGraph/SquareChart'

export default function Website(){
    const [lineData, setLineData] = useState([]);
    const [barData, setBarData] = useState([]);

    useEffect(() => {
        fetchLineData();
        fetchBarData();
    }, []);

    const fetchLineData = async () => {
        try {
            const response = await fetch('http://localhost:5010/line/listar/data');
            const data = await response.json();
            setLineData(data);
        } catch (error) {
            console.error('Erro ao buscar dados do gráfico de linha:', error);
        }
    };

    const fetchBarData = async () => {
        try {
            const response = await fetch('http://localhost:5010/bar/listar/quantidade');
            const data = await response.json();
            setBarData(data);
        } catch (error) {
            console.error('Erro ao buscar dados do gráfico de barras:', error);
        }
    };

    return (
        <div style={{ padding: 20 }} className='container-site'>
            <h1>Agendamentos por dia</h1>
            <p>Gráfico mostrando o total de agendamentos por dia.</p>
            <LineChart records={lineData} />

            <hr style={{ margin: '40px 0' }} />
            <h2>Inscrições por curso e período</h2>
            <p>Gráfico mostrando total de inscritos por curso+período.</p>
            <SquareChart records={barData} />

        </div>
    )
}
