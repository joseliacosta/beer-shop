import React, {useState} from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const SearchBar = ({searchAddress}) => {
  const [query, setQuery] = useState('')
  const handleSubmit = event => {
    event.preventDefault()
    if (!query) return
    searchAddress(query)
    setQuery('')
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Textbox
        id="search"
        placeholder="Digite o endereço para ver o preço"
        onChange={event => setQuery(event.target.value)}
      />
    </S.Form>
  )
}
SearchBar.propTypes = {
  searchAddress: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}
export default SearchBar
