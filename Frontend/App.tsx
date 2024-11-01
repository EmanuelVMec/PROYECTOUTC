import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import InicioTrici from './InicioTrici';
import Tricimotero from './Tricimotero';
import RegistroCliente from './RegistroCliente';
import InicioCli from './InicioCli'; // Importar InicioCli
import Cliente from './Cliente'; // Importar Cliente

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InicioTrici"
          component={InicioTrici}
          options={{ title: 'Inicio de Sesión' }}
        />
        <Stack.Screen
          name="Tricimotero"
          component={Tricimotero}
          options={{ title: 'Tricimotero' }}
        />
        <Stack.Screen
          name="RegistroCliente"
          component={RegistroCliente}
          options={{ title: 'Registro de Cliente' }}
        />
        <Stack.Screen
          name="InicioCli"
          component={InicioCli}
          options={{ title: 'Inicio Cliente' }}
        />
        <Stack.Screen
          name="Cliente"
          component={Cliente}
          options={{ title: 'Cliente' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
