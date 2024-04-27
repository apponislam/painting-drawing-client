import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="h-screen flex items-center justify-center">
            <div>
                <h1 className="text-9xl mb-10">Opps</h1>
                <p className="text-center text-2xl mb-5">
                    {error.status || 404} - {error.statusText || "Page not found"}
                </p>
                <div className="flex items-center justify-center">
                    <Link to="/">
                        <button className="btn bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;
