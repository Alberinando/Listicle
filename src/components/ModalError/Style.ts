import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const Style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLUEBACK,
  },
  modalView: {
    width: '90%',
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.BLUE,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: '100%',
  },
  buttonText: {
    color: colors.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 24,
    color: colors.ORANGE, // Escolha uma cor para o "X"
    fontWeight: 'bold',
  },
});

export default Style;
