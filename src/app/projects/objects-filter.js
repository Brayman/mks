import React from 'react'
import { FilterBar, FilterItem, Header, Title } from '../../components/header.styles';

import styles from './page.module.css'
// import { useSearchParams } from 'react-router-dom'

const ObjectsFilter = ({ filters }) => {
    // let [searchParams, setSearchParams] = useSearchParams();
    const filterClick = (e) => {
        console.log(e.target);
        // setSearchParams({ filter: e.target.outerText })
    }
    return (
        <header className={styles.header}>
            <h2 className={styles.headerTitle}>
                Objects
            </h2>
            <FilterBar>
                {filters.map((item, i) => {
                    return (
                        <FilterItem
                            key={i}
                            onClick={filterClick}
                        >
                            {item}
                        </FilterItem>
                    )
                })}
            </FilterBar>
        </header>
    )
}

export default ObjectsFilter