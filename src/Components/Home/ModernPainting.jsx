import { Typewriter } from "react-simple-typewriter";

const ModernPainting = () => {
    return (
        <div className="container mx-auto">
            <div className="my-20">
                <h1 className="text-4xl text-center mb-12 uppercase font-extrabold">
                    <Typewriter cursor cursorBlinking delaySpeed={1000} deleteSpeed={25} loop={0} typeSpeed={75} words={["Impressionism Art", "Expressionism Art", "Abstract Art"]} />
                </h1>
                <div className="grid grid-cols-3 gap-6">
                    <div className="relative">
                        <img className="w-full object-cover" src="/impressionismArt.png" />
                        <div className="absolute bottom-0 w-full bg-[#9b5273] p-7">
                            <h1 className="text-3xl text-white font-medium mb-9">Impressionism Art</h1>
                            <p className="text-xl text-white font-extralight">By Appon</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-full object-cover" src="/expressionismArt.png" />
                        <div className="absolute bottom-0 w-full bg-[#c04137] p-7">
                            <h1 className="text-3xl text-white font-medium mb-9">Expressionism Art</h1>
                            <p className="text-xl text-white font-extralight">By Appon</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-full object-cover" src="/abstractArt.png" />
                        <div className="absolute bottom-0 w-full bg-[#5999a5] p-7">
                            <h1 className="text-3xl text-white font-medium mb-9">Abstract Art</h1>
                            <p className="text-xl text-white font-extralight">By Appon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernPainting;
