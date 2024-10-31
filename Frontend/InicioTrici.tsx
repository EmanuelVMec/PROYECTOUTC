import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function InicioTrici() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logotrici.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>INICIAR SESIÓN COMO TRABAJADOR</Text>

      <Text style={styles.label}>Ingrese su usuario</Text>
      <TextInput style={styles.input} placeholder="Usuario" />

      <Text style={styles.label}>Ingrese su contraseña</Text>
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

      <Text style={styles.subText}>Su contraseña propia</Text>

      <TouchableOpacity style={styles.loginButton}>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: -20,
  },
  logo: {
    width: 200, // Ajusta el tamaño según lo necesites
    height: 200,
    resizeMode: 'contain',
    top: '-30%',
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
