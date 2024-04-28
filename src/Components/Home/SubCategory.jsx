import { useLoaderData } from "react-router-dom";
import SubCategoryBox from "./SubCategoryBox";

const SubCategory = () => {
    const allArt = useLoaderData();

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl text-center my-12 uppercase font-extrabold">Subcategory items</h1>
            <div className="grid grid-cols-3 gap-6 mb-20">
                {allArt.map((art) => (
                    <SubCategoryBox key={art._id} art={art}></SubCategoryBox>
                ))}
            </div>
        </div>
    );
};

export default SubCategory;
