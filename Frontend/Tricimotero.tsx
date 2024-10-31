import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Tricimotero() {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: -0.9404, // Coordenadas iniciales de La Maná
    longitude: -79.2304,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [position, setPosition] = useState(new AnimatedRegion({
    latitude: -0.9404,
    longitude: -79.2304,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  }));

  useEffect(() => {
    (async () => {
      // Solicitar permisos de ubicación
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permiso denegado", "No se ha otorgado permiso para acceder a la ubicación");
        return;
      }

      // Configurar seguimiento en tiempo real
      const locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 1000, // Tiempo mínimo en ms entre actualizaciones
          distanceInterval: 1, // Distancia mínima en metros entre actualizaciones
        },
        (newLocation) => {
          const { latitude, longitude } = newLocation.coords;

          // Actualizar posición para animación en el mapa
          position.timing({ latitude, longitude, useNativeDriver: false }).start();
          setLocation(newLocation.coords);
          setRegion((prevRegion) => ({
            ...prevRegion,
            latitude,
            longitude,
          }));
        }
      );

      // Limpiar la suscripción cuando el componente se desmonte
      return () => locationSubscription.remove();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        region={region} 
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        {location && (
          <Marker.Animated
            coordinate={position}
            title="Mi ubicación"
            description="Ubicación en tiempo real mientras te mueves"
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
