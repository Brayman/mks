import React from 'react'
import styled from 'styled-components'
import Paginator from '../../projects/components/paginator'
import { fetchAddProject, fetchProjects } from '../../projects/projektsSlice'
import { useDispatch } from 'react-redux'

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
    const dispatch = useDispatch()

    const proj = {
        name: "Cuxhaven Holzkraftwerk",
        location: "Cuxhaven",
        year: 2023,
        tags: ['Elektromontage', 'Geräteanschluss'],
        description: "Im Jahr 2023 haben wir erfolgreich ein anspruchsvolles Projekt in der Küstenstadt Cuxhaven abgeschlossen. Unsere Aufgabe bestand darin, die elektrische Installation in einem neu errichteten Holzkraftwerk durchzuführen. Das Projekt umfasste die Verlegung von Starkstromkabeln, Internetleitungen und schwachstromführenden Verbindungen auf dem gesamten Gelände sowie deren Anschluss an die Verteilerschränke. \nUnser erfahrenes Team von Elektrofachkräften arbeitete eng mit den Bauherren und anderen Gewerken zusammen, um die Installation termingerecht und gemäß den technischen Anforderungen abzuschließen.Sorgfältig geplante Verkabelungsrouten gewährleisteten die Effizienz und Sicherheit des Kraftwerks.\nDank der erfolgreichen Verlegung der Starkstromkabel kann das Holzkraftwerk zuverlässig Strom an die verschiedenen Anlagen liefern, während die Internetleitungen eine reibungslose Kommunikation und Fernüberwachung ermöglichen.Zudem haben wir schwachstromführende Verbindungen installiert, um die Steuerungs- und Sicherheitssysteme des Kraftwerks zu integrieren.\nUnsere Elektroinstallateure arbeiteten präzise und gewissenhaft, um die elektrische Infrastruktur des Kraftwerks zu realisieren.Dadurch konnte die Holzkraftwerk-Anlage ihre volle Leistungsfähigkeit erreichen und einen Beitrag zur nachhaltigen Energieerzeugung in Cuxhaven leisten.",
        images: ["/img/factory1.jpg", "/img/factory2.jpg", "/img/factory3.jpg"],
    }

    return (
        <StyledMainBlock>
            <StyledSection>
                <button onClick={() => dispatch(fetchProjects(proj))}>request</button>
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