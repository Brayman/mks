import React from 'react'
import ImageCard from '../../components/image-card'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 2em;
    margin: 0;
`
const PropertySpan = styled.span`
    font-weight: 500;
    color: var(--primary-dark);
`

const ValueSpan = styled.span`
    color: var(--primary-medium);
`

const AboutTitle = styled(PropertySpan)`
    margin: 1em 10% 0 1em;
    white-space: nowrap;
    color: var(--primary-dark);
`

const PropertyValuePair = ({ children, value }) => {
    return (
        <div>
            <PropertySpan>{children}: </PropertySpan>
            <ValueSpan>{value}</ValueSpan>
        </div>
    );
}

const Article = styled.article`
    margin: 1em 10%;
`

const Description = styled(Article)`
    display: flex;
    flex-direction: row;
    color: var(--primary-medium);
`

const Project = () => {
    const proj = {
        "name": "Hamburg",
        "location": "Hamburg",
        "year": 2023,
        "type": ["Elektromontage", "Montage von Lagerregalen"],
        "img": [
            '/img/factory1.jpg',
            '/img/factory2.jpg',
            '/img/factory3.jpg'
        ],
        "desc": "Unsere durchgeführten Arbeiten umfassten die Montage von Lagerregalen in einem neuen Lagergebäude sowie die Installation von Beleuchtungssteckdosen und Lichtschaltern in diesem neuen Bereich. Für die Montage der Lagerregale haben wir unser erfahrenes Team von Monteuren eingesetzt, die mit großer Sorgfalt und Präzision die Regale gemäß den spezifischen Anforderungen des Kunden aufgebaut haben. Die Montage erfolgte effizient und gewährleistete eine optimale Raumnutzung für die Lagerung verschiedener Produkte. Darüber hinaus haben wir auch die elektrische Infrastruktur des neuen Lagerbereichs installiert. Dies beinhaltete die fachgerechte Montage von Steckdosen für die Beleuchtung sowie die korrekte Positionierung der Lichtschalter, um eine komfortable und praktische Nutzung des Lagerbereichs zu gewährleisten. Unser Team arbeitete eng mit dem Kunden zusammen, um sicherzustellen, dass die Montage der Lagerregale und die Installation der elektrischen Komponenten den individuellen Anforderungen und Standards entsprachen. Mit unserer Fachkenntnis und unserem Engagement haben wir sichergestellt, dass das neue Lagergebäude optimal ausgestattet ist, um den Bedürfnissen des Kunden gerecht zu werden"
    }
    return (
        <section>
            <Article>
                <Title>{proj.name}</Title>
                <div>
                    <PropertyValuePair value={proj.location}>
                        Location
                    </PropertyValuePair>
                    <PropertyValuePair value={proj.year}>
                        Year
                    </PropertyValuePair>
                    {proj.type}
                </div>

            </Article>
            <ImageCard images={proj.img} src={proj.img[0]} alt={proj.name} />
            <Description>
                <AboutTitle>
                    About project
                </AboutTitle>
                <p>{proj.desc}</p>
            </Description>
        </section>
    )
}

export default Project