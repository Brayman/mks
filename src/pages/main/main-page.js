import React from 'react'
import styled from 'styled-components'
import Paginator from '../../projects/components/paginator'

const PictureWithLogo = process.env.PUBLIC_URL + '/img/picture-1600.jpg'

const StyledMainBlock = styled.div`
    min-height: 100vh;
    background-image: url(${PictureWithLogo});
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

const MainPage = () => {
    return (
        <StyledMainBlock>
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

export default MainPage