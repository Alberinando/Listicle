import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const Style = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    loading: {
        flex: 1,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Style;
