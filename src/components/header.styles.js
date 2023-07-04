import styled, { css } from 'styled-components'
import Link from 'next/link'


export const transperencyHeader = css`
    position: absolute;
    color: var(--primary-light);
    width: calc(100vw - 4em);
`

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px var(--primary-medium);
    font-weight: 500;
    padding: 2em;
    margin-bottom: 1em;
    color: var(--primary-dark);
    ${({ transperency }) => !transperency ? transperencyHeader : ''};
`

export const Menu = styled.menu`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`

export const MenuItem = styled(Link)`
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    &.active {
        color: var(--secondary);
    }
    &:hover {
        color: var(--primary-medium);
    }
`
/*
const LanguageOptions = styled(MenuItem)`
    display: flex;
    flex-direction: row;
    div {&:first-child {
        padding-right: 0.5em;
    }}
`
*/

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 3em;
    h2 {
        margin-right: auto;
    }
`

export const Title = styled.h1`
    flex-grow: 1;
    min-width: 25%;
`

export const FilterBar = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 3;
`

export const FilterItem = styled.div`
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
