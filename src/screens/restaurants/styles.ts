import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f8',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemCoordinates: {
        fontSize: 14,
        color: '#777',
    }
});
