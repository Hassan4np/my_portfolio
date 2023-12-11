import About from "./About";
import Eduction from "./Eduction";
import Bannar from "./Global/Bannar";
import Portfolio from "./Portfolio";
import Servce from "./Servce";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Eduction  id="education"></Eduction>
            <Skills></Skills>
            <Servce></Servce>
            <Portfolio></Portfolio>
            
        </div>
    );
};

export default Home;