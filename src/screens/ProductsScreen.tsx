import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../navigation/types";
import { ProductList } from '../components/ProductList';
import { Button } from '../components/Button';

type ProductsScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Products">,
};

export function ProductsScreen({ navigation }: ProductsScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-xl font-bold mb-4">Our Products</label>
            <ProductList />
            <Button 
                text="Back to Home"
                onTap={() => navigation.goBack()}
            />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 20,
    },
});