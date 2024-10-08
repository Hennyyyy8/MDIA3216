"use client"

import { useState } from 'react';


export default function Page () {
    const DATA_URL ="https://pokeapi.co/api/v2/pokemon/ditto";
    const [data, setData] = useState(null);

    async function fetchData () {
        const response = await fetch(DATA_URL);
        console.log(response);
        const data = await response.json();
        setData(data);
        console.log(data);
    }

    const DisplayProducts = () => {
        if(data) {
            let productList =[];
            data.forEach((product, index) => 
                    productList.push(
                <li ley={index}>{product.name}</li>
            ))
        }

        if (data) {
            return (
                <div className="border-4 border-black p-4 mb-4">
                <ul>
                    Products
                </ul>
            </div>
            )
        } else {
            return (
                <div className="border-4 border-black p-4 mb-4">
                    yuhhhhhhhh
            </div>
            )
        }
    }

    return (
        <div className="p-4 bg-green-300">
            <header className="border-4 border-black p-4 mb-4">
                <h1>Welcome to my product page</h1>
                    <button 
                    className="bg-white px-6"
                    onClick={fetchData}>
                        Fetch products!
                    </button>
            </header>
            <DisplayProducts/>
            </div>
 );
}

