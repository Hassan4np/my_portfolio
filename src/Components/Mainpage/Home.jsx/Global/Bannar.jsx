import pic from "../../../../assets/logo/hassan1.png"
import "./Bannar.css"
const Bannar = () => {
    return (
        <div className="my-5">
            <div className={`hero min-h-screen  bg-[#EDF2EE] `}>
                <div className=""></div>
                <div className="hero-content md:flex-row flex-col ">
                    <div className="md:w-1/2">
                        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">I'm Hassan Ali</h1>
                        <p className="mb-5 text-2xl md:text-3xl lg:text-4xl">I am a Web developer. As a Web developer, I design and implement interactive.</p>
                        <button className="btn text-lg font-medium bg-[#40F8FF]">Download Resume</button>
                    </div>
                    <div className="md:w-1/2 ">
                        <img className= " h-[350px] w-full rainbow md:h-[420px] md:w-full lg:h-[600px] lg:w-full rounded-xl " src={pic} alt="pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;