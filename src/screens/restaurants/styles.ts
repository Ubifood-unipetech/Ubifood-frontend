import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f8',
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 2,       // A subtle line between items
        borderBottomColor: '#e0e0e0', 
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemCoordinates: {
        fontSize: 14,
        color: '#777',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 36,
        height: 36,
    }
});
