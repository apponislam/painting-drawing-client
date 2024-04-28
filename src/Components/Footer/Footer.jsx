import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto">
                <footer className="footer p-10 text-white grid grid-cols-4">
                    <aside>
                        <p>
                            Appon Painting & Drawing
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title text-white opacity-100">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Painting</a>
                        <a className="link link-hover">Drawing</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white opacity-100">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-white opacity-100">Contact</h6>
                        <a href="tel:01722779803" className="link link-hover">
                            +880 1722 779803
                        </a>
                        <a href="mailto:11appon11@gmail.com" className="link link-hover">
                            11appon11@gmail.com
                        </a>
                        <a target="_blank" href="https://maps.app.goo.gl/ktAHsTSTxpp7pzKw8" className="link link-hover">
                            Fulbari Bus Stand, Dinajpur
                        </a>
                    </nav>
                </footer>
                <div className="flex items-center justify-between mt-6 py-6 border-t gap-4">
                    <p className="text-white">&copy; 2024 Your Appon P&D. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <p className="text-white">Follow Us : </p>
                        <a target="_blank" href="https://www.facebook.com/appon19/" className="text-white text-xl">
                            <FaFacebook />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/apponislam/" className="text-white text-xl">
                            <FaLinkedin />
                        </a>
                        <a target="_blank" href="https://twitter.com/Appon2003" className="text-white text-xl">
                            <FaXTwitter />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/apponislam/" className="text-white text-xl">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
