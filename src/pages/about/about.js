import React from 'react'
import { Article, Img, Li, Menu, P, Page, Title } from './about.styles'

const About = () => {
    return (
        <Page>
            <Title>Company</Title>
            <div>
                <Menu>
                    <Li><a href='#about'>About</a></Li>
                    <Li><a href='#policy'>Policy</a></Li>
                    <Li><a href='#quality'>Quality</a></Li>
                    <Li><a href='#responsibility'>Responsibility</a></Li>
                    <Li><a href='#enterprise'>Enterprise</a></Li>
                </Menu>
            </div>
            <div className='content'>
                <P id='about'>Unser Unternehmen ist spezialisiert auf umfassende Elektroinstallationen und Elektroservices. Mit unserer langjährigen Erfahrung bieten wir professionelle Dienstleistungen im Bereich der Elektrotechnik an, darunter die Installation, den Anschluss und die Verkabelung von elektrischen Anlagen sowie den fachgerechten Demontage- und Montageservice für elektrische Ausrüstungen.</P>
                <P id='quality'>Unser kompetentes Team von Elektrikern ist mit den neuesten Techniken und Vorschriften vertraut und steht Ihnen zur Seite, um Ihre elektrischen Projekte zu realisieren. Wir kümmern uns um die professionelle Installation und Verkabelung von elektrischen Netzwerken in Industriegebäuden, Gewerbeimmobilien, Hotels und anderen Einrichtungen. Unsere Experten planen sorgfältig die beste Positionierung von Leitungen, Steckdosen und Schaltern, um einen effizienten und sicheren Betrieb zu gewährleisten.</P>
                <Article>
                    <Img src='/img/factory1.jpg' />
                    <P>Anfang 2023 haben wir erfolgreich ein herausforderndes Projekt abgeschlossen. Unsere Aufgabe bestand darin, die elektrische Installation in einem neu errichteten Holzkraftwerk durchzuführen. Dabei haben wir sorgfältig Starkstromkabel, Internetleitungen und schwachstromführende Verbindungen im gesamten Gelände verlegt und mit den Verteilerschränken verbunden.
                        Unser erfahrenes Team arbeitete präzise und gewissenhaft, um eine effiziente Stromversorgung sowie eine reibungslose Kommunikation und Fernüberwachung sicherzustellen. Die erfolgreiche Umsetzung dieses Projekts hat dazu beigetragen, dass das Holzkraftwerk seine volle Leistungsfähigkeit erreichen konnte.</P>
                </Article>
                <P>Darüber hinaus bieten wir umfangreiche Dienstleistungen im Bereich der Demontage und Montage von elektrischem Equipment an. Unser erfahrenes Team kümmert sich um die fachgerechte Demontage von Leitungen, Schaltanlagen und Aggregaten. Wir achten dabei besonders auf die sorgfältige Handhabung und den sicheren Abbau der elektrischen Komponenten.</P>
                <P id='responsibility'>Unser Unternehmen zeichnet sich durch seine hohe Fachkompetenz, Zuverlässigkeit und Qualität aus. Wir arbeiten eng mit unseren Kunden zusammen, um ihre individuellen Anforderungen und Bedürfnisse zu verstehen und maßgeschneiderte Lösungen anzubieten. Unser Ziel ist es, Ihre elektrischen Projekte termingerecht, effizient und kostengünstig umzusetzen.</P>
                <P id='quality'>Als vertrauenswürdiger Partner in der Elektrobranche sind wir stolz auf unsere erfolgreichen Referenzprojekte und die langjährigen Kundenbeziehungen, die wir aufgebaut haben. Unser Engagement für exzellenten Service und unsere technische Expertise machen uns zur ersten Wahl für Unternehmen, die professionelle Elektroinstallationen und -services benötigen.</P>
                <P id='enterprise'>Kontaktieren Sie uns noch heute, um mehr über unsere umfangreichen Dienstleistungen im Bereich der Elektrotechnik zu erfahren. Wir freuen uns darauf, Ihnen bei Ihren elektrischen Projekten zu helfen und eine erfolgreiche Zusammenarbeit aufzubauen.</P>
            </div>
        </Page>

    )
}

export default About