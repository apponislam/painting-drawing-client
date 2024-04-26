import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

const AlreadySignIn = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <ThreeCircles visible={true} height="100" width="100" color="#0356f9" ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass="" />
            </div>
        );
    }

    if (!user) {
        return children;
    }

    // if (successLogin) {
    //     toast.success("Login successfully");
    //     console.log("Successfully logged");
    // }

    return (
        <div>
            <Navigate to={location?.state ? location.state : "/"}></Navigate>
        </div>
    );
};

AlreadySignIn.propTypes = {
    children: PropTypes.node,
};

export default AlreadySignIn;
