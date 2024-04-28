import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
    const loadedArt = useLoaderData();
    // const { image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus } = loadedArt;
    console.log(loadedArt);
    const [subcategory, setSubcategory] = useState("Landscape Painting");
    const [rates, setRates] = useState(5);
    const [customize, setCustomize] = useState("yes");
    const [stoke, setStoke] = useState("In stock");

    const categoryBtn = (e) => {
        setSubcategory(e.target.value);
    };

    const ratesBtn = (e) => {
        setRates(e.target.value);
    };

    const customizeBtn = (e) => {
        setCustomize(e.target.value);
    };

    const stokeBtn = (e) => {
        setStoke(e.target.value);
    };

    const updateArtBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.itemImage.value;
        const item_name = form.itemName.value;
        const subcategory_Name = subcategory;
        const short_description = form.shortDescription.value;
        const price = form.price.value;
        const rating = rates;
        const customization = customize;
        const processing_time = form.itemProcessTime.value;
        const stockStatus = stoke;
        const artItem = { image, item_name, subcategory_Name, short_description, price, rating, customization, processing_time, stockStatus };
        fetch(`http://localhost:5000/allart/${loadedArt._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(artItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success("Updated successfully");
                }
            });
        form.reset();
    };

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Update Craft Item | Appon Painting & Drawing</title>
            </Helmet>
            <div className="flex justify-center items-center my-24">
                <div className="bg-gray-600 p-8 rounded-3xl text-white w-1/2">
                    <h1 className="text-center text-4xl font-semibold uppercase mb-6">Update</h1>
                    <form onSubmit={updateArtBtn}>
                        <div className="grid grid-cols-2 gap-5 mb-5">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Item Name</span>
                                </div>
                                <input type="text" name="itemName" placeholder="Type Name" className="input input-bordered w-full text-orange-700" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Image</span>
                                </div>
                                <input type="text" name="itemImage" placeholder="(use image URL)" className="input input-bordered w-full text-orange-700" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Price</span>
                                </div>
                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full text-orange-700" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Processing Time</span>
                                </div>
                                <input type="text" name="itemProcessTime" placeholder="Type processing time" className="input input-bordered w-full text-orange-700" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Subcategory Name</span>
                                </div>
                                <select className="select select-bordered text-orange-700" onChange={categoryBtn}>
                                    {/* <option disabled selected>
                                        Painting and Drawing
                                    </option> */}
                                    <option>Landscape Painting</option>
                                    <option>Portrait Drawing</option>
                                    <option>Watercolour Painting</option>
                                    <option>Oil Painting</option>
                                    <option>Charcoal Sketching</option>
                                    <option>Cartoon Drawing</option>
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Customization</span>
                                </div>
                                <select className="select select-bordered text-orange-700" onChange={customizeBtn}>
                                    {/* <option disabled selected>
                                        Painting and Drawing
                                    </option> */}
                                    <option>yes</option>
                                    <option>no</option>
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Stock Status</span>
                                </div>
                                <select className="select select-bordered text-orange-700" onChange={stokeBtn}>
                                    {/* <option disabled selected>
                                        Painting and Drawing
                                    </option> */}
                                    <option>In Stock</option>
                                    <option>Out of Stock</option>
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Rating</span>
                                </div>
                                <select className="select select-bordered text-orange-700" onChange={ratesBtn}>
                                    {/* <option disabled selected>
                                        Painting and Drawing
                                    </option> */}
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </select>
                            </label>
                        </div>
                        <label className="form-control w-full mb-5">
                            <div className="label">
                                <span className="label-text text-white">Short Description</span>
                            </div>
                            <input type="text" name="shortDescription" placeholder="Type short description" className="input input-bordered w-full text-orange-700" />
                        </label>
                        <input type="submit" value="Update" className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white w-full"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
