import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import products from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

const ProductList = () => {
    return (
        <FlatList
            style={styles.container}
            data={products}
            renderItem={({ item: product }) => (
                <ProductCard {...product}/>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginTop: 20,
      flex:1,
    },
});

export default ProductList;
