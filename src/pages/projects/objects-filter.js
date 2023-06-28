import React from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 3em;
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
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        color: var(--secondary);
        background-color: var(--primary-light);
        border-radius: 5px;
    }
`

const ObjectsFilter = ({ filters }) => {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('filter'));
    const filterClick = (e) => {
        console.log(e.target);
        setSearchParams({ filter: e.target.outerText })
    }
    return (
        <Header>
            <Title>
                Objects
            </Title>
            <FilterBar>
                {filters.map((item, i) => {
                    return (
                        <FilterItem
                            key={i}
                            onClick={filterClick}
                        >
                            {item}
                        </FilterItem>
                    )
                })}
            </FilterBar>
        </Header>
    )
}

export default ObjectsFilter