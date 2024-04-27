import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const artDetails = useLoaderData();
    console.log(artDetails);
    return (
        <div>
            <h1>ViewDetails</h1>
        </div>
    );
};

export default ViewDetails;
