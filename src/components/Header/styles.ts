import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background: ${props => props.theme.background};
    width: 100%;

    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    
    width: 100%;
    max-width: 70rem;
    padding: 2rem 2rem;
`

export const HeaderActions = styled.div`
    display: flex;
    gap: 0.75rem;
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple']};
    transition: all 200ms ease-in-out;
    
    &:hover {
        background: ${props => props.theme['purple-hover']};
    }
    
    span {
        font-size: 0.875rem;
        line-height: ${props => props.theme['lineHeight-normal']};
        color: ${props => props.theme['purple-dark']};
    }
`

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.625rem;
    aspect-ratio: 1;
    border-radius: 6px;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme['yellow-hover']};
    }
`