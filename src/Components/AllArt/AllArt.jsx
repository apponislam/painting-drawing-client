import { useLoaderData } from "react-router-dom";
import HomeCard2 from "../Home/HomeCard2";
import { Helmet } from "react-helmet-async";

const AllArt = () => {
    const allart = useLoaderData();

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>All Craft Items | Appon Painting & Drawing</title>
            </Helmet>
            <h1 className="text-2xl md:text-4xl text-center my-12 uppercase font-extrabold">All Craft items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20 mx-3 xl:mx-0">
                {allart.map((art) => (
                    <HomeCard2 key={art._id} art={art}></HomeCard2>
                ))}
            </div>
        </div>
    );
};

export default AllArt;
