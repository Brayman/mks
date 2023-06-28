import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const growing = keyframes`
    from {
        
        padding: 0 0;
    }
    to {
        
    }
`

const StyledPreview = styled(NavLink)`
    display: flex;
    flex-direction: row;
    padding: 3em;
    border-radius: 1em;
    text-decoration: none;
    color: inherit;
    &:hover {
        transition: all 1s linear;
        background-color: #d8d7d770;
        margin: 1.5em ;
        padding: 1.5em;
    }
    
    div {
        padding:0 1em;
        }
    &:nth-child(odd) {
        flex-direction: row-reverse;
        
    }
    
`

const Desc = styled.div`
    flex-grow: 5;
`

const PreviewImg = styled.img`
    flex-grow: 7;
    object-fit: contain;
    width: 60%;
`

const PreviewDesc = styled.p`
 color: var(--primary-medium);
`



const ObjectPreview = ({ project }) => {
    const { name, location, preview_desc, img } = project
    return (
        <StyledPreview to={`/project/${project.id}`}>
            <Desc>
                <h4>{name}</h4>
                {location}
                <PreviewDesc>
                    {preview_desc}
                </PreviewDesc>
            </Desc>
            <PreviewImg src={img && img[0]} alt={name} />
        </StyledPreview>
    )
}

export default ObjectPreview