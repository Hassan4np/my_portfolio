import About from "./About";
import Contact from "./Contact";
import Eduction from "./Eduction";
import Bannar from "./Global/Bannar";
import Portfolio from "./Portfolio";
import Servce from "./Servce";
import Skills from "./Skills";


const Home = () => {
    return (
        <div id="home">
            <Bannar></Bannar>
            <About id='about'></About>
            <Eduction  id="education"></Eduction>
     
            <Skills></Skills>
            <Servce></Servce>
            <Portfolio></Portfolio>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;