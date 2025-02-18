// FavoriteItem.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FavoriteItem from '../FavoriteItem';

describe('FavoriteItem Component', () => {
  const onPressMock = jest.fn();
  const onIconPressMock = jest.fn();
  const title = 'Produto Teste';
  const price = '$100';

  const icon = 'https://example.com/icon.png';
  const image = 'https://example.com/image.png';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o título, o preço e as imagens corretamente', () => {
    const { getByText, getByTestId } = render(
      <FavoriteItem
        title={title}
        price={price}
        icon={icon}
        image={image}
        onPress={onPressMock}
        onIconPress={onIconPressMock}
      />
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(price)).toBeTruthy();

    const mainImage = getByTestId('favorite-item-image');
    expect(mainImage.props.source.uri).toBe(image);

    const iconImage = getByTestId('favorite-item-icon-image');
    expect(iconImage.props.source.uri).toBe(icon);
  });

  it('deve chamar a função onPress ao pressionar o container', () => {
    const { getByTestId } = render(
      <FavoriteItem
        title={title}
        price={price}
        icon={icon}
        image={image}
        onPress={onPressMock}
        onIconPress={onIconPressMock}
      />
    );

    const container = getByTestId('favorite-item-container');
    fireEvent.press(container);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('deve chamar a função onIconPress ao pressionar o ícone', () => {
    const { getByTestId } = render(
      <FavoriteItem
        title={title}
        price={price}
        icon={icon}
        image={image}
        onPress={onPressMock}
        onIconPress={onIconPressMock}
      />
    );

    const iconPressable = getByTestId('favorite-item-icon-pressable');
    fireEvent.press(iconPressable);
    expect(onIconPressMock).toHaveBeenCalledTimes(1);
  });

  it('deve usar o ícone de fallback quando nenhum ícone for fornecido', () => {
    const { getByTestId } = render(
      <FavoriteItem
        title={title}
        price={price}
        icon={''}
        image={image}
        onPress={onPressMock}
        onIconPress={onIconPressMock}
      />
    );

    const iconImage = getByTestId('favorite-item-icon-image');
    expect(iconImage.props.source.uri).toBeUndefined();
    expect(iconImage.props.source).toBeDefined();
  });
});
