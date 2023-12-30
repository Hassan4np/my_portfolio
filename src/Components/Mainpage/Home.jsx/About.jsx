import logo from "../../../assets/logo/hassan2.png"

const About = () => {
    return (
        <div className=" flex md:flex-row  flex-col-reverse " id="about">
            <div className= " lg:w-1/3 text-center hidden lg:block ">
                <img src={logo} className=" object-cover w-[350px] rainbows  lg:w-[350px] bg-gray-500 rounded-xl h-[350px] md:text-center lg:ml-10" alt="" />
            </div>
            <div className="px-10 space-y-3 lg:w-2/3">
                <h1 className="text-5xl font-bold text-[#40F8FF] ">About us</h1>
                <p className="md:text-lg text-[14px]">I am a professional font end developer.As a Web developer, I design and implement interactive.I use my working html,css,tailwind,react,nodejs,express.js,mongodb. As a developer, my every project's unique design and responsive</p>
                <hr />
                <div>
                    <h5 className="text-[#40F8FF] font-bold text-base md:text-lg">Name: <span className="text-black font-medium text-[14px] md:text-base">Hassan Ali</span></h5>
                    <h5 className="text-[#40F8FF] font-bold text-base md:text-lg">Email: <span className="text-black font-medium text-[14px] md:text-base">hassan4np@gmail.com</span></h5>
                    <h5 className="text-[#40F8FF] font-bold text-base md:text-lg">Phone: <span className="text-black font-medium text-[14px] md:text-base">+8801723461543</span></h5>
                    <h5 className="text-[#40F8FF] font-bold text-base md:text-lg">Address: <span className="text-black font-medium text-[14px] md:text-base">Jashore,Bangladesh</span></h5>
                    <h5 className="text-[#40F8FF] font-bold text-base md:text-lg">Languages: <span className="text-black font-medium text-[14px] md:text-base">Bangla,English</span></h5>
                    <h5 className="text-[#40F8FF] font-bold text-base md:text-lg">Birthdate: <span className="text-black font-medium text-[14px] md:text-base">Oct,18,1999</span></h5>
                </div>
            </div>
        </div>
    );
}
export default About;