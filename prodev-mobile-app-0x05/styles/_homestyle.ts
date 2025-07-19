import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    searchGroup: {
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: 'white',
    },
    searchFormGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 20,
    },
    searchControlGroup: {
        flex: 1,
    },
    searchFormText: {
        fontSize: 16,
        color: '#333',
    },
    searchControl: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    searchButton: {
        backgroundColor: '#34967C',
        borderRadius: 20,
        padding: 8,
        marginLeft: 10,
    },
    filterGroup: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    filterContainer: {
        alignItems: 'center',
        marginRight: 20,
        width: 60,
    },
    listingContainer: {
        flex: 1,
        padding: 16,
    },
    paginationContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    showMoreButton: {
        backgroundColor: '#34967C',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
    },
    showMoreButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});