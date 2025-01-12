import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, Image, Modal, TouchableOpacity } from 'react-native';
import { Style } from './Style';
import { InputProp, Option } from './Interface/InputProp';

const Input: React.FC<InputProp> = ({
  label,
  type = 'text',
  options,
  isPassword,
  value,
  onChangeText,
  placeholder,
  style,
  ...props
}) => {
  const [textValue, setTextValue] = useState<string>(typeof value === 'object' && value ? value.title : (typeof value === 'string' ? value : ''));
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible, setPickerModalVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSelect = (opt: Option) => {
    onChangeText?.(opt.title);
    setTextValue(opt.title);
    setPickerModalVisible(false);
  };

  const handleChangeText = (text: string) => {
    setTextValue(text);
    onChangeText?.(text);
  };

  return (
    <View style={Style.container}>
      <Text style={Style.label}>{label}</Text>
      {type === 'picker' ? (
        <Pressable onPress={() => setPickerModalVisible(true)} style={Style.inputContainer}>
          {typeof value === 'object' && value ? (
            <Text style={[Style.input, style]}>{value.title}</Text>
          ) : (
            <Text style={[Style.placeholder, style]}>{placeholder}</Text>
          )}
          <Image style={Style.arrow} source={require('../../assets/arrow.png')} />
        </Pressable>
      ) : (
        <View style={Style.inputContainer}>
          <TextInput
            placeholder={placeholder}
            value={textValue}
            onChangeText={handleChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            style={[Style.input, style]}
            {...props}
          />
          {isPassword ? (
            <Pressable onPress={onEyePress}>
              <Image
                style={Style.eye}
                source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')}
              />
            </Pressable>
          ) : null}
        </View>
      )}

      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity activeOpacity={1} onPress={() => setPickerModalVisible(false)} style={Style.modalWrapper}>
          <TouchableOpacity activeOpacity={1} style={Style.modalContent}>
            <Text style={Style.headerTitle}>Select options</Text>
            {options?.map((opt) => {
              if (!opt?.id) {
                return null;
              }
              const selected = typeof value === 'object' && value?.id === opt.id;
              return (
                <Text
                  onPress={() => onSelect(opt)}
                  style={[Style.optionText, selected ? Style.selectedOption : {}]}
                  key={opt.id}
                >
                  {opt.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default React.memo(Input);
