import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { ReactComponent as HouseIcon } from "../images/house.svg";

function EnoughContent() {
    return (
        <div className="enough">
            <p className="title">WHAT CAN I DO?</p>
            <ul className="bullet-points">
                <li> SUPPORT ISRAEL ONLINE USING THE HASHTAGS <span className="hashtag"> #TRUEFACEOFPALESTINE #HAMASisISIS </span ></li>
                <li> SHARE THIS SITE TO SHOW THE WORLD THE ATROCITIES THE ISRAELI PEOPLE FACE <br/>
                    <FacebookShareButton
                        url={"https://trueface.com/"}
                        quote={"Learn more about how Hamas Is Isis!"}
                        hashtag={"#TRUEFACEOFPALESTINE"}
                        className="share-button"
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        title={"The true face of Palestine"}
                        url={"https://trueface.com/"}
                        hashtags={["TRUEFACEOFPALESTINE", "HAMASisISIS"]}
                        className="share-button"
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <WhatsappShareButton
                        title={"The true face of Palestine"}
                        url={"https://trueface.com/"}
                        className="share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                </li>
                <li> READ ABOUT <a href="https://en.wikipedia.org/wiki/Israeli%E2%80%93Palestinian_conflict"> THE CONFLICT </a> AND HOW PALESTINIAN LEADERSHIP ALWAYS DESTROYS THE PEACE PROCESS </li>
                <li> DONATE TO THE FOLLOWING <a href="https://google.com/"> FUNDRAISERS </a> SUPPORTING THE SURVIVORS AND THE IDF </li>
                <li> DON&apos;T FALL FOR THE RADICAL ISLAMIST PROPOGANDA, CHOOSE <u> THE RIGHT SIDE OF HISTORY </u> BEFORE MORE BLOOD IS SPILT </li>
            </ul>
            <img src="../images/blood.png" id="blood-img" alt="blood" />
            <br />
            <Link to='/'>
                <HouseIcon width={40} height={40} id="house-icon"/>
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
