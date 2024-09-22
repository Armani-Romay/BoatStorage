import React, {useEffect} from 'react'
import './Middle.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Middle = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (
        <div className="middle section">
            <div className="sectionContainer container">
                <div className="grid">
                    <span className="flex" data-aos="fade-up">
                        <h1>30+</h1>
                        <p>
                            Fullsize Spaces
                        </p>
                    </span>
                    <span className="flex" data-aos="fade-up">
                        <h1>400</h1>
                        <p>
                            Sqft of Space / per Spot
                        </p>
                    </span>
                    <span className="flex" data-aos="fade-up">
                        <h1>24Hr</h1>
                        <p>
                            Security 
                        </p>
                    </span>
                    <span className="flex" data-aos="fade-up">
                        <h1>4.8</h1>
                        <p>
                            Overall Rating
                        </p>
                    </span>

                </div>
            </div>
        </div>
    )
};

export default Middle