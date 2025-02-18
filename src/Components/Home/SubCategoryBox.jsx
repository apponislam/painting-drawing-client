import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SubCategoryBox = ({ art }) => {
    // console.log(art);

    const { _id, image, item_name, subcategory_Name, price } = art;

    return (
        <div className="border p-5 rounded-2xl">
            <Helmet>
                <title>{subcategory_Name} || Appon Painting & Drawing</title>
            </Helmet>
            <img className="w-full h-72 object-cover mb-4 border rounded-2xl" src={image} alt="" />
            <p className="mb-3 font-medium">{item_name}</p>
            <p className="mb-3">
                Price: <span className="font-bold">${price}</span>
            </p>
            <p className="mb-3 flex gap-3 items-center">
                Sub Category: <span className="font-extrabold">{subcategory_Name}</span>
            </p>
            <Link to={`/details/${_id}`}>
                <button className="btn w-full btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">View Details</button>
            </Link>
        </div>
    );
};

SubCategoryBox.propTypes = {
    art: PropTypes.object,
};

export default SubCategoryBox;
