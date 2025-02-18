import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';

const { width } = Dimensions.get('screen');

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUEBACK,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContainer: {
        width: '100%',
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 35,
        alignItems: 'center',
        elevation: 5,
        paddingVertical: '10%',
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'space-evenly',
    },
    modalText: {
        textAlign: 'left',
        fontSize: 18,
    },
    image: {
        width: width * 0.075,
        height: 45,
    },
});

export default Style;
