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
    },
    formButton: {
        backgroundColor: '#4A90E2',  // Using a softer blue
        width: '100%',   // Using full width to be more touch-friendly
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,    // For a slight shadow effect
    },
    textButton: {
        color: 'white',
        fontSize: 18,    // Slightly reduced font size for elegance
        fontWeight: '500' // Not as bold, to look smoother
    },
    productsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    itemContainer: {
      padding: 10,
      borderBottomWidth: 1,       // A subtle line between items
      borderBottomColor: '#e0e0e0', // Light gray line color
      marginBottom: 10,
      backgroundColor: 'white',   // White background for each item
      borderRadius: 5,            // Soft rounding of the corners
      elevation: 1,               // Slight shadow for a 3D effect
  },
  itemLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,            // Space between label and description
  },
  itemDesc: {
      fontSize: 14,
      color: '#777',              // Gray color for description
  }
});