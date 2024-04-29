import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import ModernPainting from "./ModernPainting";
import ArtShowCase from "./ArtShowCase";
import HomeCard2 from "./HomeCard2";

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
            <div className="container md:mx-auto">
                <h1 className="text-2xl md:text-4xl text-center my-12 uppercase font-extrabold">Craft items</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20 mx-3 xl:mx-0">
                    {firstSixArt.map((art) => (
                        <HomeCard2 key={art._id} art={art}></HomeCard2>
                    ))}
                </div>
            </div>
            <div className="container md:mx-auto">
                <h1 className="text-2xl md:text-4xl text-center my-12 uppercase font-extrabold">Art And Craft Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20 mx-3 xl:mx-0">
                    {firstSixArt.map((art) => (
                        <HomeCard key={art._id} art={art}></HomeCard>
                    ))}
                </div>
            </div>
            <div className="mx-3 xl:mx-0">
                <ModernPainting></ModernPainting>
                <ArtShowCase></ArtShowCase>
            </div>
        </div>
    );
};

export default Home;
