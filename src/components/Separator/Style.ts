import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    line: {
        height: 1,
        backgroundColor: colors.LIGHTGREY,
        flex: 1,
    },
    text: {
        color: colors.BLUE,
        fontWeight: '500',
        marginHorizontal: 8,
    },
});
