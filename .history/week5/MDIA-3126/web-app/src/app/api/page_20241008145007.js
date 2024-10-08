"use client"

import { useState } from 'react';


export default function Page () {
    const DATA_URL ="https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
    const [data, setData] = useState(null);

    async function fetchData () {
        const response = await fetch(DATA_URL);

        const data = await response.json();
        setData(data);
    }

    return (
        <div className="p-4 bg-green-300">
            <header className="border-4 border-black p-4 mb-4">
                <h1>Welcome to my product page</h1>
                    <button 
                    className="bg-white px-6"
                    //onClick 
                    >
                        Fetch products!
                    </button>
            </header>
            <div className="border-4 border-black p-4 mb-4">
                <ul>
                    Products
                </ul>
            </div>
        </div>
 );
}

