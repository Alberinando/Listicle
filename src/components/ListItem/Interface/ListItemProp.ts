import { ViewStyle } from 'react-native';

export interface ListItemProp {
    title: string;
    subtitle: string;
    onPress?: () => void;
    style?: ViewStyle;
}
