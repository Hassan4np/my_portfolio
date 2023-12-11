import p2 from "../../../assets/img/project5.jpeg"
import p3 from "../../../assets/img/project3.jpeg"
import p4 from "../../../assets/img/project4.jpeg"

const Portfolio = () => {
    return (
        <div className="py-10">
            <h1 className='text-5xl font-bold text-center text-[#40F8FF] py-10'>Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="card card-compact  bg-base-100 shadow-xl mb-2">
                    <figure><img src={p3} className="rounded-lg" alt="Shoes" /></figure>
                    <div className=" ml-12 py-2 md:ml-[70px] md:py-3">
                        <h2 className="text-3xl font-bold text-[#40F8FF]">Ecommerce</h2>
                        <p className="text-base font-medium text-black"> Web Design & Development</p>                     
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl mb-2">
                    <figure><img src={p4} className="rounded-lg" alt="Shoes" /></figure>
                    <div className=" ml-12 py-2 md:ml-[70px] md:py-3">
                        <h2 className="text-3xl font-bold text-[#40F8FF]">Assignment</h2>
                        <p className="text-base font-medium text-black"> Web Design & Development</p>                     
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl mb-2">
                    <figure><img src={p2} className="rounded-lg" alt="Shoes" /></figure>
                    <div className=" ml-12 py-2 md:ml-[70px] md:py-3">
                        <h2 className="text-3xl font-bold text-[#40F8FF]">Advertisement</h2>
                        <p className="text-base font-medium text-black"> Web Design & Development</p>                     
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;