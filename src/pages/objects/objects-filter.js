import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
        margin-right: auto;
    }
`

const Title = styled.h1`
    flex-grow: 1;
    min-width: 25%;
`

const FilterBar = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 3;
`

const FilterItem = styled.div`
    padding: 0.5em 3em;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        color: var(--secondary);
        background-color: var(--primary-light);
        border-radius: 5px;
    }
`

const ObjectsFilter = ({ filters }) => {
    return (
        <Header>
            <Title>
                Objects
            </Title>
            <FilterBar>
                {filters.map((item, i) => <FilterItem key={i}>{item}</FilterItem>)}
            </FilterBar>
        </Header>
    )
}

export default ObjectsFilter