import React from 'react';
import { render } from '@testing-library/react-native';
import Separator from '../Separator'; // Ajuste o caminho conforme necessário

describe('Separator Component', () => {
    it('should render correctly with text', () => {
        const { getByText, getAllByTestId } = render(<Separator text="Example Text" />);

        // Verifica se o texto do separador está presente
        expect(getByText('Example Text')).toBeTruthy();

        // Verifica se duas linhas são renderizadas
        const lines = getAllByTestId('line-element');
        expect(lines.length).toBe(2);
    });

    it('should render without text', () => {
        const { queryByText, getAllByTestId } = render(<Separator text="" />);

        // Verifica que o texto definido como vazio não é renderizado
        expect(queryByText(/./)).toBeNull();  // Verifica que nenhum texto foi renderizado

        // Verifica se duas linhas ainda são renderizadas
        const lines = getAllByTestId('line-element');
        expect(lines.length).toBe(2);
    });


});
