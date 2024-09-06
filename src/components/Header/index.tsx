import { MapPin, ShoppingCart } from 'phosphor-react';

import {CartButton, HeaderActions, HeaderContainer, HeaderWrapper, Location} from "./styles.ts";
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'

export function Header() {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <img src={logoCoffeeDelivery} alt="Coffee Delivery Logo"/>
                <HeaderActions>
                    <Location>
                        <MapPin size={22} weight="fill" />
                        <span>New Jersey, NY</span>
                    </Location>
                    <CartButton>
                        <ShoppingCart size={22} weight="fill" />
                    </CartButton>
                </HeaderActions>
            </HeaderContainer>
        </HeaderWrapper>
    );
}
