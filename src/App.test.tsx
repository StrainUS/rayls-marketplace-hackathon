import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dr Strain Rayls Marketplace heading', () => {
  render(<App />);
  const heading = screen.getByText(/Dr Strain Rayls Marketplace/i);
  expect(heading).toBeInTheDocument();
});

test('renders Mint Facture NFT button', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Mint Facture NFT/i });
  expect(button).toBeInTheDocument();
});

test('renders Rayls Hackathon Demo text', () => {
  render(<App />);
  const text = screen.getByText(/Rayls Hackathon Demo/i);
  expect(text).toBeInTheDocument();
});
