import React, { useState } from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const PaginationBlock = styled.div`
    background-color: #333333;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    bottom: 0px;
    width: 40%;
    padding: 1em 0;
`

const ActivePageNumber = styled.div`
    color: var(--primary-light);
    padding: 0.5em;
    border-right: 1px solid #666666;
`

const StyledPageNumber = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
`
const PageCount = styled(ActivePageNumber)`
    border: none;
    color: #666666;
    font-size: 13px;
`

const PageNumber = ({ activePage, pagesCount }) => {
    return (
        <StyledPageNumber>
            <ActivePageNumber>
                {activePage}
            </ActivePageNumber>
            <PageCount>
                {pagesCount}
            </PageCount>
        </StyledPageNumber>
    )
}


const StyledPageDot = styled.svg`
    width: 5px;
    height: 5px;
    fill: ${props => props.active ? '#fff' : '#666666'};
    margin-right: 3px;
`
const PageDot = ({ active, onClick }) => {
    return <StyledPageDot active={active} onClick={onClick}>
        <circle cx={2} cy={2} r={2} />
    </StyledPageDot>
}

const Dots = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 3;
`



const PageDots = ({ activePage, pagesCount, clickDot }) => {
    const dots = [...Array(pagesCount).keys()]
    return <Dots>
        {dots.map((dot, i) => (
            <PageDot key={dot} active={activePage === ++dot} onClick={() => clickDot(++i)} />
        ))}
    </Dots>
}

const StyledNavigationButtons = styled.div`
    color: #666666;
    background-color: inherit;
    display: flex;
    font-size: 20px;
    flex-direction: row;
    justify-content: space-evenly;
    flex-grow: 1;
`

const NavigationButtons = ({ clickForward, clickBack }) => {
    return (
        <StyledNavigationButtons>
            <MdKeyboardArrowLeft onClick={clickBack} />
            <MdKeyboardArrowRight onClick={clickForward} />
        </StyledNavigationButtons>
    )
}


const Paginator = () => {
    const [page, setPage] = useState(1)

    const clickDot = (page) => {
        setPage(page)
    }
    const clickForward = () => {
        if (page < 5) {
            setPage(page => page + 1)
        } else {
            setPage(1)
        }
    }

    const clickBack = () => {
        if (page > 1) {
            setPage(page => page - 1)
        } else {
            setPage(5)
        }
    }

    return (
        <PaginationBlock>
            <PageNumber activePage={page} pagesCount={5} />
            <PageDots activePage={page} pagesCount={5} clickDot={clickDot} />
            <NavigationButtons
                clickForward={clickForward}
                clickBack={clickBack}
            />
        </PaginationBlock>
    )
}

export default Paginator