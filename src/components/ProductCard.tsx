import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Product } from '../types/product';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <gridLayout style={styles.card} rows="auto, auto" columns="auto, *">
            <image
                src={product.image}
                style={styles.image}
                row="0"
                col="0"
                rowSpan="2"
            />
            <label 
                text={product.name}
                className="font-bold"
                style={styles.title}
                row="0"
                col="1"
            />
            <label 
                text={"$" + product.price}
                className="text-green-600"
                style={styles.price}
                row="1"
                col="1"
            />
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        margin: 5,
        elevation: 2,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
    },
    price: {
        fontSize: 14,
    },
});