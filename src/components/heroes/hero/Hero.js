function Hero(props) {
    return (
        <div>
            <section className="bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                
                <div className="mt-6 w-fit mx-auto">
                    <img src={props.thumbnail} className="rounded-full w-28 " alt="profile picture" />
                </div>

                <div className="mt-8 ">
                    <h2 className="text-white font-bold text-2xl tracking-wide">{props.name}</h2>
                </div>
                

                <div className="h-1 w-full bg-black mt-8 rounded-full">
                    <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
                </div>

            </section>
        </div>
    )
}

export default Hero
