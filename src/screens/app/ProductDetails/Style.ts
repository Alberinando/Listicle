import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

const { height } = Dimensions.get('window');

export const Style = StyleSheet.create({
    safe: {
        flex: 1,
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
    },
    image: {
        width: '100%',
        height: height * 0.45,
        backgroundColor: colors.LIGHTGREY,
    },
    content: {
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24,
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    description: {
        color: colors.TEXTGREY,
        fontWeight: '300',
        marginVertical: 8,
    },
    bookmarkContainer: {
        backgroundColor: colors.LIGHTGREY,
        padding: 18,
        borderRadius: 8,
        marginRight: 16,
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
    },
    backContainer: {
        backgroundColor: colors.WHITE,
        padding: 10,
        margin: 24,
        borderRadius: 8,
        marginRight: 16,
        position: 'absolute',
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    bottom: {
        flex: 1,
    },
});
