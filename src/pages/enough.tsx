import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function EnoughContent() {
    return (
        <div className="enough">
            <p className="title">WHAT CAN I DO?</p>
            <ul className="bullet-points">
                <li> SUPPORT ISRAEL ONLINE USING THE HASHTAGS <span className="hashtag"> #TRUEFACEOFPALESTINE #HAMASisISIS </span ></li>
                <li> SHARE THIS SITE TO SHOW THE WORLD THE ATROCITIES THE ISRAELI PEOPLE FACE</li>
                <li> READ ABOUT <a href="https://en.wikipedia.org/wiki/Israeli%E2%80%93Palestinian_conflict"> THE CONFLICT </a> AND HOW PALESTINIAN LEADERSHIP ALWAYS DESTROYS THE PEACE PROCESS </li>
                <li> DONATE TO THE FOLLOWING <a href="https://google.com/"> FUNDRAISERS </a> SUPPORTING THE SURVIVORS AND THE IDF </li>
                <li> DON&apos;T FALL FOR THE RADICAL ISLAMIST PROPOGANDA, CHOOSE <u> THE RIGHT SIDE OF HISTORY </u> BEFORE MORE JEWISH BLOOD IS SPILT </li>
            </ul>
            <img src="../images/blood.png" id="blood-img" alt="blood" />
            <br />
            <Link id="trueface" to='/'>
                TRUE FACE OF PALESTINE
            </Link>
        </div>
    );
}

const Enough = () => {
    return (
        <>
            <EnoughContent />
        </>
    );
};

export default Enough;
