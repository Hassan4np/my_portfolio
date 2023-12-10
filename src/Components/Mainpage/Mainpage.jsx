import { Outlet } from "react-router-dom";
import Navber from "./Home.jsx/Global/Navber";
import Footer from "./Home.jsx/Global/Footer";


const Mainpage = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainpage;