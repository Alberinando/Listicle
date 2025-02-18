import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, StatusBar, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../theme/colors';
import Header from '../../../components/Header/Header';
import { DataType } from './Interfaces/dataType';
import CategoryBox from '../../../components/CategoryBox/CategoryBox';
import { productType } from './Interfaces/productType';
import ProductHomeItem from '../../../components/ProductHomeItem/ProductHomeItem';
import { Style } from './Style';
import { Props } from '../../../routers/Interface/RouterProps';

const Home: React.FC = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<Props>();

    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [keyword, setKeyword] = useState<string>('');
    const [data, setData] = useState<DataType[]>([]);
    const [product, setProduct] = useState<productType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<productType[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useFocusEffect(
        useCallback(() => {
            renderCategoryItem();
            renderProductItemDatabase();
        }, [])
    );

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = product.filter(
                (p) => p.category === selectedCategory
            );
            setFilteredProducts(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = product.filter(
                (p) =>
                    p.category === selectedCategory &&
                    p.title.toLowerCase().includes(keyword.toLowerCase())
            );
            setFilteredProducts(updatedProducts);
        } else if (!selectedCategory && keyword) {
            const updatedProducts = product.filter((p) =>
                p.title.toLowerCase().includes(keyword.toLowerCase())
            );
            setFilteredProducts(updatedProducts);
        } else {
            setFilteredProducts(product);
        }
    }, [selectedCategory, keyword, product]);

    const renderCategoryItem = async () => {
        setRefreshing(true);
        try {
            const list: DataType[] = [];
            const querySnapshot = await firestore().collection('categories').get();
            querySnapshot.forEach((documentSnapshot) => {
                const documentData = documentSnapshot.data();
                list.push({
                    key: documentSnapshot.id,
                    title: documentData.title,
                    status: documentData.status,
                    image: documentData.image,
                    images: documentData.imagens,
                });
            });
            setData(list);
        } catch (error) {
            console.error('Erro ao obter documentos:', error);
        } finally {
            setRefreshing(false);
        }
    };

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
                    images: documentData.images,
                    price: documentData.price,
                    category: documentData.category,
                    description: documentData.description,
                    liked: documentData.liked,
                    email: documentData.email,
                    cellPhone: documentData.cellphone,
                });
            });
            setProduct(list);
        } catch (error) {
            console.error('Erro ao obter documentos:', error);
        } finally {
            setRefreshing(false);
        }
    };

    const onProductPress = useCallback(
        (item: productType) => {
            navigation.navigate('productDetails', item);
        },
        [navigation]
    );

    const renderItem = useCallback(
        ({ item, index }: { item: DataType; index: number }) => (
            <CategoryBox
                onPress={() =>
                    setSelectedCategory((prevSelected) =>
                        prevSelected === item.key ? '' : item.key
                    )
                }
                isSelected={item.key === selectedCategory}
                title={item.title}
                isFirst={index === 0}
                image={item.image}
            />
        ),
        [selectedCategory]
    );

    const renderProductItem = useCallback(
        ({ item }: { item: productType }) => (
            <ProductHomeItem
                key={item.key}
                title={item.title}
                price={item.price}
                image={item.image}
                onPress={() => onProductPress(item)}
            />
        ),
        [onProductPress]
    );

    if (refreshing) {
        return (
            <>
                <StatusBar backgroundColor={colors.WHITE} barStyle="dark-content" />
                <View style={Style.loading}>
                    <ActivityIndicator size="large" color={colors.BLUE} />
                </View>
            </>
        );
    }

    return (
        <SafeAreaView style={Style.containerView}>
            <StatusBar backgroundColor={colors.WHITE} barStyle="dark-content" />
            <SafeAreaView style={Style.container}>
                <Header
                    showSearch
                    onSearch={setKeyword}
                    keyword={keyword}
                    title="Tudo que você precisa"
                />
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.key}
                    horizontal
                    style={Style.list}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={5}
                    maxToRenderPerBatch={10}
                    windowSize={5}
                />

                <FlatList
                    data={filteredProducts}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={Style.productsColumn}
                    style={Style.productsList}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => item.key}
                    ListFooterComponent={<View style={Style.listProduct} />}
                    contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
                    initialNumToRender={10}
                    maxToRenderPerBatch={20}
                    windowSize={10}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
