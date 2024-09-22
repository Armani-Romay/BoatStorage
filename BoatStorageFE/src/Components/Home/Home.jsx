import React, {useEffect} from 'react'
import './Home.css'

//imported assets
// import Video from "../../Assets/Load.mov"
import Video2 from "../../Assets/WaterVideo3.mp4"

//imported icons
import { AiOutlineSwapRight } from "react-icons/ai";

//imported images
import image1 from "../../Assets/boat.jpg"
import image2 from "../../Assets/rv1.jpg"

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (
    <div className="Home">
        <div className="videoBg">
            <video src={Video2} autoPlay loop muted></video>
        </div>
        <div className="sectionText">
                <h1 data-aos="fade-up">We'll Hold On To Your Stuff!</h1>
                <p data-aos="fade-up">
                    A Space for Boats, RV's, and Personal Vehicles
                </p>
                <button className="btn flex" data-aos="fade-up">
                    GET STARTED <AiOutlineSwapRight className="icon"/>
                </button>
        </div>

        <div className="popularPlaces">
            <div className="content">
                <h3 data-aos="fade-up">Popular Options</h3>
                <div className="images flex" data-aos="fade-up">
                    <img src={image1} alt="Popular options" /> 
                    <img src={image2} alt="Popular options" />
                </div>
            </div>
        </div>
    </div>
    );
};
export default Home