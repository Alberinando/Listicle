import React, { useCallback, useState } from 'react';
import { Image, Pressable, ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routers/Interface/RouterProps';
import { Style } from './Style';
import Button from '../../../components/Button/Button';
import ImageCarousel from '../../../components/ImageCarousel/ImageCarousel';
import firestore from '@react-native-firebase/firestore';
import ModalContact from '../../../components/ModalContact/ModalContact';
import { colors } from '../../../theme/colors';

type ProductDetailsProps = NativeStackScreenProps<RootStackParamList, 'productDetails'>;

const ProductDetails: React.FC<ProductDetailsProps> = ({ route, navigation }) => {
    const initialProduct = route.params;
    const [product, setProduct] = useState(initialProduct);
    const [modalVisible, setModalVisible] = useState(false);
    const parentNavigation = navigation.getParent();

    useFocusEffect(
        useCallback(() => {
            if (parentNavigation) {
                parentNavigation.setOptions({ tabBarStyle: { display: 'none' } });
            }
            return () => {
                if (parentNavigation) {
                    parentNavigation.setOptions({ tabBarStyle: { display: 'flex' } });
                }
            };
        }, [parentNavigation])
    );

    const onBackPress = () => {
        navigation.goBack();
    };

    const onBookmark = async () => {
        try {
            const newLikedStatus = !product.liked;
            await firestore()
                .collection('products')
                .doc(product.key)
                .update({
                    liked: newLikedStatus,
                });
            setProduct({
                ...product,
                liked: newLikedStatus,
            });
        } catch (error) {
            console.error('Erro ao atualizar bookmark:', error);
        }
    };

    const onContact = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={Style.safe}>
            <StatusBar backgroundColor={modalVisible ? colors.BLUEBACK : colors.WHITE} barStyle={modalVisible ? 'light-content' : 'dark-content'} />
            <ScrollView style={Style.container}>
                {product?.images?.length ? (
                    <ImageCarousel images={product.images} />
                ) : (
                    <Image style={Style.image} source={{ uri: product.image }} />
                )}
                <View style={Style.content}>
                    <Text style={Style.title}>{product.title}</Text>
                    <Text style={Style.price}>{product.price}</Text>
                    <Text style={Style.description}>{product.description}</Text>
                </View>
                <Pressable hitSlop={20} onPress={onBackPress} style={Style.backContainer}>
                    <Image
                        style={Style.backIcon}
                        source={require('../../../assets/back.png')}
                    />
                </Pressable>
            </ScrollView>
            <View style={Style.footer}>
                <Pressable onPress={onBookmark} style={Style.bookmarkContainer}>
                    <Image
                        style={Style.bookmarkIcon}
                        source={
                            product.liked
                                ? require('../../../assets/bookmark_filled.png')
                                : require('../../../assets/bookmark_blue.png')
                        }
                    />
                </Pressable>
                <Button onPress={onContact} style={Style.bottom} title="Contact Seller" />
            </View>
            {modalVisible && (
                <ModalContact
                    email={product.email}
                    cellPhone={product.cellPhone}
                    onClose={handleCloseModal}
                />
            )}
        </SafeAreaView>
    );
};

export default React.memo(ProductDetails);
