"use client"

import React from 'react'
import { Menu, MenuItem, StyledHeader } from './header.styles'


const Header = () => {
    // const transperency = useLocation().pathname === '/';
    return (
        <StyledHeader >
            <h2>MKS ONE SYSTEM</h2>
            <Menu>
                <MenuItem
                    href="/company"
                >
                    Company
                </MenuItem>
                <MenuItem
                    href="/projects"
                >
                    Projects
                </MenuItem>
                <MenuItem
                    href="/contacts"
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