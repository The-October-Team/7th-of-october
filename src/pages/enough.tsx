import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function EnoughContent() {
    return (
        <div>
            <h2>This is enough</h2>
            <br/>
            <Link to='/'>
                Go Back
            </Link>
        </div>
    );
}

const Enough = () => {
    return (
        <>
            <EnoughContent/>
        </>
    );
};

export default Enough;
