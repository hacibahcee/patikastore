import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        backgroundColor: '#eceff1',
        borderRadius: 10,
    },
    inner_container:{
        marginTop: 5,
    },
    image: {
        borderRadius: 10,
        resizeMode: "contain",
        height: Dimensions.get('window').height / 4,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black",

    },
    price: {
        fontWeight: "bold",
        fontSize: 16,
        color: "grey",
        
    },
    inStock: {
        color: "red",
        fontWeight: "bold",
        fontSize: 16,
    }

});