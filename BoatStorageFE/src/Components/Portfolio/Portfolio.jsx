import React, {useEffect} from 'react'
import './Portfolio.css'

//imported assets
import icon1 from "../../Assets/Camera.png"
import icon2 from "../../Assets/Proximity2.png"
import icon3 from "../../Assets/clock.webp"
import image1 from "../../Assets/light.jpg"

import Aos from 'aos'
import 'aos/dist/aos.css'


const Portfolio = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    return (
        <div className = "portfolio section container">
            <div className="sectionContainer grid">
                <div className="leftContent">

                    <div className="sectionHeading">
                        <h3 data-aos="fade-up">Why Choose Us?</h3>
                        <p data-aos="fade-up">
                            Security, Professionalism, Proximity to the Water
                        </p>
                    </div>

                    <div className="grid">
                        <div className="singlePortfolio flex" data-aos="fade-up">
                            <div className="iconDiv">
                                <img src={icon1} alt="Security PNG" data-aos="fade-up"/>
                            </div>

                            <div className="information">
                                <h4 className ="reasons" >Security</h4>
                                <p className ="reasons">
                                    When you entrust your property into our care, 
                                    you can rest assured that our 24/7 surveillance and security systems are keeping 
                                    your things safe. Restricted access codes are used to limit 
                                    who can enter the facility...
                                </p>
                            </div>
                        </div>
                        <div className="singlePortfolio flex" data-aos="fade-up">
                            <div className="iconDiv">
                                <img src={icon2} alt="Security PNG" />
                            </div>

                            <div className="information">
                                <h4 className ="reasons">Convenient Location</h4>
                                <p className ="reasons">
                                    Our location is ideal for those looking for 
                                    close proximity to the nearest recreation spots.
                                    With more than __ boat ramps within a 10 mile radius, 
                                    __ camp grounds within __ miles... Romay Storage allows 
                                    you to pick up your things and immediately jump into the fun!
                                </p>
                            </div>
                        </div>
                        <div className="singlePortfolio flex" data-aos="fade-up">
                            <div className="iconDiv">
                                <img src={icon3} alt="Security PNG" />
                            </div>

                            <div className="information">
                                <h4 className ="reasons">24Hr Access</h4>
                                <p className ="reasons">
                                    Our location is ideal for those looking for 
                                    close proximity to the nearest recreation spots.
                                    With more than __ boat ramps within a 10 mile radius, 
                                    __ camp grounds within __ miles... Romay Storage allows 
                                    you to pick up your things and immediately jump into the fun!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="rightContent" data-aos="fade-up">
                    <img src={image1} alt="Customer support" />
                </div>
            </div>
        </div>
    )
};
export default Portfolio