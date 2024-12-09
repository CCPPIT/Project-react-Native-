import { Dialogs } from '@nativescript/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../navigation/types";
import { Button } from '../components/Button';

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    const handleAlert = () => {
        Dialogs.alert("Welcome to our store!");
    };

    const navigateToProducts = () => {
        navigation.navigate("Products");
    };

    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Welcome to Our Store
            </label>
            <Button 
                text="View Store Info"
                onTap={handleAlert}
            />
            <Button 
                text="Browse Products"
                onTap={navigateToProducts}
            />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
    },
});