"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.css'
import styled from 'styled-components'
import Paginator from '../components/paginator'

const StyledMainBlock = styled.div`
    min-height: 100vh;
    background-size: cover;
    background-position: left;
    display: flex;
    flex-direction: column;
`

const StyledSection = styled.section`
    padding:2em 2em 4em 2em;
    margin-top: auto;
    color: var(--primary-light);
h2 {
    font-size: 40px;
}
    
`

export default function MainPage() {
    return (
        <StyledMainBlock className={styles.background}>
            <StyledSection>
                <h2>
                    One Partner,<br /> One Solution
                </h2>
                Wir sind ein erfahrenes Unternehmen, das sich auf die Montage von Maschinen und Anlagen spezialisiert hat. Wir bieten eine umfassende Palette von Montagedienstleistungen an und arbeiten eng mit unseren Kunden zusammen, um maßgeschneiderte Lösungen zu bieten.
            </StyledSection>
            <Paginator />
        </StyledMainBlock>
    )
}
