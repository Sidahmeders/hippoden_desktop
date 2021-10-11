import styled from 'styled-components'
import { Title } from './styles'

const ContainerStyle = styled.div`
    text-align: center;
    .total {
        color: gray;
        font-size: 2.5em;
    }
    .gender {
        text-align: left;
        display: flex;
        justify-content: space-around;
        h3 {
            span {
                padding: 10px;
                &:nth-child(2) {
                    font-family: cursive;
                }
            }
        }
    }
`

export default function UpcomingAppointments() {
    return (
        <ContainerStyle>
            <Title>upcoming appointments</Title>
            <h1 className="total">13</h1>
            <div className="gender">
                <h3>
                    <span style={{ color: 'darkblue' }}>male:</span>
                    <span>5</span>
                </h3>
                <h3>
                    <span style={{ color: '#f43' }}>female:</span>
                    <span>8</span>
                </h3>
            </div>
        </ContainerStyle>
    )
}
