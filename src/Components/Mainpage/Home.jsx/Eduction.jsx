

const Eduction = () => {
    return (
        <div className="py-5  bg-[#EDF2EE] mt-5" id='education'>
            <h1 className="text-5xl font-bold text-center py-5 text-[#40F8FF]">Education</h1>
            <div className="ml-10 lg:flex gap-2 ">
                <div className=" border rounded-lg px-5 py-5 md:w-1/2  space-y-2 mb-2">
                    <h1 className="w-[100px] h-[40px] border p-2 font-bold  text-[#40F8FF] border-[#40F8FF] ">2015-2017</h1>
                    <h1 className="text-4xl font-bold">HSC</h1>
                    <h1 className="text-3xl w-full font-bold">Higher Secondary School Certificate</h1>
                   
                </div>
                <div className=" border rounded-lg px-5 py-5 md:w-1/2  space-y-2">
                    <h1 className="w-[100px] h-[40px] border p-2 font-bold  text-[#40F8FF] border-[#40F8FF] ">2017-2023</h1>
                    <h1 className="text-4xl font-bold">BSC</h1>
                    <h1 className="text-3xl  font-bold">Bachelor of Sciences</h1>
                   
                </div>
            </div>
        </div>
    );
};

export default Eduction;