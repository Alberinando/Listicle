import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 18,
        height: 18,
    },
    title: {
        color: colors.BLUE,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16,
    },
});

export default Style;
