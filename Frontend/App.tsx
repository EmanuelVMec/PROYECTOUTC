import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Cambia la ruta si es necesario
import InicioTrici from './InicioTrici';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
