import Image from "next/image"

export default function Page () {
    const DATA_URL ="https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

    return (
        <div className="p-4 bg-green-300">
            <header className="border-4 border-black p-4 mb-4">
                <h1>Welcome to my product page</h1>
                    <button 
                    className="border-neutral-200 bg-black px-6"
                    //onClick 
                    >
                        Fetch products!
                    </button>
            </header>
            sup
        </div>
 );
}

