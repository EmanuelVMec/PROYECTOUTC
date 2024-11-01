import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegistroCliente({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        {/* Header con logo */}
        <View style={styles.header}>
          <Image source={require('./assets/logotrici.png')} style={styles.logo} />
        </View>

        {/* Botones de redes sociales */}
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#DB4437' }]}>
          <Text style={styles.socialButtonText}>Continuar con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4267B2' }]}>
          <Text style={styles.socialButtonText}>Continuar con Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#000' }]}>
          <Text style={styles.socialButtonText}>Continuar con Apple</Text>
        </TouchableOpacity>

        {/* Sección desplazable para campos de entrada */}
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <TextInput style={styles.input} placeholder="Nombre" />
          <TextInput style={styles.input} placeholder="e-mail" keyboardType="email-address" />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="grey" />
            </TouchableOpacity>
          </View>
          <Text style={styles.hintText}>Mínimo 8 caracteres</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Repita contraseña"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="grey" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>REGISTRARSE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 7,
    marginBottom: 10,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    width: '92%',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  hintText: {
    fontSize: 12,
    color: '#888',
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: '#FF007F',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
    width: '100%',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
