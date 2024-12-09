import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks/useProducts';

export function ProductList() {
    const products = useProducts();

    return (
        <scrollView>
            <stackLayout style={styles.container}>
                {products.map((product) => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                    />
                ))}
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        spacing: 10,
    },
});