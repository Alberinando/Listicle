import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, StatusBar, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Style } from './Style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../theme/colors';
import Header from '../../../components/Header/Header';
import { DataType } from './Interfaces/dataType';
import CategoryBox from '../../../components/CategoryBox/CategoryBox';

const Home = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        renderCategoryItem();
    }, []);

    const renderCategoryItem = async () => {
        setRefreshing(true);
        try {
            const list: DataType[] = [];
            const querySnapshot = await firestore().collection('categories').get();
            querySnapshot.forEach(documentSnapshot => {
                const documentData = documentSnapshot.data();
                list.push({
                    key: documentSnapshot.id,
                    title: documentData.title,
                    status: documentData.status,
                    image: documentData.image,
                });
            });
            setData(list);
            setRefreshing(false);
        } catch (error) {
            console.error('Erro ao obter documentos:', error);
            setRefreshing(false);
        }
    };

    const renderItem = ({ item }: { item: DataType }) => (
        <CategoryBox title={item?.title} image={item?.image} />
    );

    if (refreshing) {
        return (
            <View style={Style.loading}>
                <ActivityIndicator size="large" color={colors.BLUE} />
            </View>
        );
    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
            <ScrollView style={Style.container}>
                <Header showSearch title={'Tudo que você precisa'} />
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.key}
                    horizontal
                    style={Style.list}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
