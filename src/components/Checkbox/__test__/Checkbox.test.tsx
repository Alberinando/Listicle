import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Checkbox from '../Checkbox';

describe('Checkbox Component', () => {
    it('should render correctly when checked', () => {
        const { getByTestId } = render(<Checkbox checked={true} onCheck={() => { }} />);
        expect(getByTestId('checkbox-container')).toBeTruthy();
        expect(getByTestId('checkbox-icon')).toBeTruthy();
    });

    it('should render correctly when not checked', () => {
        const { queryByTestId } = render(<Checkbox checked={false} onCheck={() => { }} />);
        expect(queryByTestId('checkbox-icon')).toBeNull();
    });

    it('should call onCheck with correct value when pressed', () => {
        let isChecked = false;
        const onCheckMock = jest.fn((checked) => {
            isChecked = checked; // Atualiza o valor de isChecked
        });

        const { getByTestId, rerender } = render(
            <Checkbox checked={isChecked} onCheck={onCheckMock} />
        );

        const checkboxContainer = getByTestId('checkbox-container');

        // Simula o clique para marcar
        fireEvent.press(checkboxContainer);
        expect(onCheckMock).toHaveBeenCalledWith(true);

        // Renderiza novamente para atualizar o estado visual
        rerender(<Checkbox checked={true} onCheck={onCheckMock} />);

        // Simula o clique para desmarcar
        fireEvent.press(checkboxContainer);
        expect(onCheckMock).toHaveBeenCalledWith(false);
    });
});
