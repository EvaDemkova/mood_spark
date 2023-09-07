import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';  // Adjust the import path accordingly.

describe('<Select />', () => {
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
    ];

    it('renders without crashing', () => {
        render(<Select options={options} selected={null} setSelected={() => {}} />);
        expect(screen.getByText(/No option selected/i)).toBeInTheDocument();
    });

    // WIP
    // it('toggles dropdown on click', () => {
    //     render(<Select options={options} selected={null} setSelected={() => {}} />);
    //     act(() => {
    //         userEvent.click(screen.getByText(/No option selected/i));
    //     });
    //     expect(screen.getByText(/Option 1/i)).toBeInTheDocument();
    //     expect(screen.getByText(/Option 2/i)).toBeInTheDocument();
    // });

    // it('updates selected value on option click', () => {
    //     const setSelected = jest.fn();
    //     render(<Select options={options} selected={null} setSelected={setSelected} />);
        
    //     act(() => {
    //         userEvent.click(screen.getByText(/No option selected/i));
    //         userEvent.click(screen.getByText(/Option 1/i));
    //     });
        
    //     expect(setSelected).toHaveBeenCalledWith(options[0].value);
    // });

    // it('does not open dropdown if disabled', () => {
    //     render(<Select options={options} selected={null} setSelected={() => {}} disabled={true} />);
    //     act(() => {
    //         userEvent.click(screen.getByText(/No option selected/i));
    //     });
        
    //     expect(screen.queryByText(/Option 1/i)).not.toBeInTheDocument();
    //     expect(screen.queryByText(/Option 2/i)).not.toBeInTheDocument();
    // });
});
