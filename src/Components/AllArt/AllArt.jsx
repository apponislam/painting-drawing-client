import { useLoaderData } from "react-router-dom";
import HomeCard from "../Home/HomeCard";

const AllArt = () => {
    const allart = useLoaderData();

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center my-12 uppercase font-extrabold">All Craft items</h1>
            <div className="grid grid-cols-3 gap-6 mb-20">
                {allart.map((art) => (
                    <HomeCard key={art._id} art={art}></HomeCard>
                ))}
            </div>
        </div>
    );
};

export default AllArt;
