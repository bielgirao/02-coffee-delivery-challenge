import styled from "styled-components";

export const CoffeeCardContainer = styled.article`
    background: ${props => props.theme["base-card"]};
    padding: 0 1.25rem 1.25rem;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    
    img {
        margin-top: -20px;
        width: 120px;
        height: 120px;
    }
    
    h4 {
        margin-top: 0.5rem;
        text-align: center;
    }
    
    p {
        text-align: center;
        font-size: 0.875rem;
        line-height: ${props => props.theme['lineHeight-normal']};
        color: ${props => props.theme['base-label']};
    }
`

export const CoffeeCategories = styled.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
`

export const CoffeeCategory = styled.div`
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    font-size: 0.625rem;
    line-height: ${props => props.theme['lineHeight-normal']};
    text-transform: uppercase;
    font-weight: bold;
`

export const CoffeeActionsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem
`

export const CoffeePricing = styled.h3`
    span {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: ${props => props.theme['lineHeight-normal']};
    }
`

export const CoffeeOrder = styled.div<{ $itemAdded?: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    > button {
        background-color: ${props =>
        props.$itemAdded ? props.theme['yellow-dark'] : props.theme['purple-dark']};
        transition: background-color 0.2s;
        border-radius: 6px;
        padding: 0.5rem;
        display: flex; 
        cursor: pointer;
          
        svg {
            color: ${props => props.theme['base-card']};
        }
        
        &:hover {
          background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.yellow : theme.purple};
        }
    }
`
