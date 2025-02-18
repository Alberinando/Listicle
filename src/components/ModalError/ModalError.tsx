import React, { useEffect, useRef } from 'react';
import { Modal, View, Text, TouchableOpacity, Animated } from 'react-native';
import Style from './Style';
import { ModalErrorProps } from './Interface/ModalError';

const ModalError = ({ Message, MessageTitle, onClose }: ModalErrorProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  return (
    <Modal animationType="fade" transparent={true} visible={true} onRequestClose={onClose}>
      <View style={Style.centeredView}>
        <View style={Style.modalView}>
          {/* Botão de fechar animado */}
          <TouchableOpacity style={Style.closeButton} onPress={onClose}>
            <Animated.Text style={[Style.closeText, { transform: [{ scale: scaleAnim }] }]}>
              ✖
            </Animated.Text>
          </TouchableOpacity>

          <Text style={Style.modalTitle}>{MessageTitle}</Text>
          <Text style={Style.modalText}>{Message}</Text>

          <TouchableOpacity style={Style.button} onPress={onClose}>
            <Text style={Style.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(ModalError);
