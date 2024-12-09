import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "../screens/HomeScreen";
import { ProductsScreen } from "../screens/ProductsScreen";

const StackNavigator = stackNavigatorFactory();

export const Navigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4F46E5",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Store Home"
                }}
            />
            <StackNavigator.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    title: "Our Products"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);