import React from 'react';
import { render,screen } from '@testing-library/react';
import Banner from '../components/Banner/Banner';

describe('Banner', () => {
  it('should render a <div> with class "banner"', () => {
    render(<Banner />);
    const element = screen.getByTestId('banner')
    expect(element).toBeTruthy();
  });

  it('should render a <Container> with class "bannerContent"', () => {
    render(<Banner />);
    const element = screen.getByTestId('bannerContent')
    expect(element).toBeTruthy();
  });

  it('should render a <div> with class "tagline"', () => {
    render(<Banner />);
    const element = screen.getByTestId('tagline')
    expect(element).toBeTruthy();
  });

  it('should render a <Typography> component with "h2" variant', () => {
    render(<Banner />);
    const element = screen.getByTestId('h2')
    expect(element).toBeTruthy();
  });

  it('should render a <Typography> component with "subtitle2" variant', () => {
    render(<Banner />);
    const element = screen.getByTestId('subtitle2')
    expect(element).toBeTruthy();
  });
});
