import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./ProductCard.style/"

const ProductCard = ({products}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{uri: products.imgURL}}/>
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{products.title}</Text>
                    <Text style={styles.price}>{products.price}</Text>
                    {products.inStock == true ? (<></>) : (<Text style={styles.inStock}>STOKTA YOK</Text>)}
                </View>
        </TouchableOpacity>
    );
};

export default ProductCard;