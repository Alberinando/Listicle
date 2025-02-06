import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Style } from './Style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../theme/colors';
import { productType } from '../Home/Interfaces/productType';
import Header from '../../../components/Header/Header';
import FavoriteItem from '../../../components/FavoriteItem/FavoriteItem';

const Favorites = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [product, setProduct] = useState<productType[]>([]);

    useEffect(() => {
        renderProductItemDatabase();
    }, []);

    const renderProductItemDatabase = async () => {
        setRefreshing(true);
        try {
            const list: productType[] = [];
            const querySnapshot = await firestore().collection('products').get();
            querySnapshot.forEach((documentSnapshot) => {
                const documentData = documentSnapshot.data();
                list.push({
                    key: documentSnapshot.id,
                    title: documentData.title,
                    status: documentData.status,
                    image: documentData.image,
                    price: documentData.price,
                    category: documentData.category,
                    description: documentData.description,
                });
            });
            setProduct(list);
        } catch (error) {
            console.error('Erro ao obter documentos:', error);
        } finally {
            setRefreshing(false);
        }
    };

    const renderItem = ({ item }: any) => {
        const { key, ...rest } = item;
        return <FavoriteItem key={key} {...rest} />;
    };

    if (refreshing) {
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
            <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} /><SafeAreaView style={Style.container}>
                <Header title="Favoritos" />
                <FlatList data={product} renderItem={renderItem} keyExtractor={(item) => item.key} />
            </SafeAreaView>
        </>
    );
};

export default React.memo(Favorites);
