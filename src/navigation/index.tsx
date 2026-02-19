import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import InfoScreen from '../screens/InfoScreen';
import BMIScreen from '../screens/BMIScreen';
import PreTestsScreen from '../screens/PreTestsScreen';
import PostTestsScreen from '../screens/PostTestsScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';
import FAQScreen from '../screens/FAQScreen';
import FoodAddScreen from '../screens/FoodAddScreen';
import PedometerScreen from '../screens/PedometerScreen';
import RiskSurveyScreen from '../screens/RiskSurveyScreen';
import { theme } from '../theme/theme';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Info: undefined;
  BMI: undefined;
  PreTests: undefined;
  PostTests: undefined;
  Contact: undefined;
  About: undefined;
  FAQ: undefined;
  FoodAdd: undefined;
  Pedometer: undefined;
  RiskSurvey: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.background,
    primary: theme.colors.primary,
    card: theme.colors.card,
    text: theme.colors.text,
    border: theme.colors.border
  }
};

const RootNavigator = () => (
  <NavigationContainer theme={navTheme}>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: theme.colors.text,
        headerTitleStyle: { fontWeight: '700', color: theme.colors.text },
        headerStyle: { backgroundColor: theme.colors.card }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Prediabet' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
      <Stack.Screen name="Info" component={InfoScreen} options={{ title: 'Bilgilendirme' }} />
      <Stack.Screen name="BMI" component={BMIScreen} options={{ title: 'BKİ Hesaplama' }} />
      <Stack.Screen name="PreTests" component={PreTestsScreen} options={{ title: 'Ön Testler' }} />
      <Stack.Screen name="PostTests" component={PostTestsScreen} options={{ title: 'Son Testler' }} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'İletişim' }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Hakkımızda' }} />
      <Stack.Screen name="FAQ" component={FAQScreen} options={{ title: 'S.S.S.' }} />
      <Stack.Screen name="FoodAdd" component={FoodAddScreen} options={{ title: 'Besin Ekle' }} />
      <Stack.Screen name="Pedometer" component={PedometerScreen} options={{ title: 'Adımsayar' }} />
      <Stack.Screen name="RiskSurvey" component={RiskSurveyScreen} options={{ title: 'Risk Anketi' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
