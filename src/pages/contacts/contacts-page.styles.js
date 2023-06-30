import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    margin: 0 2em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`

export const SectionTitle = styled.h2`
    font-size: 2em;
`
export const Contscts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`
export const ContactTitle = styled.h4`
    color: var(--primary-medium);
    font-size: 1em;
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 500;
`