import React from 'react'
import s from './page.module.css'
import Paginator from '../components/paginator'

export default function MainPage() {
    return (
        <section className={s.page}>
            <div className={s.title}>
                <h2 className={s.title__slogan}>
                    One Partner,<br /> One Solution
                </h2>
                Wir sind ein erfahrenes Unternehmen, das sich auf die Montage von Maschinen und Anlagen spezialisiert hat. Wir bieten eine umfassende Palette von Montagedienstleistungen an und arbeiten eng mit unseren Kunden zusammen, um maßgeschneiderte Lösungen zu bieten.
            </div>
            <Paginator />
        </section>
    )
}
