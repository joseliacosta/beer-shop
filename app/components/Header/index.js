import React from 'react'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Logo
      src="/assets/beer-outline-filled.png"
      alt="Imagem de uma caneca de cerveja com espuma"
    />
    <S.Title>Welcome to Beer Shop!</S.Title>
  </S.Wrapper>
)

export default Header
