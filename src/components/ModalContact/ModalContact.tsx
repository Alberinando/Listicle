// src/components/ModalContact.tsx
import React from 'react';
import { Modal, Pressable, Text, View, Image, Linking } from 'react-native';
import styles from './Style';
import { IModalContactProps } from './Interface/ModalContactProps';

const ModalContact: React.FC<IModalContactProps> = ({ email, cellPhone, onClose }) => {
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
    onClose();
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${cellPhone}`);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={onClose}
    >
      {/* Pressionar fora do modal chama onClose */}
      <Pressable style={styles.container} onPress={onClose} testID="containerPressable">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Formas de contato</Text>
          <Pressable style={styles.modalView} onPress={handleEmailPress} testID="emailPressable">
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../assets/email.png')}
            />
            <Text style={styles.modalText}>{email}</Text>
          </Pressable>
          <Pressable style={styles.modalView} onPress={handlePhonePress} testID="phonePressable">
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../assets/telefonica.png')}
            />
            <Text style={styles.modalText}>{cellPhone}</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default React.memo(ModalContact);
