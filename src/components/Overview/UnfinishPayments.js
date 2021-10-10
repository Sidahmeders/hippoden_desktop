import styled from 'styled-components'

const Container = styled.div`
    .row {
        display: flex;
        .patient {
            padding: 0 10px;
            font-weight: 500;
        }
    }
`

export default function UnfinishPayments() {
    return (
        <Container>
            <div className="row">
                <p className="patient">Samir Benghalai</p>
                <p className="amount">4000 da</p>
            </div>
            <div className="row">
                <p className="patient">Mourad Benkahla</p>
                <p className="amount">2000 da</p>
            </div>
            <div className="row">
                <p className="patient">Amal Bensahalh</p>
                <p className="amount">11000 da</p>
            </div>
            <div className="row">
                <p className="patient">Imane Bentaiba</p>
                <p className="amount">1500 da</p>
            </div>
        </Container>
    )
}
