import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

export default function InicioTrici({ navigation }) {
  // Estados para almacenar el usuario y la contraseña ingresados
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Usuario y contraseña "dummy" para la validación
  const dummyUsername = "usuario123";
  const dummyPassword = "password123";

  // Función para manejar la autenticación
  const handleLogin = () => {
    if (username === dummyUsername && password === dummyPassword) {
      Alert.alert("Éxito", "Has iniciado sesión correctamente");
      navigation.navigate("Tricimotero"); // Navegar a Tricimotero
    } else {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      {/* Cuadro degradado en la parte superior */}
      <View style={styles.gradientBox} />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logotrici.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>INICIAR SESIÓN COMO TRABAJADOR</Text>

      <Text style={styles.label}>Ingrese su usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Ingrese su contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.subText}>Su contraseña propia</Text>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>INGRESAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  gradientBox: {
    position: 'absolute',
    top: -97,
    left: -100,
    right: -50,
    height: 300,
    backgroundColor: '#32CD32', // Puedes ajustar el color
    borderColor: 'black',
    borderWidth: 10,
    borderStyle: 'dotted',
    borderRadius: 10,
    marginHorizontal: -20,
    marginTop: -50,
    zIndex: -1,
    transform: [{ rotate: '-24deg' }],
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    top: '-15%',
    left: '0%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
  },
  subText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: '#FF007F',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 50,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
