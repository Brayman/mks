import React from 'react'
import ProjectPreview from './project-preview'
import styles from './page.module.css'


export const getProjects = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/projects")
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
                {projects.map((project, i) => <ProjectPreview key={i} project={project} />)}
            </div>
        </div>
    )
}

