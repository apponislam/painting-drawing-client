import { Helmet } from "react-helmet-async";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Appon Printing & Drawing</title>
            </Helmet>
            <Slider></Slider>
            <h1>This is home for</h1>
        </div>
    );
};

export default Home;
