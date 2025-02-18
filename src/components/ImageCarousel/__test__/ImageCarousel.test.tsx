import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Dimensions } from 'react-native';
import ImageCarousel from '../ImageCarousel';

const { width } = Dimensions.get('window');

describe('ImageCarousel Component', () => {
    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
    ];

    it('deve renderizar corretamente', () => {
        const { getByTestId } = render(<ImageCarousel images={images} />);
        const flatList = getByTestId('image-carousel-list');
        expect(flatList).toBeTruthy();
    });

    it('deve exibir o número correto de indicadores de paginação', async () => {
        const { getAllByTestId } = render(<ImageCarousel images={images} />);
        await waitFor(() => {
            expect(getAllByTestId(/pagination-indicator/).length).toBe(images.length);
        });
    });

    it('deve mudar o índice ativo ao rolar', async () => {
        const { getByTestId, getAllByTestId } = render(<ImageCarousel images={images} />);
        const flatList = getByTestId('image-carousel-list');

        fireEvent(flatList, 'onMomentumScrollEnd', {
            nativeEvent: {
                contentOffset: { x: width },
                layoutMeasurement: { width },
            },
        });

        await waitFor(() => {
            const activeIndicators = getAllByTestId('pagination-indicator-active');
            expect(activeIndicators.length).toBe(1);
        });
    });
});
