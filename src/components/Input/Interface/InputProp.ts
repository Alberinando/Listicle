import { StyleProp, ViewStyle } from 'react-native';

export interface Option {
  id: string;
  title: string;
}

export interface InputProp {
  label?: string;
  isPassword?: boolean;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string | Option;
  style?: StyleProp<ViewStyle>;
  type?: 'text' | 'picker';
  options?: Option[];
  capitalize?: boolean;
}
