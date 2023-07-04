
import React from 'react'
import ObjectPreview from './object-preview'

import styles from './page.module.css'

const ourProjects = [
    {
        "id": 1,
        name: 'Hamburg',
        location: 'Hamburg',
        images: [
            '/img/storage1.jpg',
            '/img/storage2.jpg'
        ],
        description: "Unsere durchgeführten Arbeiten umfassten die Montage von Lagerregalen in einem neuen Lagergebäude sowie die Installation von Beleuchtungssteckdosen und Lichtschaltern in diesem neuen Bereich. Für die Montage der Lagerregale haben wir unser erfahrenes Team von Monteuren eingesetzt, die mit großer Sorgfalt und Präzision die Regale gemäß den spezifischen Anforderungen des Kunden aufgebaut haben. Die Montage erfolgte effizient und gewährleistete eine optimale Raumnutzung für die Lagerung verschiedener Produkte. Darüber hinaus haben wir auch die elektrische Infrastruktur des neuen Lagerbereichs installiert. Dies beinhaltete die fachgerechte Montage von Steckdosen für die Beleuchtung sowie die korrekte Positionierung der Lichtschalter, um eine komfortable und praktische Nutzung des Lagerbereichs zu gewährleisten. Unser Team arbeitete eng mit dem Kunden zusammen, um sicherzustellen, dass die Montage der Lagerregale und die Installation der elektrischen Komponenten den individuellen Anforderungen und Standards entsprachen. Mit unserer Fachkenntnis und unserem Engagement haben wir sichergestellt, dass das neue Lagergebäude optimal ausgestattet ist, um den Bedürfnissen des Kunden gerecht zu werden"
    },
    {
        "id": 2,
        name: 'Berlin',
        location: 'Berlin',
        images: [
            '/img/lamp_roof.jpg',
        ],
        description: 'text'
    }]

let ObjectsPage = () => {

    return (
        <div>
            {/* <ObjectsFilter filters={['Elektromontage',
                'Elektrodemontage',
                'Montage von Förderbandanlagen',
                'Montage von Industriemaschinen', 'Montage von Lagerregalen']} 
                /> */}
            <div>
                {ourProjects.map((project, i) => <ObjectPreview key={i} project={project} />)}
            </div>
        </div>
    )
}

export default ObjectsPage