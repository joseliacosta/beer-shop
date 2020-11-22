import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const Main = props => {
  return <S.Wrapper>{props.children}</S.Wrapper>
}
Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
export default Main
