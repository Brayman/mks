"use client"

import React, { useState } from 'react'
import { MdWest, MdEast } from 'react-icons/md'
import styled from 'styled-components'

const Card = styled.div`
    position: relative;
    background-color: var(--primary-dark);
`

const NavButtons = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    right: 0;
    button:first-child {
        margin-right: 1px;
    }
`

const Img = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: 30em;
`

const NavButton = styled.button`
    background-color: #ffffff8f;
    backdrop-filter: blur(3px);
    color: var(--primary-dark);
    cursor: pointer;
    padding: 1em;
    margin: 0;
    border: none;
    line-height: 0;
    &:hover {
        background-color: #ffffff66;
        backdrop-filter: blur(4px);
    }
    svg {
        width: 1.2em;
        height: 1.2em;
    }
`


const ImageCard = ({ images, ...field }) => {
    console.log(images.length);
    const [image, setImage] = useState(0)

    const nextImage = () => {
        if (image === images.length - 1) {
            setImage(0)
        } else {
            setImage(prev => ++prev)
        }
    }
    const prevImage = () => {
        if (image === 0) {
            setImage(images.length - 1)
        } else {
            setImage(prev => --prev)
        }
    }
    return (
        <Card>
            <Img {...field} src={images[image]} alt={field.alt || ''} />
            {images.length > 1 ?
                <NavButtons>
                    <NavButton onClick={prevImage}>
                        <MdWest />
                    </NavButton>
                    <NavButton onClick={nextImage}>
                        <MdEast />
                    </NavButton>
                </NavButtons> : null}
        </Card>
    )
}

export default ImageCard