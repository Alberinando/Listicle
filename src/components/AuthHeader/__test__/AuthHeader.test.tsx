import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AuthHeader from '../AuthHeader';

describe('AuthHeader Component', () => {
    const mockOnBackPress = jest.fn(); // Mock da função onBackPress

    afterEach(() => {
        mockOnBackPress.mockClear(); // Limpa o mock após cada teste
    });

    it('deve renderizar corretamente com o título fornecido', () => {
        const { getByText } = render(<AuthHeader title="Login" onBackPress={mockOnBackPress} />);
        expect(getByText('Login')).toBeTruthy(); // Verifica se o título foi renderizado
    });

    it('deve chamar a função onBackPress ao pressionar o botão', () => {
        const { getByTestId } = render(<AuthHeader title="Login" onBackPress={mockOnBackPress} />);
        const button = getByTestId('back-button'); // Obtém o Pressable pelo testID
        fireEvent.press(button); // Simula o clique
        expect(mockOnBackPress).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada
    });

    it('deve renderizar a imagem de retorno', () => {
        const { getByTestId } = render(<AuthHeader title="Login" onBackPress={mockOnBackPress} />);
        const image = getByTestId('auth-back-image'); // Seleciona a imagem pelo testID
        expect(image).toBeTruthy(); // Verifica se a imagem foi renderizada
    });
});
