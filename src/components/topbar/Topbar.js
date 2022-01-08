import { useState, useEffect } from "react";

function Topbar() {

    const colors = [
        "from-indigo-500",
        "from-blue-500",
        "from-green-500",
        "from-red-500",
        "from-yellow-500",
        "from-pink-500",
        "from-purple-500",
    ];

    const [color, setColor] = useState(null);

    let randomNumber = Math.floor(Math.random() * colors.length);

    useEffect(() => {
        setColor(colors[randomNumber]);
    }, []);

    return (
        <div className="flex-grow">
            <section className={`flex justify-center items-center space-x-7 bg-gradient-to-b to-black ${color} h-40 text-white padding-8`}>
                <h1 className="font-medium text-3xl">Hello</h1>
            </section>
        </div>
    )
}

export default Topbar
