import { NavigationProp } from '@react-navigation/native';
import { productType } from '../../screens/app/Home/Interfaces/productType';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Splash: undefined;
  Favorites: undefined;
  productDetails: productType;
};

export type Props = NavigationProp<RootStackParamList>;
