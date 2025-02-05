import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../theme/colors';

const {width} = Dimensions.get('screen');

export const Style = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    container: {
        padding: 24,
        backgroundColor: colors.WHITE,
    },
    loading: {
        flex: 1,
        backgroundColor: colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        paddingVertical: 24,
    },
    listProduct: {
        height: width * 1,
    },
    productsList: {
        paddingHorizontal: '3%',
    },
    productsColumn: {
        justifyContent: 'space-between',
    },
});
