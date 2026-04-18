import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rayls RWA Marketplace branding', () => {
  render(<App />);
  expect(screen.getByText(/Rayls RWA Marketplace/i)).toBeInTheDocument();
});

test('renders Connect Wallet button', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /Connect Wallet/i })).toBeInTheDocument();
});

test('renders EthCC / Rayls hackathon footer', () => {
  render(<App />);
  expect(screen.getByText(/EthCC Cannes 2026/i)).toBeInTheDocument();
  expect(screen.getByText(/Rayls & LimeChain Hackathon/i)).toBeInTheDocument();
});
