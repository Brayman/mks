import Link from 'next/link'
import React from 'react'

import styles from './page.module.css'
import Image from 'next/image'




const ObjectPreview = ({ project }) => {
    const { name, location, description, images } = project
    return (
        <Link className={styles.card} href={`/project/${project.id}`}>
            <div className={styles.card__body}>
                <h4>{name}</h4>
                {location}
                <p className={styles.body__desc}>
                    {description}
                </p>
            </div >
            <img className={styles.card__image} src={images && images[0]} alt={name} />
        </Link>
    )
}

export default ObjectPreview