import styled, {css} from "styled-components";

export const HomeContainer = styled.main`
    margin: 6.625rem 0 4rem;
    display: flex;
    flex-direction: column;
`

interface HeroBannerContainerProps {
    $backgroundImage: string;
}

export const HeroBannerContainer = styled.div<HeroBannerContainerProps>`
    padding: 6rem 0;
    background-image: url(${props => props.$backgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 600px) {
        padding: 3rem 0;
    }
`

export const HeroBanner = styled.section`
    max-width: 70rem;
    padding: 0 2rem;
    margin: 0 auto;
    
    width: 100%;
    display: flex;
    gap: 3.5rem;
    
    img {
        max-width: 476px;
    }

    @media (max-width: 1080px) {
        img {
            display: none;
        }    
    }
`

export const HeroBannerContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    
    p {
        font-size: 1.25rem;
        line-height: ${props => props.theme['lineHeight-normal']};
    }
    
    @media (max-width: 575px) {
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }
    }
`

export const HeroBannerBenefitsContainer = styled.div`
    margin-top: 3.125rem;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    row-gap: 1.25rem;
    
    @media (max-width: 600px) {
        margin-top: 1rem;
        row-gap: 0.75rem;
        grid-template-columns: 1fr;
    }
`

export const HeroBannerBenefitsItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    span {
        font-weight: 500;
    }
`

interface BenefitsIconWrapperProps {
    variant: 'dark-yellow'|'gray'|'light-yellow'|'purple'
}

export const HeroBannerBenefitsIconWrapper = styled.div<BenefitsIconWrapperProps>`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    
    ${props => 
            (props.variant === 'dark-yellow' && css`background: ${props.theme['yellow-dark']}`)
            || (props.variant === 'gray' && css`background: ${props.theme['base-text']}`)
            || (props.variant === 'light-yellow' && css`background: ${props.theme['yellow']}`) 
            || (props.variant === 'purple' && css`background: ${props.theme['purple']}`)};
    }`

export const CoffeesSection = styled.section`
    max-width: 70rem;
    width: 100%;
    padding: 2rem 2rem;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    gap: 3.375rem;
`

export const CoffeesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.5rem;
    column-gap: 2rem;
    
    @media (max-width: 1080px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 575px) {
        grid-template-columns: repeat(1, 1fr);
    }
`