import styled from 'styled-components'

export const ColumnContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
`

export const PatientRowStyle = styled.div`
    display: flex;
    .patientName {
        padding: 0 10px;
        font-weight: 500;
        width: 150px;
    }
    .case {
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover {
            cursor: help;
        }
        &.open {
            text-overflow: unset;
            white-space: normal;
        }
    }
`

export const Title = styled.h2`
    text-align: center;
    color: #466;
    font-weight: 400;
    padding: 10px 20px;
    font-family: 'Jost', sans-serif;
`
