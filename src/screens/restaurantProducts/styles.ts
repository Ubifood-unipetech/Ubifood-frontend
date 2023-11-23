import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f8', // Light grayish background for a modern look
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 2,       // A subtle line between items
        borderBottomColor: '#e0e0e0', 
    },
    formButton: {
        backgroundColor: 'black',
        width: '50%',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    textButton: {
        color: 'white',
        fontSize: 18,    // Slightly reduced font size for elegance
        fontWeight: '600',
        textTransform: 'uppercase', // Uppercase text for consistency

    },
    productsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    restaurantTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center',
    },
    itemContainer: {
      padding: 10,
      borderBottomWidth: 2,       // A subtle line between items
      borderBottomColor: '#e0e0e0', // Light gray line color
      marginBottom: 10,
      borderRadius: 5,            // Soft rounding of the corners
      elevation: 1,
      backgroundColor: 'white',   // White background
    },
  itemLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,            // Space between label and description
  },
  itemDesc: {
    fontSize: 14,
    color: '#777',             // Gray color for description
    marginBottom: 5,
    },
  ItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  buttonContainer: {
    alignItems: 'center',
  }
});