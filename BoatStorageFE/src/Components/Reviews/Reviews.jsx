import React, {useEffect} from 'react'
import './Reviews.css'

//imported icons
import { AiFillStar } from "react-icons/ai";

//imported assets
import image1 from "../../Assets/customer1.jpeg"
import image2 from "../../Assets/customer2.jpeg"
import image3 from "../../Assets/customer3.jpeg"
import video1 from "../../Assets/Load2.mov"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (
        <div className="reviews section container">
            <div className="sectionContainer grid">
                <div className="textDiv" >
                    <span className="redText" data-aos="fade-up">From Our Clients</span>
                    <h3 data-aos="fade-up">Real experiences from our customers</h3>
                    <p data-aos="fade-up">
                        By choosing us as their storage Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore praesentium dolore quod sed in. Architecto error quibusdam repudiandae commodi sapiente pariatur nam,
                        quis voluptatum doloremque aut incidunt earum quod corrupti!
                    </p>

                    <span className="stars flex" data-aos="fade-up">
                        <AiFillStar className = "icon"/>
                        <AiFillStar className = "icon"/>
                        <AiFillStar className = "icon"/>
                        <AiFillStar className = "icon"/>
                        <AiFillStar className = "icon"/>
                    </span>

                    <div className="clientImages flex" data-aos="fade-up">
                        <img src={image1} alt="Customer" />
                        <img src={image2} alt="Customer" />
                        <img src={image3} alt="Customer" />
                    </div>
                </div>
                <div className="imgDiv" data-aos="fade-up">
                    <video src={video1} autoPlay loop muted></video>
                </div>
            </div>

        </div>
    )
}
export default Reviews