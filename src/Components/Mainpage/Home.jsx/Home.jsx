import About from "./About";
import Eduction from "./Eduction";
import Bannar from "./Global/Bannar";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Eduction  id="education"></Eduction>
            <Skills></Skills>
            
        </div>
    );
};

export default Home;