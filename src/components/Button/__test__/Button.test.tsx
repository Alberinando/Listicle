import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button Component', () => {
    it('should render the button with the given title', () => {
        const { getByText } = render(<Button title="Click Me" onPress={() => { }} />);
        const buttonTitle = getByText('Click Me');
        expect(buttonTitle).toBeTruthy();
    });

    it('should call onPress when the button is pressed', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<Button title="Click Me" onPress={onPressMock} />);

        const button = getByText('Click Me');
        fireEvent.press(button);

        expect(onPressMock).toHaveBeenCalledTimes(1);
    });
});
