import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className=" text-center lg:flex justify-between items-center shadow">
            <div><img src="https://i.ibb.co/bQW2bdj/Logo.png" alt="" /></div>
            <div>
                <ol className=" flex gap-6 text-2xl font-medium  justify-center">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default NavBar;