import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/siptrici.jpg')} style={styles.backgroundImage}>
        
        {/* Fondo verde inclinado */}
        <View style={styles.steel} />

        {/* Contenedor de logo */}
        <View style={styles.logoContainer}>
          <Image source={require('./assets/logotrici.png')} style={styles.logo} />
        </View>

        {/* Botón TRICIMOTERO que navega a InicioTrici */}
        <TouchableOpacity
          style={styles.buttonye}
          onPress={() => navigation.navigate('InicioTrici')}
        >
          <Text style={styles.buttonTexttrici}>TRICIMOTERO</Text>
        </TouchableOpacity>

        {/* Contenedor de botones adicionales */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>INICIAR COMO CLIENTE</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('RegistroCliente')} // Navegar a RegistroCliente
          >
            <Text style={styles.buttonText}>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  steel: {
    position: 'absolute',
    top: '-30%',
    left: '-57%',
    backgroundColor: "rgba(48,168,41,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: { width: 3, height: 3 },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    overflow: "visible",
    borderWidth: 107,
    width: 600,
    height: 600,
    transform: [{ rotate: '65deg' }],
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonye: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonTexttrici: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
