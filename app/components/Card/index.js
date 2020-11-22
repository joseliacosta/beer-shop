import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles.js'

const Card = props => {
  const {imageUrl, description, price} = props
  return (
    <S.Wrapper>
      <S.Image src={imageUrl} alt={`Imagem de ${description}`} />
      <S.ProductDescription>{description}</S.ProductDescription>
      <S.Price>{`R$ ${price}`}</S.Price>
    </S.Wrapper>
  )
}

export default Card
Card.propTypes = {
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
}
