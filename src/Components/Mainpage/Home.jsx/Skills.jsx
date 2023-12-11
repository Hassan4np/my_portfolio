


import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
    return (
        <div className="py-10" id='skills'>
            <h1 className="text-5xl font-bold text-center py-10 text-[#40F8FF]">MY SKILLS</h1>
            <div className=" md:flex gap-3 mb-2">
                <div className="border py-2 px-5 rounded-lg flex-1 ">
                    <h2 className="pb-2 text-xl font-bold uppercase">HTML5</h2>
                    <ProgressBar completed={93} animateOnRender='true' labelClassName="hasan" transitionDuration='2s' transitionTimingFunction='ease-in' bgColor='#40F8FF' />
                </div>
                <div className="border py-2 px-5 rounded-lg flex-1">
                    <h2 className="pb-2 text-xl font-bold uppercase">CSS3</h2>
                    <ProgressBar completed={90} animateOnRender='true' labelClassName="hasan" transitionDuration='2s' transitionTimingFunction='ease-in' bgColor='#7B66FF' />
                </div>
               
            </div>
            <div className=" md:flex gap-3 mb-2">
                <div className="border py-2 px-5 rounded-lg flex-1 ">
                    <h2 className="pb-2 text-xl font-bold uppercase">tailwindcss</h2>
                    <ProgressBar completed={95} animateOnRender='true' labelClassName="hasan" transitionDuration='2s' transitionTimingFunction='ease-in' bgColor='#7B66FF' />
                </div>
                <div className="border py-2 px-5 rounded-lg flex-1">
                    <h2 className="pb-2 text-xl font-bold uppercase">JavaScript</h2>
                    <ProgressBar completed={75} animateOnRender='true' labelClassName="hasan" transitionDuration='2s' transitionTimingFunction='ease-in' bgColor='#C5FFF8' />
                </div>          
            </div>
            <div className=" md:flex gap-3 mb-2">
                <div className="border py-2 px-5 rounded-lg flex-1 ">
                    <h2 className="pb-2 text-xl font-bold uppercase">React JS</h2>
                    <ProgressBar completed={85} animateOnRender='true' labelClassName="hasan" transitionDuration='2s' transitionTimingFunction='ease-in' bgColor='#C5FFF8' />
                </div>
                <div className="border py-2 px-5 rounded-lg flex-1">
                    <h2 className="pb-2 text-xl font-bold uppercase">mongodb</h2>
                    <ProgressBar completed={70} animateOnRender='true' labelClassName="hasan" transitionDuration='2s' transitionTimingFunction='ease-in' bgColor='#40F8FF' />
                </div>          
            </div>
        </div>
    );
};

export default Skills;