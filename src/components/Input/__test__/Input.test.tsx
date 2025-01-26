import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Input from '../Input';

describe('Input Component', () => {
  it('should render a text input with a placeholder', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    const inputElement = getByPlaceholderText('Enter text');
    expect(inputElement).toBeTruthy();
  });

  it('should update text input value when typing', () => {
    const mockOnChangeText = jest.fn();
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" onChangeText={mockOnChangeText} />);

    const inputElement = getByPlaceholderText('Enter text');
    fireEvent.changeText(inputElement, 'Hello World');
    expect(mockOnChangeText).toHaveBeenCalledWith('Hello World');
  });

  it('should toggle password visibility when eye icon is pressed', () => {
    const { getByPlaceholderText, getByRole } = render(
      <Input isPassword placeholder="Enter password" />
    );

    const inputElement = getByPlaceholderText('Enter password');
    expect(inputElement.props.secureTextEntry).toBe(true);

    const eyeButton = getByRole('button');
    fireEvent.press(eyeButton);
    expect(inputElement.props.secureTextEntry).toBe(false);

    fireEvent.press(eyeButton);
    expect(inputElement.props.secureTextEntry).toBe(true);
  });
});
