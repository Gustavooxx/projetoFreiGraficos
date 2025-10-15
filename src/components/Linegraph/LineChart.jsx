import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Theme colors: blue and soft orange
const BLUE = 'rgba(7, 27, 114, 1)'
const BLUE_BG = 'rgba(54,162,235,0.12)'
const ORANGE = 'rgba(255,159,64,1)'
const ORANGE_BG = 'rgba(255,159,64,0.14)'

export default function LineChart({ records, options }){
  const parsed = Array.isArray(records) ? records.map(r => ({
    label: r._id,
    value: r.totalAgendamentos
  })) : []

  const labels = parsed.map(p => p.label)
  const values = parsed.map(p => p.value)

  const data = {
    labels,
    datasets: [
      {
        label: 'Agendamentos',
        data: values,
        fill: true,
        borderColor: BLUE,
        backgroundColor: BLUE_BG,
        pointBackgroundColor: ORANGE,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: ORANGE,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      }
    ]
  }

  const defaultOptions = options || {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Agendamentos por dia', color: '#334155' }
    },
    scales: {
      x: { grid: { color: 'rgba(200,210,215,0.15)' } },
      y: { beginAtZero: true, grid: { color: 'rgba(200,210,215,0.15)' } }
    }
  }

  return (
    <div style={{ maxWidth: 980, margin: '0 auto', background: '#fff', padding: 16, borderRadius: 8, boxShadow: '0 6px 18px rgba(16,24,40,0.06)' }}>
      <Line data={data} options={{...defaultOptions, ...options}} />
    </div>
  )
}
