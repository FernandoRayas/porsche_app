import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PrincipalScreen from '../screens/PrincipalScreen';
import ModeloScreen from '../screens/ModeloScreen';
import ComunidadScreen from '../screens/ComunidadScreen';
import HistoriaScreen from '../screens/HistoriaScreen';
import CuentaScreen from '../screens/CuentaScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Principal" component={DrawerNavigator} />
      <Stack.Screen name="Modelo" component={ModeloScreen} />
      <Stack.Screen name="Comunidad" component={ComunidadScreen} />
      <Stack.Screen name="Historia" component={HistoriaScreen} />
      <Stack.Screen name="Cuenta" component={CuentaScreen} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#D9D9D9',
          width: 210,
        },
        drawerLabelStyle: {
          fontSize: 20,
          color: 'black',
        },
        drawerActiveBackgroundColor: '#A42823'
      }}
    >
      <Drawer.Screen name="Inicio" component={PrincipalScreen} options={{
        headerTransparent: true,
        headerTitle: ' ',
      }}/>
      <Drawer.Screen name="Modelos" component={ModeloScreen} options={{
        headerTransparent: true,
        headerTitle: ' ',
      }}/>
      <Drawer.Screen name="Comunidad" component={ComunidadScreen} options={{
        headerTransparent: true,
        headerTitle: ' ',
      }}/>
      <Drawer.Screen name="Historia" component={HistoriaScreen} options={{
        headerTransparent: true,
        headerTitle: ' ',
      }}/>
      <Drawer.Screen name="Cuenta" component={CuentaScreen} options={{
        headerTransparent: true,
        headerTitle: ' ',
      }}/>
    </Drawer.Navigator>
  );
};



export default MainStackNavigator;
