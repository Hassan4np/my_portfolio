import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo/logo.png"

const Navber = () => {
    const links = <>

        <NavLink to="/"> <li className="text-base text-black mr-1 font-semibold "><a >Home</a></li></NavLink>
        <NavLink to="#"> <li className="text-base text-black mr-1 font-semibold "><a>About</a></li></NavLink>
        <NavLink to="#"> <li className="text-base text-black mr-1 font-semibold "><a>Service</a></li></NavLink>
        <NavLink to="#"> <li className="text-base text-black mr-1 font-semibold "><a>Skills</a></li></NavLink>
        <NavLink to="#"> <li className="text-base text-black mr-1 font-semibold "><a>Portfolo</a></li></NavLink>
        <NavLink > <li className="text-base text-black mr-1 font-semibold "><a href="#education">Contact</a></li></NavLink>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg " >
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                 <img className="w-16 h-16" src={logo} alt="logo" />
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;