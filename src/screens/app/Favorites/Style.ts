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
});
