import React from 'react'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

import App from './App'

describe('<App/>', () => {
  it('should render the heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {name: /Welcome to Beer Shop!/i}),
    ).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText('digite o endereço de entrega'),
    ).toBeInTheDocument()
  })
  it('should render the main section', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', {name: /Produtos/i})).toBeInTheDocument()
  })
  it('should render the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
