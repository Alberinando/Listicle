import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CategoryBox from '../CategoryBox';
import { colors } from '../../../theme/colors';
import { Image } from 'react-native';

jest.mock('../Components/imageMap', () => ({
    imageMap: {
      testImage: 'mockedImageSource',
    },
  }));

describe('CategoryBox Component', () => {
  const onPressMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o título e a imagem corretamente', () => {
    const { getByText, UNSAFE_getByType } = render(
      <CategoryBox
        title="Test Category"
        image="testImage"
        onPress={onPressMock}
        isFirst={false}
        isSelected={false}
      />
    );

    expect(getByText('Test Category')).toBeTruthy();

    const imageComponent = UNSAFE_getByType(Image);
    expect(imageComponent.props.source).toBe('mockedImageSource');
  });

  it('deve chamar a função onPress ao pressionar o componente', () => {
    const { getByTestId } = render(
      <CategoryBox
        title="Test Category"
        image="testImage"
        onPress={onPressMock}
        isFirst={false}
        isSelected={false}
      />
    );

    const pressable = getByTestId('category-box-pressable');
    fireEvent.press(pressable);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('deve aplicar o estilo isFirst quando a prop isFirst for verdadeira', () => {
    const { getByTestId } = render(
      <CategoryBox
        title="Test Category"
        image="testImage"
        onPress={onPressMock}
        isFirst={true}
        isSelected={false}
      />
    );

    const pressable = getByTestId('category-box-pressable');
    expect(Array.isArray(pressable.props.style)).toBeTruthy();
    expect(pressable.props.style.length).toBeGreaterThan(1);
  });

  it('deve aplicar os estilos de seleção (isSelected) à imagem e ao texto', () => {
    const { getByTestId } = render(
      <CategoryBox
        title="Test Category"
        image="testImage"
        onPress={onPressMock}
        isFirst={false}
        isSelected={true}
      />
    );

    const imageContainer = getByTestId('category-box-image-container');
    const textComponent = getByTestId('category-box-text');

    expect(imageContainer.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ backgroundColor: colors.DARKGREY })])
    );

    expect(textComponent.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({ /* propriedades definidas em Style.textOption */ })])
    );
  });
});
