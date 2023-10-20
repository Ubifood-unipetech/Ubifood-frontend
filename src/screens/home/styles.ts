import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // Align items at the top and bottom with space in between
    margin: 0,
  },

  formButton: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    zIndex: 1,
  },
  textButton: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%', // Make the map occupy the full width
    flex: 1,
  },
});

export const mapStyle = [
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "lightness": 80
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
