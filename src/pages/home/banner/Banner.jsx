const Banner = () => {
    return (
        <div className=" relative h-[60vh]">
            <img className="h-full  w-full" src="/src/assets/pexels-kerde-severin-5961235.jpg" alt="" />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="text-center bg-black bg-opacity-25 h-full p-5 md:py-24 md:px-32 space-y-4">
                    <h2 className="text-2xl md:text-5xl text-yellow-400 font-semibold">Game On, Legends!</h2>
                    <p className="text-yellow-100">Get ready for an exhilarating gaming experience like no other. Whether you're a seasoned esports pro or a casual gamer, this tournament is your chance to shine, compete, and earn bragging rights in the gaming world.</p>
                    <div className=" md:w-3/6 mx-auto">
                        <input className="px-4 py-2 bg-gray-50 rounded-l-lg w-3/5 md:w-3/4 " placeholder="search......" type="text" />

                        <button className="px-4 py-2 bg-gray-300 text-black hover:bg-neutral hover:text-white rounded-r-lg w-4/12 md:w-3/12" type="submit">Search</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;