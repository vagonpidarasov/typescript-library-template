import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  const onClick = jest.fn();

  afterEach(() => {
    onClick.mockClear();
  });

  it('should be defined', () => {
    expect(Button).toBeTruthy();
  });

  it('should render', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should handle click', () => {
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).toBeCalled();
  });
});
