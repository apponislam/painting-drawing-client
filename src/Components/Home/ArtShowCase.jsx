const ArtShowCase = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center my-12 uppercase font-extrabold">Top Art Showcase</h1>
            <div className="grid grid-cols-3 my-20">
                <div>
                    <img className="w-full hover:scale-105 mb-7" src="/SpiritualArt.png" />
                    <h1 className="font-medium text-2xl">Spiritual Art Spiritual Art</h1>
                    <p className="font-extralight text-xl">Price : $1,350.00</p>
                </div>
            </div>
        </div>
    );
};

export default ArtShowCase;
