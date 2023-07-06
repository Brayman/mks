import React from 'react'
import s from './header.module.css'
import classNames from 'classnames'

const Header = ({ className, children, ...props }) => {

    const cn = classNames(className, s.header)
    return (
        <header className={cn}>{children}</header>
    )
}

export default Header