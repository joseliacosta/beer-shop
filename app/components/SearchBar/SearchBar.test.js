import React from 'react'
import {screen, render} from '@testing-library/react'
import SearchBar from '.'

describe('<SearchBar/>', () => {
  it('should render label text', () => {
    render(<SearchBar />)
    expect(
      screen.getByLabelText(/Encontre bebidas geladas em poucos minutos!/i),
    ).toBeInTheDocument()
  })

  it('should render input with placeholder text', () => {
    render(<SearchBar />)
    expect(
      screen.getByPlaceholderText(/Digite o endereço para ver o preço/i),
    ).toBeInTheDocument()
  })
})
