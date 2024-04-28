import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const MyArtCard = ({ datas, art, setDatas2, setDatas }) => {
    const { _id, image, item_name, subcategory_Name, price, customization } = art;

    // console.log(setDatas2);

    const deleteArt = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "You want to delete the ArtCard?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Deleted Succesfully", {
                    icon: "success",
                });
                fetch(`http://localhost:5000/allart/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            console.log("Delete successfully");
                            const newData = datas.filter((data) => data._id !== id);
                            console.log(newData);
                            setDatas2(newData);
                            setDatas(newData);
                        }
                    });
            } else {
                swal("Delete Cenceled");
            }
        });
    };

    return (
        <div className="border p-5 rounded-2xl">
            <img className="w-full h-72 object-cover mb-4 border rounded-2xl" src={image} alt="" />
            <p className="mb-3 font-medium">{item_name}</p>
            <p className="mb-3">
                Price: <span className="font-bold">${price}</span>
            </p>
            <p className="mb-3">
                Sub Category: <span className="font-extrabold">{subcategory_Name}</span>
            </p>
            <p className="mb-3">
                Customization: <span className="font-extrabold">{customization}</span>
            </p>
            <div className="grid grid-cols-2 gap-3 mb-3">
                <Link to={`/update/${_id}`}>
                    <button className="btn w-full btn-primary bg-green-600 border-green-600 hover:bg-green-500 text-white">Update</button>
                </Link>
                <button onClick={() => deleteArt(_id)} className="btn w-full btn-primary bg-red-600 border-red-600 hover:bg-red-500 text-white">
                    Delete
                </button>
            </div>
            <Link to={`/details/${_id}`}>
                <button className="btn w-full btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">View Details</button>
            </Link>
        </div>
    );
};

MyArtCard.propTypes = {
    datas: PropTypes.array,
    art: PropTypes.object,
    setDatas: PropTypes.func,
    setDatas2: PropTypes.func,
};

export default MyArtCard;
