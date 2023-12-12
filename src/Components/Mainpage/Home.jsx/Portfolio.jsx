import p2 from "../../../assets/img/project5.jpeg"
import p3 from "../../../assets/img/project3.jpeg"
import p4 from "../../../assets/img/project4.jpeg"
import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <div className="py-10" id='portfolio'>
            <h1 className='text-5xl font-bold text-center text-[#40F8FF] py-10'>Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <a href="https://dinamic-password-react-project.web.app" target="_blank" rel="noopener noreferrer">
                    <div className="card card-compact  bg-base-100 shadow-xl mb-2" >
                        <figure><img src={p3} className="rounded-lg" alt="" /></figure>
                        <div className=" ml-12 py-2 md:ml-[70px] md:py-3">
                            <h2 className="text-3xl font-bold text-[#40F8FF]">Ecommerce</h2>
                            <p className="text-lg font-bold py-2 text-black"> Web Design & Development</p>
                        </div>
                    </div>
                </a>
                <a href="https://auth-project-4064d.web.app" target="_blank" rel="noopener noreferrer">
                    <div className="card card-compact  bg-base-100 shadow-xl mb-2">
                        <figure><img src={p4} className="rounded-lg" alt="" /></figure>
                        <div className=" ml-12 py-2 md:ml-[70px] md:py-3">
                            <h2 className="text-3xl font-bold text-[#40F8FF]">Assignment</h2>
                            <p className="text-lg py-2 font-bold text-black"> Web Design & Development</p>
                        </div>
                    </div>
                </a>
                <a href="https://b8a12-project.web.app" target="_blank" rel="noopener noreferrer">
                    <div className="card card-compact  bg-base-100 shadow-xl mb-2">
                        <figure><img src={p2} className="rounded-lg" alt="" /></figure>
                        <div className=" ml-12 py-2 md:ml-[70px] md:py-3">
                            <h2 className="text-3xl font-bold text-[#40F8FF]">Advertisement</h2>
                            <p className="text-lg font-bold  py-2 text-black"> Web Design & Development</p>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    );
};

export default Portfolio;