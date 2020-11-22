import React from 'react'
import {screen, render} from '@testing-library/react'
import Header from '.'

describe('<Header/>', () => {
  it('should render heading text', () => {
    render(<Header />)
    expect(
      screen.getByRole('heading', {name: /Welcome to Beer Shop!/i}),
    ).toBeInTheDocument()
  })

  it('should render logo', () => {
    render(<Header />)
    expect(
      screen.getByAltText('Imagem de uma caneca de cerveja com espuma'),
    ).toBeInTheDocument()
  })
})
