import { signOut, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../firebase/firebase.config";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setLoading } = useContext(AuthContext);
    const nvaigate = useNavigate();

    const signUpBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const imagelink = e.target.link.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, imagelink, email, password);

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            toast.error("Password must contain at least one uppercase and one lowercase letter");
            return;
        }

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: imagelink,
                })
                    .then(() => {
                        console.log("profile updated successfully");
                        toast.success("registered successfully");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                signOut(auth)
                    .then(() => {
                        console.log("logged out after registration");
                        nvaigate("/login");
                        // toast.success("registered successfully");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error.message);
                toast.error("registered failed");
                setLoading(false);
            });
    };

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Sign Up | Appon Painting & Drawing</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen">
                <div className="hero-content flex-col w-full md:w-3/4 lg:w-1/2 2xl:w-2/4">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold">Sgin Up Page</h1>
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-gray-50 rounded-2xl">
                        <form className="card-body p-4 pb-2 md:p-8 md:pb-2" onSubmit={signUpBtn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input type="text" placeholder="Paste your image link" name="link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered w-full" required />
                                    <div onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-2 -translate-x-2/4 -translate-y-2/4">
                                        <FaEye />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-1">
                                <button type="submit" className="btn btn-primary bg-[#4b87fd] border-[#4b87fd] hover:bg-[#0356f9] text-white">
                                    Register
                                </button>
                            </div>
                        </form>
                        <p className="pl-4 md:pl-8 pb-6 label-text-alt">
                            Already have an account? Please
                            <span className="link link-hover text-[#0356f9]">
                                <Link to="/login"> Sign In</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
