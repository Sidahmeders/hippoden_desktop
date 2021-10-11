import { PatientRowStyle, Title } from './styles'

const unfinishedPayments = [
    { name: 'Samir Benghalai', sum: 4000 },
    { name: 'Mourad Benkahla', sum: 2000 },
    { name: 'Amal Bensahalh', sum: 11000 },
    { name: 'Imane Bentaiba', sum: 1500 }
]

export default function UnfinishPayments() {
    return (
        <div>
            <Title>unfinished payments</Title>
            {unfinishedPayments.map((item) => {
                const { name, sum } = item
                return (
                    <PatientRowStyle>
                        <p className="patientName">{name}</p>
                        <p>{sum} da</p>
                    </PatientRowStyle>
                )
            })}
        </div>
    )
}
