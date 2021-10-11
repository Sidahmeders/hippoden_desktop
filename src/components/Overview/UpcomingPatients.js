import { useState } from 'react'
import { ColumnContainerStyle, PatientRowStyle, Title } from './styles'
import SortTab from '../Common/SortTab'

let patients = [
    { id: 1, age: 23, name: 'Lamia Khaldouni', interest: 'A', date: 12 },
    { id: 2, age: 33, name: 'Kamal Bensalah', interest: 'B', date: 90 },
    { id: 3, age: 54, name: 'Ilham Nour Telghnai', interest: 'C', date: 1 },
    { id: 4, age: 30, name: 'Bashir Dehmanou', interest: 'C', date: 22 },
    { id: 5, age: 20, name: 'Kador Mohammed Lezerag', interest: 'B', date: 68 },
    { id: 6, age: 50, name: 'Jamila Fighouli', interest: 'A', date: 40 }
]

function Patient({ name }) {
    const [caseClass, setCaseClass] = useState('case')
    const toggleItem = () => {
        caseClass === 'case' ? setCaseClass('case open') : setCaseClass('case')
    }

    return (
        <PatientRowStyle>
            <p className="patientName">{name}</p>
            <p className={caseClass} onClick={toggleItem}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
        </PatientRowStyle>
    )
}

function sortPatients(patients, sortState) {
    const sortedPatients = patients.sort((a, b) => {
        if (typeof a[sortState] === 'string') {
            return a[sortState].localeCompare(b[sortState])
        } else {
            return a[sortState] - b[sortState]
        }
    })

    return sortedPatients
}

export default function UpcomingPatients() {
    const [sortState, setSortState] = useState('interest')
    const [patientsLimit, setPatientsLimit] = useState(3)
    const sortedPatients = sortPatients(patients, sortState)

    return (
        <ColumnContainerStyle>
            <Title>upcoming patients</Title>
            <SortTab sortOptions={['interest', 'date', 'age']} setSortState={setSortState} />
            {sortedPatients.map((patient, index) => {
                if (index >= patientsLimit) {
                    return null
                }
                const { id, name } = patient
                return <Patient key={id} name={name} />
            })}
        </ColumnContainerStyle>
    )
}
