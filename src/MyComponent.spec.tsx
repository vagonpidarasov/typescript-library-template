import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
    it('should be defined', () => {
        expect(MyComponent).toBeTruthy();
    });

    it('should render', () => {
        render(<MyComponent />);

        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
});
