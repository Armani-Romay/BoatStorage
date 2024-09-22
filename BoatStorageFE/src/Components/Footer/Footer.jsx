import React from 'react'
import './Footer.css'

//imported icons
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
        <div className="footer">
            <div className="sectionContainer container grid">
                <div className="logoDiv">
                    <div className="footerLogo">
                        <BiLogoMediumOld className="icon" />
                        <span>Romay Storage</span>
                    </div>
                    <div className="socials flex">
                            <ImFacebook className = "icon"/>
                            <AiFillInstagram className = "icon"/>
                    </div>
                </div>

                    <div className="footerLinks">
                        <span className="linkTitle">
                            Information
                        </span>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Explore</a>
                        </li>
                    </div>

                    <div className="footerLinks">
                        <span className="linkTitle">
                            Helpful Links
                        </span>
                        <li>
                            <a href="#">Nearby Boat Ramps</a>
                        </li>
                        <li>
                            <a href="#">Camp Grounds</a>
                        </li>
                    </div>

                    <div className="footerLinks">
                        <span className="linkTitle">Contact Details</span>
                        <span className="phone">321-522-6718</span>
                        <span className="email">cromayjr@gmail.com</span>
                        
                    </div>
            </div>

        </div>
    );
};
export default Footer