// ListItem.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Pressable, Image } from 'react-native';
import ListItem from '../ListItem';

describe('ListItem Component', () => {
  it('renderiza o título corretamente', () => {
    const { getByText } = render(
      <ListItem
        title="Título de Teste"
        subtitle="Subtítulo de Teste"
        onPress={() => {}}
        style={{}}
      />
    );
    expect(getByText('Título de Teste')).toBeTruthy();
  });

  it('renderiza o subtítulo corretamente', () => {
    const { getByText } = render(
      <ListItem
        title="Título de Teste"
        subtitle="Subtítulo de Teste"
        onPress={() => {}}
        style={{}}
      />
    );
    expect(getByText('Subtítulo de Teste')).toBeTruthy();
  });

  it('chama a função onPress ao pressionar o componente', () => {
    const onPressMock = jest.fn();
    const { UNSAFE_getAllByType } = render(
      <ListItem
        title="Título de Teste"
        subtitle="Subtítulo de Teste"
        onPress={onPressMock}
        style={{}}
      />
    );
    // Utilizamos UNSAFE_getAllByType para buscar o componente Pressable
    const pressable = UNSAFE_getAllByType(Pressable)[0];
    fireEvent.press(pressable);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renderiza a imagem da seta com a propriedade source definida', () => {
    const { UNSAFE_getAllByType } = render(
      <ListItem
        title="Título de Teste"
        subtitle="Subtítulo de Teste"
        onPress={() => {}}
        style={{}}
      />
    );
    const image = UNSAFE_getAllByType(Image)[0];
    expect(image.props.source).toBeDefined();
  });
});
