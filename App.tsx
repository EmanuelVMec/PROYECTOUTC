import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/siptrici.jpg')} style={styles.backgroundImage}>
        
        {/* Rotated green background element */}
        <View style={styles.steel} />

        {/* Logo container */}
        <View style={styles.logoContainer}>
          <Image source={require('./assets/logotrici.png')} style={styles.logo} />
        </View>

        <TouchableOpacity style={styles.buttonye}>
        <Text style={styles.buttonTexttrici}>TRICIMOTERO</Text>
        </TouchableOpacity>

        {/* Button container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>INICIAR COMO CLIENTE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
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
    top: '-30%', // Adjust positioning to fit your layout
    left: '-57%', // Adjust positioning to fit your layout
    backgroundColor: "rgba(48,168,41,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    overflow: "visible",
    borderWidth: 107,
    width: 600,  // Adjust width and height as needed
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
  subText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
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
