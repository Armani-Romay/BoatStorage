import React, { useState, useEffect } from 'react';
import './Questions.css';
import Accordian from './Accordian';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Questions = () => {
    const [active, setActive] = useState(
        'What is the largest sized boat I can store?'
    );
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (
        <div className="question section container">
            <div className="sectionHeading">
                <h3 data-aos="fade-up">Frequently Asked Questions</h3>
            </div>
            <div className="sectionContainer grid">
                <div className="accordian grid" data-aos="fade-up">
                    <Accordian 
                        title="What is the largest sized boat I can store?" 
                        desc="For inboard boats, the maxium length would be 40ft, while an outboard boat would be 38ft." 
                        active={active} 
                        setActive={setActive} 
                    />
                    <Accordian 
                        title="Where is the nearest boat ramp?" 
                        desc="The nearest boat ramp is located in the Anclote Park, about 5 miles away." 
                        active={active} 
                        setActive={setActive} 
                    />
                    <Accordian 
                        title="Are there any covered spots?" 
                        desc="We offer 10 covered spots, where they are made available with a premium charge." 
                        active={active} 
                        setActive={setActive} 
                    />
                </div>

                <div className="form">
                    <div className="sectionHeading">
                        <h4 data-aos="fade-up">Do you have any questions?</h4>
                        <p data-aos="fade-up">
                            Please fill out the form below and our 
                            dedicated team will get in touch with you 
                            as soon as possible.
                        </p>
                    </div>

                    <div className="formContent grid" data-aos="fade-up">
                        <input type="email" placeholder="Enter email address" />
                        <textarea placeholder="Enter your question here"></textarea>
                        <button className="btn">Submit Inquiry</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
