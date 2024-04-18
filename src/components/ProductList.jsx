import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import products from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

const ProductList = () => {
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={products}
            renderItem={({ item: product }) => (
                <ProductCard {...product} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        gap: 20
    },
});

export default ProductList;
