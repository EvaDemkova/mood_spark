import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For the extended matchers like "toHaveAttribute"
import Icon from './Icon';  // Adjust the import path accordingly.

describe('<Icon />', () => {
    
    it('renders without crashing', () => {
        render(<Icon iconName="test-icon" />);
        const imgElement = screen.getByAltText('test-icon');
        expect(imgElement).toBeInTheDocument();
    });

    it('sets the image source based on the iconName prop', () => {
        render(<Icon iconName="test-icon" />);
        const imgElement = screen.getByAltText('test-icon');
        expect(imgElement).toHaveAttribute('src', '/images/hobbyIcons/test-icon.png');
    });

    it('sets the alt attribute of the image to the iconName', () => {
        render(<Icon iconName="test-icon" />);
        const imgElement = screen.getByAltText('test-icon');
        expect(imgElement).toHaveAttribute('alt', 'test-icon');
    });
});
