import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ButtonProps {
    text: string;
    onTap: () => void;
}

export function Button({ text, onTap }: ButtonProps) {
    return (
        <button
            className="bg-blue-500 text-white p-4 rounded-lg mb-4"
            style={styles.button}
            onTap={onTap}
        >
            {text}
        </button>
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 18,
        textAlignment: "center",
    },
});