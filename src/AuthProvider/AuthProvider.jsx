import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const githubSignIn = () => {
        setLoading(true);
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Ovserver On State Change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (mainUser) => {
            console.log(mainUser);
            setUser(mainUser);

            // if (successLogin) {
            //     setTimeout(() => {
            //         toast.success("Login successfully");
            //     }, 100); // Delay of 0 milliseconds
            //     console.log("Successfully logged");
            // }
            setLoading(false);
            // setSuccessLogin(false);
        });
        return () => unSubscribe();
    }, []);

    const info = { createUser, signInUser, user, googleSignIn, githubSignIn, logOut, loading, setLoading };

    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
