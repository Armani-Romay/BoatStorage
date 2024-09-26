import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Subscribe.css';
import image1 from "../../Assets/Sub.jpg";
import video1 from "../../Assets/Load.mov"

import Aos from 'aos'
import 'aos/dist/aos.css'


const Subscribe = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (
        <div className="subscribe section container">
            <div className="sectionContainer">
                <div className="imageContainer">
                    {/* <img src={image1} alt="Div Image" /> */}
                    <video src={video1} autoPlay loop muted></video>
                </div>
                <div className="textDiv" data-aos="fade-up">
                    <h4>Let's get things started!</h4>
                    <p>
                        If you'd like to hear more, have any questions,
                        or would like to get a quote, let's get things rolling.
                    </p>
                    <Link to="/signup">
                        <button className="btn" data-aos="fade-up">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
