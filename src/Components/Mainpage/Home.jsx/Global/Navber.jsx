
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo/logo.png"
import { HashLink } from 'react-router-hash-link';

const Navber = () => {
    const links = <>

        <NavLink to="/"> <li className="text-base text-black mr-1 font-semibold "><a >Home</a></li></NavLink>
        <HashLink to="#about"> <li className="text-base text-black mr-1 font-semibold "><a>About</a></li></HashLink>
        <HashLink to="#service"> <li className="text-base text-black mr-1 font-semibold "><a>Service</a></li></HashLink>
        <HashLink to="#skills"> <li className="text-base text-black mr-1 font-semibold "><a>Skills</a></li></HashLink>
        <HashLink to="#portfolio"> <li className="text-base text-black mr-1 font-semibold "><a>Portfolo</a></li></HashLink>
        <HashLink to="#contact"> <li className="text-base text-black mr-1 font-semibold "><a >Contact</a></li></HashLink>


    </>
    return (
        <div>
            <nav className="navbar bg-base-100 shadow-xl " >
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
            </nav>
        </div>
    );
};

export default Navber;