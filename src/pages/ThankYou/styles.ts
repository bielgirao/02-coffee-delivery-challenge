import styled, { css } from 'styled-components'

export const ThankYouContainer = styled.main`
    margin: 6.625rem auto 4rem;
    padding: 6rem 2rem;
    max-width: 70rem;
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;
    
    img {
        max-width: 492px;
        height: fit-content;
    }

    @media (max-width: 1080px) {
        max-width: 90vw;
        flex-direction: column-reverse;
        align-items: center;
        img {
            width: 100%;
        }
    }
    
    @media (max-width: 600px) {
        padding: 3rem 0;
    }
`

export const ThankYouContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    
    h2 {
        color: ${props => props.theme['yellow-dark']};
    }

    p {
        font-size: 1.25rem;
        line-height: ${props => props.theme['lineHeight-normal']};
        margin-bottom: 2rem;
    }

    @media (max-width: 575px) {
        h2 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
        }
    }
`

export const DeliveryInfoBorder = styled.div`
    padding: 2px;
    border-radius: 6px 36px 6px 36px;
    background: linear-gradient(
            135deg,
            ${props => props.theme['yellow']},
            ${props => props.theme['purple']}
    );
    width: fit-content;
`

export const DeliveryInfoWrapper = styled.div`
    padding: 2.5rem;
    border-radius: 4px 34px 4px 34px;
    background-color: ${props => props.theme['white']};
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

interface InfoIconWrapperProps {
  variant: 'dark-yellow'|'gray'|'light-yellow'|'purple'
}

export const DeliveryInfoIconWrapper = styled.div<InfoIconWrapperProps>`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;

    ${props =>
            (props.variant === 'dark-yellow' && css`background: ${props.theme['yellow-dark']}`)
            || (props.variant === 'light-yellow' && css`background: ${props.theme['yellow']}`)
            || (props.variant === 'purple' && css`background: ${props.theme['purple']}`)};
    }`

export const DeliveryInfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    span {
        font-weight: 500;
        line-height: ${props => props.theme['lineHeight-normal']};
    }
`