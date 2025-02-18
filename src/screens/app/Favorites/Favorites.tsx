import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, StatusBar, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../theme/colors';
import { productType } from '../Home/Interfaces/productType';
import Header from '../../../components/Header/Header';
import FavoriteItem from '../../../components/FavoriteItem/FavoriteItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { FavoritesStackParamList } from '../../../routers/Interface/FavoritesStacksProps';
import { Style } from './Style';

type FavoritesNavigationProp = NativeStackNavigationProp<FavoritesStackParamList, 'FavoritesMain'>;

const Favorites = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<productType[]>([]);
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<FavoritesNavigationProp>();

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        try {
            const list: productType[] = [];
            const querySnapshot = await firestore()
                .collection('products')
                .where('liked', '==', true)
                .get();
            querySnapshot.forEach((documentSnapshot) => {
                const documentData = documentSnapshot.data();
                list.push({
                    key: documentSnapshot.id,
                    title: documentData.title,
                    status: documentData.status,
                    image: documentData.image,
                    images: documentData.images,
                    price: documentData.price,
                    category: documentData.category,
                    description: documentData.description,
                    liked: documentData.liked,
                    email: documentData.email,
                    cellPhone: documentData.cellphone,
                });
            });
            setProducts(list);
        } catch (error) {
            console.error('Erro ao obter documentos:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchProducts();
        }, [fetchProducts])
    );

    const onProductPress = useCallback(
        (item: productType) => {
            navigation.navigate('productDetails', item);
        },
        [navigation]
    );

    const onRemove = async (productKey: string) => {
        try {
            await firestore().collection('products').doc(productKey).update({
                liked: false,
            });

            setProducts((prevProducts) => prevProducts.filter((item) => item.key !== productKey));
        } catch (error) {
            console.error('Erro ao remover dos favoritos:', error);
        }
    };

    const onIconPress = (productKey: string) => {
        Alert.alert(
            'Tem certeza de que deseja remover este item dos seus favoritos?',
            '',
            [
                { text: 'Sim', onPress: () => onRemove(productKey) },
                { text: 'Cancelar' },
            ]
        );
    };

    const renderItem = ({ item }: { item: productType }) => {
        const { key, ...rest } = item;
        return <FavoriteItem onPress={() => onProductPress(item)} onIconPress={() => onIconPress(key)} {...rest} />;
    };

    if (loading) {
        return (
            <>
                <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
                <View style={Style.loading}>
                    <ActivityIndicator size="large" color={colors.BLUE} />
                </View>
            </>
        );
    }

    return (
        <>
            <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
            <SafeAreaView style={Style.container}>
                <Header title="Favoritos" />
                <FlatList
                    ListEmptyComponent={<Text style={Style.list}>Você ainda não tem favoritos</Text>}
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.key}
                    contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
                />
            </SafeAreaView>
        </>
    );
};

export default React.memo(Favorites);
