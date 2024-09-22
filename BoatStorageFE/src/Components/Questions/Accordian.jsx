import React from 'react'

//imported icons
import { BsArrowDownCircle } from "react-icons/bs";


const Accordian = ({title, desc, active, setActive}) => {
    return (
        <div className ="accordianContainer">
            <span className="title flex">
                {title}
                <span onClick={() => setActive(title)}>
                    <BsArrowDownCircle className = "icon"/>
                </span>
            </span>
            <p className={(active === title ? "show" : "") + " description"}>
                {desc}
            </p>

        </div>
    );
};
export default Accordian