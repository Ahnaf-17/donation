// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto">
            <div className="flex-1">
                <img src="https://i.ibb.co/m8XV6FM/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="md:menu-horizontal lg:menu-horizontal px-1 gap-5">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }>Home</NavLink></li>
                    <li><NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }>Donation</NavLink></li>
                    <li><NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }>Statistics</NavLink></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;