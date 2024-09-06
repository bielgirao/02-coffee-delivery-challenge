import {
  DeliveryInfoBorder,
  DeliveryInfoIconWrapper, DeliveryInfoItem, DeliveryInfoWrapper,
  ThankYouContainer,
  ThankYouContent
} from './styles.ts'
import thankYouImage from './../../assets/thank-you-image.png'
import { Timer, MapPin, CurrencyDollar, } from 'phosphor-react'

export function ThankYou() {
  return (
    <ThankYouContainer>
      <ThankYouContent>
        <h2>Yay! Your order is confirmed!</h2>
        <p>Hey there! Your coffee will be here before you know it.</p>
        <DeliveryInfoBorder>
          <DeliveryInfoWrapper>
            <DeliveryInfoItem>
              <DeliveryInfoIconWrapper variant='purple'>
                <MapPin size={16} weight="fill" />
              </DeliveryInfoIconWrapper>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br/>
                Farrapos - Porto Alegre, RS
              </span>
            </DeliveryInfoItem>
            <DeliveryInfoItem>
              <DeliveryInfoIconWrapper variant='light-yellow'>
                <Timer size={16} weight="fill" />
              </DeliveryInfoIconWrapper>
              <span>
                Previsão de entrega
                <br/>
                <strong>20 min - 30 min</strong>
              </span>
            </DeliveryInfoItem>
            <DeliveryInfoItem>
              <DeliveryInfoIconWrapper variant='dark-yellow'>
                <CurrencyDollar size={16} />
              </DeliveryInfoIconWrapper>
              <span>
                Pagamento na entrega
                <br/>
                <strong>Cartão de Crédito</strong>
              </span>
            </DeliveryInfoItem>
          </DeliveryInfoWrapper>
        </DeliveryInfoBorder>
      </ThankYouContent>
      <img src={thankYouImage} alt="Image of a man riding a bike to deliver coffee" />
    </ThankYouContainer>
  )
}