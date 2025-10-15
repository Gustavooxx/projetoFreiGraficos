import React from 'react'
import './index.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

/**
 * SquareChart
 * Expects prop `records` as array of objects:
 * { _id: { courseName, periodName }, totalInscritos }
 */
export default function SquareChart({ records, options }) {
  const parsed = Array.isArray(records) ? records.map(r => {
    const course = r._id?.courseName ?? r.courseName ?? 'Unknown'
    const period = r._id?.periodName ?? r.periodName ?? ''
    const label = `${course} - ${period}`.trim()
    const value = r.totalInscritos ?? r.total ?? 0
    return { label, value }
  }) : []

  const labels = parsed.map(p => p.label)
  const values = parsed.map(p => p.value)

  // palette: blue and soft orange
  const BLUE = 'rgba(13, 18, 174, 1)'
  const BLUE_BG = 'rgba(14, 3, 88, 1)'
  const ORANGE = 'rgba(255,159,64,1)'
  const ORANGE_BG = 'rgba(255, 160, 64, 1)'

  const data = {
    labels,
    datasets: [
      {
        label: 'Total Inscritos',
        data: values,
        backgroundColor: values.map((_, i) => i % 2 === 0 ? BLUE_BG : ORANGE_BG),
        borderColor: values.map((_, i) => i % 2 === 0 ? BLUE : ORANGE),

        borderWidth: 1,
        borderRadius: 6,
        barThickness: 28,
      }
    ]
  }

  const defaultOptions = options || {
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Inscritos por Curso e Período', color: '#334155' }
    },
    scales: {
      x: { ticks: { autoSkip: false, maxRotation: 45, callback: function (val) { return this.getLabelForValue(val).length > 30 ? this.getLabelForValue(val).slice(0, 30) + '...' : this.getLabelForValue(val) } }, grid: { display: false } },
      y: { beginAtZero: true, grid: { color: 'rgba(200,210,215,0.12)' } }
    }
  }

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto' }} className='container-bar'>
      <Bar data={data} options={defaultOptions} />
    </div>
  )
}
