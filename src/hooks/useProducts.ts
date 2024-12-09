import { useState, useEffect } from 'react';
import { Product } from '../types/product';

export function useProducts() {
    const [products] = useState<Product[]>([
        {
            id: 1,
            name: "Wireless Headphones",
            price: 99.99,
            image: "~/assets/headphones.png"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 199.99,
            image: "~/assets/watch.png"
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            price: 79.99,
            image: "~/assets/speaker.png"
        }
    ]);

    return products;
}