import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    .title {
        color: #466;
        font-weight: 400;
    }
    .total {
        color: gray;
        font-size: 2.5em;
        margin: 18px;
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
        <Container>
            <h2 className="title">upcoming appointments</h2>
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
        </Container>
    )
}
