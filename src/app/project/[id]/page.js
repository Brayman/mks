import ImageCard from '../../../components/image-card'
import React from 'react'
import s from './page.module.css'
import Tag from '@/components/tag'
import Header from '@/components/header/header'

export const getProject = async (id) => {
    const URL = `https://${process.env.VERCEL_URL}` || process.env.URL;
    try {
        const res = await fetch(`${URL}/api/project/${id}`)
        return res.json()
    } catch (error) {
        console.log(error);
        return []
    }

}

export default async function Project({ params }) {

    const proj = await getProject(params.id)

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
                <div className={s.tags}>
                    {proj.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
                </div>

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