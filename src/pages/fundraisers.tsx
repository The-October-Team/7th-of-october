import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { ReactComponent as HouseIcon } from "../images/house.svg";
import { ReactComponent as InfoCircle } from "../images/info-circle.svg";

function FundraisersContent() {
    return (
        <div className="fundraisers">
            <p className="title">SUPPORT ISRAEL</p>
            <p className="subtitle">Donate to Hospitals and Medical Centers</p>
            <p className="donate-link"><a href="https://www.bmc.gov.il/?CategoryID=511"> Barzilai Hospital </a> </p>
            <p className="donate-link"><a href="https://hadassah.gospringboard.com/"> Hadassah Hospital </a> </p>
            <p className="donate-link"><a href="https://www.soroka.org/donate/"> Soroka Medical Center </a> </p>
            <p className="donate-link"><a href="https://give.afsmc.org/give/409953/#!/donation/checkout"> Sheba Medical Center </a> </p>
            <p className="subtitle">Donate to Emergency Services</p>
            <p className="donate-link"><a href="https://www.mdais.org/en/donation"> Magen David Adom </a> </p>
            <p className="donate-link"><a href="https://israelrescue.org/"> United Hatzalah </a> </p>
            <p className="donate-link"><a href="https://give.zakaworld.org/"> Zaka </a> </p>
            <p className="subtitle">Support Soldiers and Families</p>
            <p className="donate-link"><a href="https://belevechad.nyc/who-we-are/"> Belev Echad </a> </p>
            <p className="donate-link"><a href="https://www.fidf.org/"> Friends of the IDF </a> </p>
            <p className="donate-link"><a href="https://www.latet.org.il/en/"> Latet  </a> </p>
            <p className="subtitle">Support Mental Health Resources</p>
            <p className="donate-link"><a href="https://www.afnatal.org/"> AFNATAL </a> </p>
            <p className="donate-link"><a href="https://en.eran.org.il/"> ERAN Emotional First Aid </a> </p>
            <p className="donate-link"><a href="https://onefamilyfundus.org/"> One Family Fund </a> </p>
            <p className="donate-link"><a href="https://www.bayit-cham.org.il/en/a-warm-house-%f0%9f%92%97-brightens-the-heart/"> A Warm House </a> </p>
            <p className="donate-link"><a href="https://www.israaid.org/"> IsraAID </a> </p>
            <img src="../images/Star_of_David.png" id="star-of-david" />
            <Link to='/'>
                <HouseIcon width={40} height={40} id="house-icon" />
            </Link>
            <Link to='/enough'>
                <InfoCircle width={40} height={40} id="info-circle" />
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