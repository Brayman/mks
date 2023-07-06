import ImageCard from '../../../components/image-card'
import React from 'react'
import s from './page.module.css'
import Tag from '@/components/tag'
import Header from '@/components/header/header'

const Project = () => {
    const proj = {
        "id": 1,
        name: 'Hamburg',
        location: 'Hamburg',
        year: 2023,
        images: [
            'https://i.imgur.com/xolT2Ud.jpg',
            '/img/storage2.jpg'
        ],
        tags: ['Elektromontage'],
        description: "Unsere durchgeführten Arbeiten umfassten die Montage von Lagerregalen in einem neuen Lagergebäude sowie die Installation von Beleuchtungssteckdosen und Lichtschaltern in diesem neuen Bereich. Für die Montage der Lagerregale haben wir unser erfahrenes Team von Monteuren eingesetzt, die mit großer Sorgfalt und Präzision die Regale gemäß den spezifischen Anforderungen des Kunden aufgebaut haben. Die Montage erfolgte effizient und gewährleistete eine optimale Raumnutzung für die Lagerung verschiedener Produkte. Darüber hinaus haben wir auch die elektrische Infrastruktur des neuen Lagerbereichs installiert. Dies beinhaltete die fachgerechte Montage von Steckdosen für die Beleuchtung sowie die korrekte Positionierung der Lichtschalter, um eine komfortable und praktische Nutzung des Lagerbereichs zu gewährleisten. Unser Team arbeitete eng mit dem Kunden zusammen, um sicherzustellen, dass die Montage der Lagerregale und die Installation der elektrischen Komponenten den individuellen Anforderungen und Standards entsprachen. Mit unserer Fachkenntnis und unserem Engagement haben wir sichergestellt, dass das neue Lagergebäude optimal ausgestattet ist, um den Bedürfnissen des Kunden gerecht zu werden"
    }
    return (
        <section>
            <article className={s.project__article}>
                <Header className={s.page__title}>{proj.name}</Header>
                <div className={s.definitions}>
                    <span className={s.value}>
                        <span className={s.property}>
                            Location
                        </span>
                        {proj.location}
                    </span>
                    <span className={s.value}>
                        <span className={s.property}>
                            Year
                        </span>

                        {proj.year}
                    </span>
                </div>
                {proj.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
            </article>
            <ImageCard images={proj.images} src={proj.images[0]} alt={proj.name} />
            <article className={s.project__desc}>
                <span className={s.desc__title}>
                    About the project
                </span>
                <p>{proj.description}</p>
            </article>
        </section>
    )
}

export default Project