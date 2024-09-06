import styled from 'styled-components'

export const LayoutContainer = styled.div`
    background: ${props => props.theme['background']};
    color: ${props => props.theme['base-text']};
    
    display: flex;
    flex-direction: column;
`