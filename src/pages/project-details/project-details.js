import React from 'react'
import ImageCard from '../../components/image-card'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { project } from '../../project/projectSlice'

const Title = styled.h1`
    font-size: 2em;
    margin: 0;
`
const PropertySpan = styled.span`
    font-weight: 500;
    color: var(--primary-dark);
`

const ValueSpan = styled.span`
    color: var(--primary-medium);
`

const AboutTitle = styled(PropertySpan)`
    margin: 1em 10% 0 1em;
    white-space: nowrap;
    color: var(--primary-dark);
`

const PropertyValuePair = ({ children, value }) => {
    return (
        <div>
            <PropertySpan>{children}: </PropertySpan>
            <ValueSpan>{value}</ValueSpan>
        </div>
    );
}

const Article = styled.article`
    margin: 1em 10%;
`

const Description = styled(Article)`
    display: flex;
    flex-direction: row;
    color: var(--primary-medium);
`

const Project = () => {
    const proj = useSelector(project)

    return (
        <section>
            <Article>
                <Title>{proj.name}</Title>
                <div>
                    <PropertyValuePair value={proj.location}>
                        Location
                    </PropertyValuePair>
                    <PropertyValuePair value={proj.year}>
                        Year
                    </PropertyValuePair>
                    {proj.type}
                </div>

            </Article>
            <ImageCard images={proj.img} src={proj.img[0]} alt={proj.name} />
            <Description>
                <AboutTitle>
                    About the project
                </AboutTitle>
                <p>{proj.desc}</p>
            </Description>
        </section>
    )
}

export default Project