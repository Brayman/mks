import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    position: absolute;
    width: calc(100vw - 4em);
    flex-direction: row;
    border-bottom: solid 1px var(--primary-medium);
    padding: 2em;
    color: ${({ transperency }) => transperency ? 'var(--primary-light)' : 'var(--primary-medium)'};
`

const Menu = styled.menu`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`

const MenuItem = styled(NavLink)`
    color: var(--primary-light);
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

const Header = () => {
    const transperency = useLocation().pathname === '/';
    return (
        <StyledHeader transperency={transperency}>
            <h2>MKS ONE SYSTEM</h2>
            <Menu>
                <MenuItem
                    to="/company"
                >
                    Company
                </MenuItem>
                <MenuItem
                    to="/projects"
                >
                    Projects
                </MenuItem>
                <MenuItem
                    to="/contacts"
                >
                    Contacts
                </MenuItem>
                {/* <LanguageOptions>
                    <div>
                        EN
                    </div>
                    <div>
                        DE
                    </div>
                </LanguageOptions> */}
            </Menu>

        </StyledHeader>
    )
}

export default Header