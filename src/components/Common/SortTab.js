import styled from 'styled-components'

export const SortTabStyles = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 1px solid #4444;
    border-radius: 4px;

    p {
        width: 33%;
        padding: 6px;
        border-radius: 4px;
        text-align: center;
        &.selected {
            background-color: #4441;
            border-left: 1px solid;
            border-right: 1px solid;
            border-color: #4444;
        }
    }
`

export default function SortTab({ sortOptions, setSortState }) {
    const toggleSelected = (event) => {
        const sortElements = document.querySelectorAll('.sort-options')
        for (let element of sortElements) {
            element.classList.remove('selected')
        }
        event.target.className = 'sort-options selected'
        const sortOption = event.target.innerText
        setSortState(() => sortOption)
    }

    return (
        <SortTabStyles>
            {sortOptions.map((option) => {
                return (
                    <>
                        <p className="sort-options" onClick={toggleSelected}>
                            {option}
                        </p>
                    </>
                )
            })}
        </SortTabStyles>
    )
}
