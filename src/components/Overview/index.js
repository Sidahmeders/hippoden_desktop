import UpcomingAppointments from './UpcomingAppointments'
import UnfinishPayments from './UnfinishPayments'

export default function Overview() {
    return (
        <>
            <UpcomingAppointments />
            <UnfinishPayments />
            <div className="interesting-cases"></div>
            <div className="missing-products"></div>
        </>
    )
}
