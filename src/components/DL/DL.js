import React from 'react'
import s from './DL.module.css'


const DL = ({ children }) => {
    return (
        <span className={s.value}>
            {children}
        </span>
    )
}

const DT = ({ children }) => {
    return (
        <span className={s.property}>
            {children}
        </span>
    )
}

DL.DT = DT

export default DL