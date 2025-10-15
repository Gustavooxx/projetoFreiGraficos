
import React from 'react'
import LineChart from '../../components/Linegraph/LineChart'
import SquareChart from '../../components/barGraph/SquareChart'

const records = [
  { _id: '08/10', totalAgendamentos: 1 },
  { _id: '09/10', totalAgendamentos: 3 },
  { _id: '10/10', totalAgendamentos: 7 },
  { _id: '13/10', totalAgendamentos: 28 },
  { _id: '14/10/2025', totalAgendamentos: 55 },
  { _id: '15/10/2025', totalAgendamentos: 120 },
  { _id: '16/10/2025', totalAgendamentos: 54 },
  { _id: '17/10/2025', totalAgendamentos: 70 },
  { _id: '20/10/2025', totalAgendamentos: 53 },
  { _id: '21/10/2025', totalAgendamentos: 37 },
  { _id: '22/10/2025', totalAgendamentos: 28 },
  { _id: '23/10/2025', totalAgendamentos: 29 },
  { _id: '24/10/2025', totalAgendamentos: 43 }
]

const inscritos = [
 {_id:{ courseName: "Administração", periodName: "Manhã", totalInscritos: 47 }},
{_id:{ courseName: "Administração", periodName: "Tarde ", totalInscritos: 71 }},
{_id:{ courseName: "Automação Residencial e Robótica", periodName: "Manhã", totalInscritos: 6 }},
{_id:{ courseName: "Automação Residencial e Robótica", periodName: "Tarde ", totalInscritos: 7 }},
{_id:{ courseName: "Comunicação Visual", periodName: "Manhã", totalInscritos: 24 }},
{_id:{ courseName: "Comunicação Visual", periodName: "Tarde", totalInscritos: 18 }},
{_id:{ courseName: "Eletromecânica de Autos\r", periodName: "Manhã", totalInscritos: 10 }},
{_id:{ courseName: "Eletromecânica de Autos\r", periodName: "Tarde", totalInscritos: 19 }},
{_id:{ courseName: "Informática", periodName: "Manhã", totalInscritos: 45 }},
{_id:{ courseName: "Informática", periodName: "Tarde ", totalInscritos: 70 }},
{_id:{ courseName: "Informática Básica - Excel (Noturno)", periodName: "Noite", totalInscritos: 1 }},
{_id:{ courseName: "Inglês Avançado\r (Sábados)", periodName: "Manhã", totalInscritos: 33 }},
{_id:{ courseName: "Inglês Básico (Noturno)\r", periodName: "Noite", totalInscritos: 55 }},
{_id:{ courseName: "Inglês Básico - Pré Intermediário (Diurno)", periodName: "Manhã 1", totalInscritos: 38 }},
{_id:{ courseName: "Inglês Básico - Pré Intermediário (Diurno)", periodName: "Manhã 2", totalInscritos: 25 }},
{_id:{ courseName: "Inglês Básico - Pré Intermediário (Diurno)", periodName: "Tarde 1", totalInscritos: 64 }},
{_id:{ courseName: "Inglês Básico - Pré Intermediário (Diurno)", periodName: "Tarde 2 ", totalInscritos: 29 }},
{_id:{ courseName: "Inglês Intermediário (Sábados)", periodName: "Manhã", totalInscritos: 140 }},
{_id:{ courseName: "Inglês Pré Intermediário (Noturno)", periodName: "Noite", totalInscritos: 20 }},
{_id:{ courseName: "Inglês Teens I (Diurno)", periodName: "Manhã", totalInscritos: 1 }},
{_id:{ courseName: "Inglês Teens I (Diurno)", periodName: "Manhã I", totalInscritos: 36 }},
{_id:{ courseName: "Inglês Teens I (Diurno)", periodName: "Manhã II", totalInscritos: 13 }},
{_id:{ courseName: "Inglês Teens I (Diurno)", periodName: "Tarde I", totalInscritos: 72 }},
{_id:{ courseName: "Inglês Teens I (Diurno)", periodName: "Tarde II", totalInscritos: 31 }},
{_id:{ courseName: "Inglês Teens II (Diurno)", periodName: "Manhã II", totalInscritos: 18 }},
{_id:{ courseName: "Inglês Teens II (Diurno)", periodName: "Tarde II", totalInscritos: 51 }}
]

export default function Website(){
    return (
        <div style={{ padding: 20 }} className='container-site'>
            <h1>Agendamentos por dia</h1>
            <p>Gráfico mostrando o total de agendamentos por dia.</p>
            <LineChart records={records} />

            <hr style={{ margin: '40px 0' }} />
            <h2>Inscrições por curso e período</h2>
            <p>Gráfico de barras (retângulos) mostrando total de inscritos por curso+período.</p>
            <SquareChart records={inscritos} />

        </div>
    )
}