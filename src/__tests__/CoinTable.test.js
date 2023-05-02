import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import CoinsTable from '../components/CoinsTable'
import '@testing-library/jest-dom/extend-expect'

describe('Input value', () => {
    it('renders default state', () => {
      render(<CoinsTable />)
      const searchInput = screen.getByTestId('searchBox') 
      expect(searchInput.value).toBe('') 
    })

    it('change input text field', () => {
      render(<CoinsTable />)
      const searchInput = screen.getByTestId('searchBox') 
      fireEvent.change(searchInput, { target: { value: 'test' } })
      expect(searchInput.value).toBe('test') 
    })

    it('renders in table rows based on provided columns', () => {
        render(<CoinsTable />)
        const table = screen.getByTestId('table')
        expect(table).toBeTruthy();
    });
})