import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
    it('Should render a transaparent App Bar', () => {
        render(<Header />);
        const element = screen.getByTestId('appbar')
        expect(element).toBeTruthy();
    });

    it('Should render the heading Crypto Hunter', () => {
        render(<Header />);
        const element = screen.getByTestId('heading')
        expect(element).toBeTruthy();
    });

    it('Should render a menu to select the Currency', () => {
        render(<Header />);
        const element = screen.getByTestId('currency')
        expect(element).toBeTruthy();
    });

    // const menuItems = [
    //     { label: 'USD' },
    //     { label: 'INR' }
    // ];

    // it('Should render the Currency options', () => {
    //     const { container } = render(<Header items={menuItems} />);
    //     menuItems.forEach((item) => {
    //         const menuItem = screen.getAllByLabelText(item.label);
    //         expect(menuItem).toBeInTheDocument();
    //     });
    // });
});