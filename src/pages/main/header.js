import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px var(--primary-medium);
    padding: 2em;
    color: var(--primary-light);
`

const Menu = styled.menu`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`

const MenuItem = styled.div`
    color: var(--primary-light);
    cursor: pointer;
    &:hover {
        color: var(--primary-medium);
    }
`

const LanguageOptions = styled(MenuItem)`
    display: flex;
    flex-direction: row;
    div {&:first-child {
        padding-right: 0.5em;
    }}
`

const Header = () => {
    return (
        <StyledHeader>
            <h2>MKS ONE SYSTEM</h2>
            <Menu>
                <MenuItem>Company</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Contacts</MenuItem>
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