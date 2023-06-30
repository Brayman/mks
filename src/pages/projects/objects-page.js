import React from 'react'
import { useSelector } from 'react-redux'
import { projects } from '../../projects/projektsSlice'
import ObjectPreview from './object-preview'
import styled from 'styled-components'
import ObjectsFilter from './objects-filter'

const StyledPage = styled.div`
    /* margin: 0 3em; */
`

const ObjectsPage = () => {
    const ourProjects = useSelector(projects).projects
    console.log(ourProjects);
    return (
        <StyledPage>
            <ObjectsFilter filters={['Elektromontage',
                'Elektrodemontage',
                'Montage von Förderbandanlagen',
                'Montage von Industriemaschinen', 'Montage von Lagerregalen']} />
            <div>
                {ourProjects.map(project => <ObjectPreview project={project} />)}
            </div>
        </StyledPage>
    )
}

export default ObjectsPage