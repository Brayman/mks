import React from 'react'
import ProjectPreview from './project-preview'
import styles from './page.module.css'
import Header from '@/components/header/header'


export const getProjects = async () => {
    const URL = process.env.URL;

    try {
        const res = await fetch(`${URL}/api/projects`)
        return res.json()
    } catch (error) {
        console.log(error);
        return []
    }

}

export default async function ObjectsPage() {
    const projects = await getProjects()
    return (
        <div>
            {/* <ObjectsFilter filters={['Elektromontage',
                'Elektrodemontage',
                'Montage von Förderbandanlagen',
                'Montage von Industriemaschinen', 'Montage von Lagerregalen']} 
                /> */}
            <div>
                <Header>Projects</Header>
                {projects.map((project, i) => <ProjectPreview key={i} project={project} />)}
            </div>
        </div>
    )
}

