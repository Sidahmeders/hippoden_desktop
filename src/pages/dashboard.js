import AppointmentSata from '../components/AppointmentsStat'
import Overview from '../components/Overview'

export default function Dashboard() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <AppointmentSata />
            <Overview />
        </div>
    )
}
