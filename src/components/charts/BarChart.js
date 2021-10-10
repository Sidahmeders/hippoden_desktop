import { Bar } from 'react-chartjs-2'

const BarChart = ({ chartData, chartOptions }) => {
    return (
        <div className="chart">
            <Bar data={chartData} options={chartOptions} />
        </div>
    )
}

export default BarChart
