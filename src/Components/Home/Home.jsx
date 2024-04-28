import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import ModernPainting from "./ModernPainting";

const Home = () => {
    const allArt = useLoaderData();
    // console.log(sixcards);
    const firstSixArt = allArt.slice(0, 6);
    // console.log(firstSixArt);

    return (
        <div>
            <Helmet>
                <title>Appon Printing & Drawing</title>
            </Helmet>
            <Slider></Slider>
            <div className="container mx-auto">
                <h1 className="text-4xl text-center my-12 uppercase font-extrabold">Craft items</h1>
                <div className="grid grid-cols-3 gap-6 mb-20">
                    {firstSixArt.map((art) => (
                        <HomeCard key={art._id} art={art}></HomeCard>
                    ))}
                </div>
            </div>
            <ModernPainting></ModernPainting>
        </div>
    );
};

export default Home;
