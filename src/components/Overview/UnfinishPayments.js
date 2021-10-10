import { PatientRow, Title } from './styles'

export default function UnfinishPayments() {
    return (
        <div>
            <Title>unfinished payments</Title>
            <PatientRow>
                <p className="patientName">Samir Benghalai</p>
                <p>4000 da</p>
            </PatientRow>
            <PatientRow>
                <p className="patientName">Mourad Benkahla</p>
                <p>2000 da</p>
            </PatientRow>
            <PatientRow>
                <p className="patientName">Amal Bensahalh</p>
                <p>11000 da</p>
            </PatientRow>
            <PatientRow>
                <p className="patientName">Imane Bentaiba</p>
                <p>1500 da</p>
            </PatientRow>
        </div>
    )
}
