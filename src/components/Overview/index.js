import UpcomingAppointments from './UpcomingAppointments'
import UnfinishPayments from './UnfinishPayments'
import UpcomingPatients from './UpcomingPatients'

export default function Overview() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <UpcomingAppointments />
            <UnfinishPayments />
            <UpcomingPatients />
            <div className="interesting-cases"></div>
            <div className="missing-products"></div>
        </div>
    )
}
