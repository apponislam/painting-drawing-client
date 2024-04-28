import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const artDetails = useLoaderData();
    console.log(artDetails);

    const { image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus } = artDetails;

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-6 my-24">
                <div>
                    <img className="w-full h-full object-cover border rounded-2xl" src={image} />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-xl">
                        Name : <span className="font-medium">{item_name}</span>
                    </p>
                    <p>
                        Sub Category : <span className="text-green-500 font-bold">{subcategory_Name}</span>
                    </p>
                    <p className="border-y-2 py-3">Description : {short_description}</p>
                    <p className="font-bold text-xl">Price ${price}</p>
                    <p>
                        Rating : <span className="text-xl text-lime-500">{rating}</span>
                    </p>
                    <p>Customization : {customization}</p>
                    <p>Processing Time : {processing_time}</p>
                    <p>Stock : {stockStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
