import React from 'react'
import {screen, render} from '@testing-library/react'

import Card from '.'

describe('<Card/>', () => {
  const cardMock = {
    imageUrl:
      'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg',
    description: 'Skol 269ml',
    price: '2,19',
  }
  it('should render product name', () => {
    render(
      <Card
        imageUrl={cardMock.imageUrl}
        description={cardMock.description}
        price={cardMock.price}
      />,
    )
    expect(screen.getByRole('heading', {name: /skol/i})).toBeInTheDocument()
  })

  it('should render product image when product has it', () => {
    render(
      <Card
        imageUrl={cardMock.imageUrl}
        description={cardMock.description}
        price={cardMock.price}
      />,
    ),
      expect(screen.getByAltText(/imagem de/i)).toBeInTheDocument()
  })

  it('should render product price', () => {
    render(
      <Card
        imageUrl={cardMock.imageUrl}
        description={cardMock.description}
        price={cardMock.price}
      />,
    )

    expect(screen.getByText(/R\$/i)).toBeInTheDocument()
  })
})
