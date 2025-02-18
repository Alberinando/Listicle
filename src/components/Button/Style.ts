import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const Style = StyleSheet.create({
    container: {
        backgroundColor: colors.BLUE,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        // flex: 1,
    },
    title: {
        color: colors.WHITE,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Style;
