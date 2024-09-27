import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

// Imported Icons
import { BiLogoMediumOld } from "react-icons/bi"
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";


const Navbar = () => {
    //state to track and update navbar
    const [navBar, setNavBar] = useState("menu")
    //function to show navbar
    const showNavBar = () => {
        setNavBar("menu showNavBar");
    }
    //function to close nav bar
    const removeNavBar = () => {
        setNavBar("menu");
    }


    return (
        <div className="navBar">
            <div className="logoDiv">
                <BiLogoMediumOld className ="icon"/>
                <span>Romay Storage</span>
            </div>

            <div className={navBar}>
                <ul>
                    <li className ="navlist">Options</li>
                    <li className ="navlist">About Us</li>
                    <li className ="navlist">Testimonial</li>
                    <li className ="navlist">Gallery</li>
                </ul>

                {/* Icon to remove Navbar */}
                <AiFillCloseCircle className="icon closeIcon"
                onClick={removeNavBar}/>
            </div>
            <Link to="/login">
                <button className="signUpBtn btn">Login</button>
            </Link>
            
            {/* Icon to toggle Navbar */}
            <PiDotsNineBold className="icon menuIcon"
            onClick={showNavBar}/>

        </div>
    )
}
export default Navbar