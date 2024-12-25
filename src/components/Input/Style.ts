import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const Style = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        color: colors.BLUE,
        fontSize: 14,
        fontWeight: '500',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.GREY,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        borderColor: colors.BLUE,
        color: colors.TEXTGREY,
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },
    arrow: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{ rotate: '90deg' }],
    },
    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.TEXTGREY,
    },
    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalContent: {
        backgroundColor: colors.WHITE,
        borderRadius: 8,
        padding: 16,
        width: '80%',
    },
    headerTitle: {
        marginBottom: 16,
        color: colors.BLACK,
        fontSize: 16,
    },
    optionText: {
        color: colors.BLACK,
        paddingVertical: 4,
        fontSize: 15,
    },
    selectedOption: {
        color: colors.BLUE,
        fontWeight: 'bold',
    },
});
