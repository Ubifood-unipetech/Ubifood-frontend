import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { mapStyle, styles } from './styles';
import { AuthContext } from '../../contexts/auth'
import MainHomeInput from "../../components/mainHomeInput";
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from "expo-location"
import axios from "axios";

export default function HomeScreen({ navigation }) {
  const { nome, user } = useContext(AuthContext)
  const { logout } = useContext(AuthContext)
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const { mapRegion, setMapRegion } = useContext(AuthContext);
  const { detailRestaurantProducts } = useContext(AuthContext);
  const [location, setLocation] = useState(AuthContext);

  function handleLogout() {
    logout(user)
  }

  function showRestaurant(obj) {
    setMapRegion({
      latitude: obj.coordinates.latitude,
      longitude: obj.coordinates.longitude,
      latitudeDelta: 0.0070,
      longitudeDelta: 0.0070,
    });
    detailRestaurantProducts(obj.id)
  }

  async function request() {
    let endpoint = `${process.env.BASEURL}/api/restaurants/`
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "Auhtorization": `Bearer ${user.access}`
      }
    };
    const response = await axios.get(endpoint, headers);
    setResponse(response.data.results);
    if (!mapRegion.latitude) {
      await Location.requestForegroundPermissionsAsync();
      let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest, maximumAge: 10000, timeout: 5000 });
      setMapRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.0070,
        longitudeDelta: 0.0070,
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    request();
  }, [])

  return (
    <View style={styles.container}>
      <MainHomeInput />
      <Text>Carregando...</Text>
      {!loading && <MapView style={styles.map}
        initialRegion={mapRegion}
        customMapStyle={mapStyle}
        showsUserLocation={true}
        followsUserLocation={true}
        minZoomLevel={18}
        maxZoomLevel={19}
        userLocationUpdateInterval={1000}
      >

        {response.map((obj, index) => (
          <Marker key={index}
            onPress={() => showRestaurant(obj)}
            coordinate={{
              latitude: obj.coordinates.coordinates[1],
              longitude: obj.coordinates.coordinates[0]
            }}>
          </Marker>))}

      </MapView>}
      <Pressable
        style={styles.formButton}
        onPress={handleLogout}
      >
        <Text style={styles.textButton}>sair</Text>
      </Pressable>
    </View>
  );
}