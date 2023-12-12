import { HashLink } from "react-router-hash-link";


const Error = () => {
    return (
        <div>
            <h1 className="text-5xl text-center mt-20">Opps this data not fond</h1>
            <div className="text-center mt-10"> 
              <HashLink to="/">  <button className="btn btn-primary">Go home</button></HashLink>
            </div>
        </div>
    );
};

export default Error;