import {
    HomeContainer,
    HeroBanner,
    HeroBannerContent,
    HeroBannerBenefitsContainer,
    HeroBannerBenefitsItem, HeroBannerBenefitsIconWrapper, CoffeesSection, HeroBannerContainer, CoffeesGrid
} from "./styles.ts";
import heroBannerImage from './../../assets/hero-image.png';
import heroBackgroundImage from './../../assets/hero-background.png';
import {Coffee, Package, ShoppingCart, Timer} from "phosphor-react";
import {CoffeeCard} from "./components/CoffeeCard";
import {coffeeData} from '../../Coffees.ts'
import {CoffeeType} from '../../@types/coffee'

export function Home() {

    return (
        <HomeContainer>
            <HeroBannerContainer $backgroundImage={heroBackgroundImage}>
                <HeroBanner>
                    <HeroBannerContent>
                        <h1>Discover the ideal coffee for any time of the day.</h1>
                        <p>With Coffee Delivery, enjoy your favorite coffee delivered to your location at any time.</p>

                        <HeroBannerBenefitsContainer>
                            <HeroBannerBenefitsItem>
                                <HeroBannerBenefitsIconWrapper variant='dark-yellow'>
                                    <ShoppingCart size={16} weight="fill" />
                                </HeroBannerBenefitsIconWrapper>
                                <span>Simple and secure purchase</span>
                            </HeroBannerBenefitsItem>
                            <HeroBannerBenefitsItem>
                                <HeroBannerBenefitsIconWrapper variant='gray'>
                                    <Package size={16} weight="fill" />
                                </HeroBannerBenefitsIconWrapper>
                                <span>Packaging keeps coffee intact</span>
                            </HeroBannerBenefitsItem>
                            <HeroBannerBenefitsItem>
                                <HeroBannerBenefitsIconWrapper variant='light-yellow'>
                                    <Timer size={16} weight="fill" />
                                </HeroBannerBenefitsIconWrapper>
                                <span>Fast and tracked delivery</span>
                            </HeroBannerBenefitsItem>
                            <HeroBannerBenefitsItem>
                                <HeroBannerBenefitsIconWrapper variant='purple'>
                                    <Coffee size={16} weight="fill" />
                                </HeroBannerBenefitsIconWrapper>
                                <span>The coffee arrives fresh to you</span>
                            </HeroBannerBenefitsItem>
                        </HeroBannerBenefitsContainer>
                    </HeroBannerContent>
                    <img src={heroBannerImage} alt="Coffee Delivery's cup with some coffee grounds behind it"/>
                </HeroBanner>
            </HeroBannerContainer>
            <CoffeesSection>
                <h2>Our Coffees</h2>
                <CoffeesGrid>
                    {
                        coffeeData.map(
                            (coffee: CoffeeType) => {
                                return <CoffeeCard coffee={coffee} key={coffee.id} />
                             }
                        )
                    }
                </CoffeesGrid>
            </CoffeesSection>
        </HomeContainer>
    );
}
