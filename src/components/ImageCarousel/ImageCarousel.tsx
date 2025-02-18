import React, { useState, useCallback } from 'react';
import { FlatList, Image, Dimensions, View, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Style } from './Style';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(horizontalOffset / width);
        setActiveIndex(index);
    };

    const renderImage = useCallback(({ item }: { item: string }) => {
        return <Image style={Style.image} source={{ uri: item }} />;
    }, []);

    return (
        <View>
            <FlatList
                horizontal
                pagingEnabled
                removeClippedSubviews={true}
                testID="image-carousel-list"
                style={Style.list}
                data={images}
                renderItem={renderImage}
                onMomentumScrollEnd={handleScrollEnd}
                initialNumToRender={2}
                keyExtractor={(_, index) => index.toString()}
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
                windowSize={3}
            />

            <View style={Style.pagination}>
                {images.map((_, i) => (
                    <View
                        key={i}
                        testID={i === activeIndex ? 'pagination-indicator-active' : 'pagination-indicator'}
                        style={[Style.paginationLine, i === activeIndex ? Style.activeLine : null]}
                    />
                ))}
            </View>
        </View>
    );
};

export default React.memo(ImageCarousel);
