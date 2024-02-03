// src/__tests__/ShoppingList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ShoppingList from '../components/ShoppingList';

// Your test data (either directly defined or imported)
const testData = [
  { id: 1, name: 'Item 1', category: 'Produce' },
  { id: 2, name: 'Item 2', category: 'Dairy' },
  // Add more items as needed
];

test('renders ShoppingList component', () => {
  const { getByLabelText, getByText } = render(<ShoppingList items={testData} />);
  
  // Your test assertions here
});
