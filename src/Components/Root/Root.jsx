import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";



const Root = () => {
    return (
        <div className="max-w-[1300px] mx-auto lg:p-6">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;