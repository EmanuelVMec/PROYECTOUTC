import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Cliente() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isVisibleOnTricimotero, setIsVisibleOnTricimotero] = useState(false);
  const [markerColor, setMarkerColor] = useState('blue');

  // Get real-time location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 1000, distanceInterval: 1 },
        (loc) => {
          setLocation({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
      );
    })();
  }, []);

  // Toggle visibility on Tricimotero map and marker color
  const handleVisibilityToggle = () => {
    setIsVisibleOnTricimotero(!isVisibleOnTricimotero);
    setMarkerColor(isVisibleOnTricimotero ? 'blue' : 'red'); // Change color based on visibility
    Alert.alert(
      'Visibility Changed',
      `Your location is now ${isVisibleOnTricimotero ? 'hidden' : 'visible'} on the Tricimotero map.`
    );

    // Optionally, you can implement an event system here to communicate with Tricimotero.tsx
    // For instance, using a state management library like Redux or Context API to pass visibility state.
  };

  if (!location) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {location && (
          <Marker
            coordinate={location}
            pinColor={markerColor} // Changes marker color based on visibility state
          />
        )}
      </MapView>

      <TouchableOpacity style={styles.button} onPress={handleVisibilityToggle}>
        <Text style={styles.buttonText}>
          {isVisibleOnTricimotero ? 'Hide from Tricimotero' : 'Show on Tricimotero'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: '20%',
    right: '20%',
    backgroundColor: '#FF007F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
