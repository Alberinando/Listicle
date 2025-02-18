import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../Header';

describe('Header Component', () => {
    it('deve renderizar o título corretamente', () => {
        const { getByTestId } = render(<Header title="Test Header" />);
        expect(getByTestId('header-title').props.children).toBe('Test Header');
    });

    it('deve chamar onBackPress quando o botão de voltar é pressionado', () => {
        const onBackPressMock = jest.fn();
        const { getByTestId } = render(
            <Header title="Test Header" showBack onBackPress={onBackPressMock} />
        );
        const backButton = getByTestId('header-back');
        fireEvent.press(backButton);
        expect(onBackPressMock).toHaveBeenCalledTimes(1);
    });

    it('deve chamar onLogout quando o botão de logout é pressionado', () => {
        const onLogoutMock = jest.fn();
        const { getByTestId } = render(
            <Header title="Test Header" showLogout onLogout={onLogoutMock} />
        );
        const logoutButton = getByTestId('header-logout');
        fireEvent.press(logoutButton);
        expect(onLogoutMock).toHaveBeenCalledTimes(1);
    });

    it('deve alternar a exibição do input de pesquisa ao pressionar o botão de pesquisa', () => {
        const { getByTestId, queryByTestId } = render(
            <Header title="Test Header" showSearch onSearch={() => { }} />
        );

        expect(queryByTestId('header-input')).toBeNull();

        const searchButton = getByTestId('header-search');
        fireEvent.press(searchButton);

        expect(getByTestId('header-input')).toBeTruthy();

        fireEvent.press(searchButton);
        expect(queryByTestId('header-input')).toBeNull();
    });

    it('deve chamar onSearch quando o texto do input for alterado', () => {
        const onSearchMock = jest.fn();
        const { getByTestId } = render(
            <Header title="Test Header" showSearch onSearch={onSearchMock} keyword="" />
        );

        const searchButton = getByTestId('header-search');
        fireEvent.press(searchButton);

        const searchInput = getByTestId('header-input');
        fireEvent.changeText(searchInput, 'produto');
        expect(onSearchMock).toHaveBeenCalledWith('produto');
    });
});
