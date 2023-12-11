import About from "./About";
import Contact from "./Contact";
import Eduction from "./Eduction";
import Experience from "./Experience";
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
            <Experience></Experience>
            <Skills></Skills>
            <Servce></Servce>
            <Portfolio></Portfolio>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;