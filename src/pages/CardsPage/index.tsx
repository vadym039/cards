import React from 'react'
import CardsComponent from '../../components/Cards'
import { CardsPageStyled } from './styled';

const CardsPage = () => {
  return (
    <CardsPageStyled>
      <CardsComponent />
    </CardsPageStyled>
  )
}

export default CardsPage
