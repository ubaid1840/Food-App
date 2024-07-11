import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/screens/mainScreen';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as eva from '@eva-design/eva';
import { default as theme } from './custom-theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { MaterialIconsPack } from './assets/icons/material-icon';
import RestaurantScreen from './src/screens/restaurantScreen';
import CartScreen from './src/screens/cartScreen';
import PaymentScreen from './src/screens/paymentScreen';
import CartContextProvider from './src/store/context/CartContext';
import OrderScreen from './src/screens/orderScreen';

const AppStack = createNativeStackNavigator();
const MyDrawer = createDrawerNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <IconRegistry icons={[EvaIconsPack, MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <CartContextProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
              <AppStack.Navigator initialRouteName='main' screenOptions={{ headerShown: false, gestureEnabled: false, }} >
                <AppStack.Screen name='main' component={MainScreen} />
                <AppStack.Screen name='restaurant' component={RestaurantScreen} />
                <AppStack.Screen name='cart' component={CartScreen} />
                <AppStack.Screen name='payment' component={PaymentScreen} />
                <AppStack.Screen name='order' component={OrderScreen} />
              </AppStack.Navigator>
            </NavigationContainer>
          </GestureHandlerRootView>
        </CartContextProvider>
      </ApplicationProvider>
    
    </>
  );
}

