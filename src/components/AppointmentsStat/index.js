import BarChart from '../Charts/BarChart'

export default function appointmentSata() {
    const barChartData = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        datasets: [
            {
                label: 'appointments',
                data: [54, 79, 59, 63, 39, 67, 45, 78, 45, 66, 76, 35],
                color: 'darkblue',
                backgroundColor: '#23d9',
                borderColor: 'darkblue',
                borderWidth: 2,
                borderRadius: 12
            },
            {
                label: 'consultation',
                data: [12, 3, 9, 3, 12, 17, 15, 5, 5, 16, 6, 25],
                color: 'darkblue',
                backgroundColor: '#d009',
                borderColor: '#d20',
                borderWidth: 2,
                borderRadius: 12
            }
        ]
    }

    const barChartOptions = {
        scales: {
            x: {
                ticks: {
                    color: 'darkblue'
                }
            },
            y: {
                ticks: {
                    color: 'blue'
                },
                title: {
                    display: true,
                    color: 'darkblue'
                }
            }
        }
    }

    return (
        <div style={{ width: '40vw', margin: '2vw' }}>
            <BarChart chartData={barChartData} chartOptions={barChartOptions} />
        </div>
    )
}
