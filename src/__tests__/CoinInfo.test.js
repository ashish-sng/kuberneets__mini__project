import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import CoinInfo from '../components/CoinInfo'
import '@testing-library/jest-dom/extend-expect'

describe('Input value', () => {
    it('renders default state', () => {
      render(<CoinInfo />)
      const element = screen.getByTestId('div-theme') 
      expect(element).toBeTruthy() 
    })
})