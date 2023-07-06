"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import s from './navigation.module.css'
import classNames from 'classnames'

const Nav = () => {
    const path = usePathname()
    const transperency = path === '/';
    const cx = classNames.bind(s)
    const cn = cx(s.navigation, transperency ? s.nav_home : '')
    const linkClass = (link) => cx(
        s.nav__item,
        { [s.nav__item_active]: link === path }
    )
    return (
        <header className={cn}>
            <Link
                href='/'
                className={s.nav__company}
            >
                MKS ONE Systems
            </Link>
            <Link
                href='/company'
                className={linkClass('/company')}
            >
                Company
            </Link>
            <Link
                href='/projects'
                className={linkClass('/projects')}
            >
                Projects
            </Link>
            <Link
                href='/contacts'
                className={linkClass('/contacts')}
            >
                Contacts
            </Link>
        </header>
    )
}

export default Nav