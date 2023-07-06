import Link from 'next/link'
import React from 'react'

import styles from './page.module.css'
import Image from 'next/image'
import DL from '@/components/DL/DL'




const ProjectPreview = ({ project }) => {
    const { name, location, summary, year, images } = project
    const properties = [
        {
            name: "location",
            prop: location
        },
        {
            name: "Year",
            prop: year,

        },
        {
            name: "Customer",
            prop: project.customer,
        },
        {
            name: "Contractor",
            prop: project.contractor
        }
    ]
    return (
        <Link href={`/project/${project._id}`} className={styles.card}>
            <img className={styles.card__image} src={images && images[0]} alt={name} />
            <div className={styles.card__desc}>
                <h4>{name}</h4>

                <p className={styles.body__desc}>
                    {summary}
                </p>
            </div>
            <div className={styles.card__details}>
                {properties.map(item => {
                    if (item.prop) {
                        return (
                            <DL key={item.name}>
                                <DL.DT>
                                    {item.name}
                                </DL.DT>
                                {item.prop}
                            </DL>
                        )
                    }
                }
                )}
            </div>
        </Link>
    )
}

export default ProjectPreview