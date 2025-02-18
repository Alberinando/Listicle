import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const Style = StyleSheet.create({
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
        textAlign: 'center',
        marginTop: 40,
    },
    refreshing: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
