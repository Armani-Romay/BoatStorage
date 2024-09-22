import React, { useState, useEffect } from 'react';
import './Destinations.css';

//import icons
import { MdLocationPin } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { PiMedalDuotone } from "react-icons/pi";

//imported media
import image1 from '../../Assets/boat.jpg';
import image2 from '../../Assets/rv1.jpg';
import image3 from '../../Assets/trailer1.jpg';
import image4 from '../../Assets/van.jpg';

//library used for animation
import Aos from 'aos'
import 'aos/dist/aos.css'


//create an array that is gonna contain all destination data and we loop through
const destinations = [
    {
        id: 1,
        img: image1,
        name: "Boat",
        price: "Starting as low as $80 per/Month",
        rating: 4.9,
        categories: ["All", "Boat", "Recommended"]
    },
    {
        id: 2,
        img: image2,
        name: "Recreational Vehicle",
        price: "Starting as low as $85 per/Month",
        rating: 5.0,
        categories: ["All", "RV"]
    },
    {
        id: 3,
        img: image3,
        name: "Trailer",
        price: "Starting as low as $70 per/Month",
        rating: 4.8,
        categories: ["All", "Trailer"]
    },
    {
        id: 4,
        img: image4,
        name: "Personal Vehicle",
        price: "Starting as low as $60 per/Month",
        rating: 5.0,
        categories: ["All", "Vehicle"]
    }
];

const Destinations = () => {
    //function used to set the active state of each destination
    const [activeMenu, setActiveMenu] = useState('All');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const filteredDestinations = activeMenu === 'All' 
        ? destinations 
        : destinations.filter(destination => destination.categories.includes(activeMenu));

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    

    return (
        <div className="destination section container">
            <div className="sectionContainer">
                <div className="sectionTitle">
                    <span className="redText" data-aos="fade-up">
                        EXPLORE NOW
                    </span>
                    <h3 data-aos="fade-up">Find What Option Works for You</h3>
                    <p className="FillIn" data-aos="fade-up">
                        Fill in the fields to find the best fit for you.
                    </p>
                </div>

                <div className="searchField grid">
                    <div className="inputField flex" data-aos="fade-up">
                        <MdLocationPin className="icon"/>
                        <input type="text" placeholder='Location'/>
                    </div>
                    <div className="inputField flex" data-aos="fade-up">
                        <BsCreditCardFill className="icon"/>
                        <input type="text" placeholder='Budget'/>
                    </div>
                    <div className="inputField flex" data-aos="fade-up">
                        <BsCalendarDateFill className="icon"/>
                        <input type="text" placeholder='Date'/>
                    </div>
                    <button className="btn flex" data-aos="fade-up">
                        <BiSearchAlt className="icon"/>
                        Search
                    </button>
                </div>

                <div className="sectionMenu">
                    <ul className="flex">
                        {['All', 'Recommended', 'Boat', 'RV', 'Trailer', 'Vehicle', 'Other'].map(menu => (
                            <li 
                                key={menu} 
                                className={activeMenu === menu ? 'active' : ''} 
                                onClick={() => handleMenuClick(menu)}
                            >
                                {menu}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* This section will display options based on the category chosen in the menu */}
                <div className="destinationContainer grid">
                    {filteredDestinations.map((destination) => {
                        return (
                            <div className="singleDestination" key={destination.id} data-aos="fade-up">
                                <div className="imgDiv" data-aos="fade-up">
                                    <img src={destination.img} alt="Boat Being Trailered Image" />
                                    <div className="destinationInfo flex">
                                        <div className="text">
                                            <span className="name">{destination.name}</span>
                                            <p className="flex">
                                                <PiMedalDuotone className="icon" />
                                                {destination.price}
                                            </p>
                                        </div>
                                        <span className="rating">{destination.rating}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
