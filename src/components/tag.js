import Link from 'next/link'
import React from 'react'
import s from './tag.module.css'


const Tag = ({ children }) => {
    return (
        <Link href={`/projects?f=${children}`} className={s.tag}>
            {children}
        </Link>
    )
}

export default Tag