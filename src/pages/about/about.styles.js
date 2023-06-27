import styled from "styled-components";

export const Page = styled.section`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr max-content;
    margin-left: 3em;
`

export const Title = styled.header`
    grid-column: 1 / span 2;
    font-size: 2.5em;
    font-weight: 600;
    margin: 1em 0;
`

export const Img = styled.img`
    object-fit: contain;
    width: 100%;
`

export const P = styled.p`
    margin: 3em 0;
    &:first-child {
        margin-top: 0;
    }
    
`

export const Article = styled.article`
    p {
        margin-top: 2.2em;
        font-size: 0.9em;
        color: #939399;
    }
`

export const Menu = styled.ul`
    position: sticky;
    top: 0;
    list-style: none;
    margin: 0 2em 0 0;
    padding: 0;
`

export const Li = styled.li`
    padding: 0.5em 0;
    a {
        color: #000;
        padding: inherit;
        text-decoration: none;
        font-weight: 500;
    }
    a:active,
    a:hover {
        color: var(--secondary);
    }
    
`