
import pic from "../../../../assets/logo/hassan1.png"
import "./Bannar.css"

const Bannar = () => {

    const handleDownload = () => {
        // Replace 'YOUR_GOOGLE_DRIVE_LINK_HERE' with your actual Google Drive link
        // const cvDownloadLink = 'https://drive.google.com/drive/u/1/folders/1diJrjgtvx_JyyHvhSCFtEOhDRBG-hTw3';
        const cvDownloadLink = 'https://drive.google.com/file/d/1h8PHcTOWpKHWGGqsZnc-X3ATXWWL8YJj/view?usp=sharing';
    
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = cvDownloadLink;
        link.target = '_blank'; // Open in a new tab
        link.download = 'resume.pdf'; // Set the file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the link element after download
      };

    return (
        <div className="mb-10">
            <div className={`hero min-h-screen  bg-[#EDF2EE] `}>
                <div className=""></div>
                <div className="hero-content md:flex-row flex-col ">
                    <div className="md:w-1/2  px-6">
                        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">I'm Hassan Ali</h1>
                        <p className="mb-5 text-xl md:text-3xl lg:text-4xl">I am a Web developer. As a Web developer, I design and implement interactive.</p>
                        <button onClick={handleDownload} className="btn text-[14px] md:text-lg font-medium bg-[#40F8FF]">Download Resume</button>
                    </div>
                    <div className="md:w-1/2 px-6 ">
                        <img className= " h-[300px] w-[300px] rainbow md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px] rounded-xl " src={pic} alt="pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;