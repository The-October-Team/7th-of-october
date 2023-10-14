import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { ReactComponent as HouseIcon } from "../images/house.svg";

function FundraisersContent() {
    return (
        <div className="fundraisers">
            <Link to='/'>
                <HouseIcon width={40} height={40} id="house-icon" />
            </Link>
        </div>
    );
}

const Fundraisers = () => {
    return (
        <>
            <FundraisersContent />
        </>
    );
};

export default Fundraisers;