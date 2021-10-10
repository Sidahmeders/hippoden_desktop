import { Title } from './styles'
import { useState } from 'react'
import styled from 'styled-components'
import { PatientRow } from './styles'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const patients = [
    { id: 1, name: 'Lamia Khaldouni', interest: 'A' },
    { id: 2, name: 'Kamal Bensalah', interest: 'B' },
    { id: 3, name: 'Ilham Nour Telghnai', interest: 'C' },
    { id: 4, name: 'Bashir Dehmanou', interest: 'C' },
    { id: 5, name: 'Kador Mohammed Lezerag', interest: 'B' },
    { id: 6, name: 'Jamila Fighouli', interest: 'A' }
]

function Patient({ id, name }) {
    const [caseClass, setCaseClass] = useState('case')
    const toggleItem = () => {
        caseClass === 'case' ? setCaseClass('case open') : setCaseClass('case')
    }

    return (
        <PatientRow>
            <p className="patientName" key={id}>
                {name}
            </p>
            <p className={caseClass} onClick={toggleItem}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
        </PatientRow>
    )
}

const SortPatientsStyles = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #99999911;
    padding: 8px 0;
    p {
        width: 80px;
        padding: 5px;
        border-radius: 4px;
        text-align: center;
        background: #4444;
    }
`

function SortPatients() {
    return (
        <SortPatientsStyles>
            <p>interest</p>
            <p>date</p>
            <p>age</p>
        </SortPatientsStyles>
    )
}

export default function UpcomingPatients() {
    return (
        <Container>
            <Title>upcoming patients</Title>
            <SortPatients />
            {patients
                .sort((a, b) => {
                    return a.interest.localeCompare(b.interest)
                })
                .map((patient, index) => {
                    if (index >= 3) {
                        return null
                    }
                    const { id, name } = patient
                    return <Patient id={id} name={name} />
                })}
        </Container>
    )
}
