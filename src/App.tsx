import React, { useState } from "react";
import "./styles.css";
import eventsData from "./data.json";

type SetEventIndex = (index: number) => void;
type SetContentWarning = (index: boolean) => void;

function MainContent({
    eventIndex,
    contentWarning,
    setEventIndex,
    setContentWarning
}: {
    eventIndex: number;
    contentWarning: boolean;
    setEventIndex: SetEventIndex;
    setContentWarning: SetContentWarning;
}) {
    return (
        <div id="page-container">
            <img src="../images/blood-2.png" id="blood-img-2" alt="blood" />
            <section id="title-container">
                <p id="main-title">TRUE FACE <br /> OF PALESTINE </p>
                <p id="main-subtitle">IN THE PAST FEW DAYS, HAMAS TERRORISTS TOOK OVER ISRAELI TOWNS. THE IMAGES BELOW ARE THE AFTERMATH OF THEIR BRUTAL ATTACK.</p>
            </section>
            <main id="graphic-container">
                {contentWarning &&
                    <div id="blur" />}
                {contentWarning &&
                    <div id="warning-containter">
                        <img id="eye" src="../images/eye.png" />
                        <p
                            id="content-warning"
                            onClick={disableWarning(contentWarning, setContentWarning)}
                        >
                            CONTENT WARNING: EXTREME VIOLENCE
                            <br />
                            SHOW
                        </p>
                    </div>}
                <div id="fade-top" />
                <img
                    src={eventsData[eventIndex].path}
                    id="graphic"
                    alt="Image Description"
                />
                <div id="fade-bottom" />
            </main>
            <p id="graphic-detail">
                {eventsData[eventIndex].details}
            </p>
            <div className="btn-container">
                <button
                    onClick={incIndex(eventIndex, setEventIndex)}
                    id="btn-show-me-more"
                >
                    SHOW ME MORE
                </button>
                <button
                    id="btn-ive-seen-enough"
                >
                    I&apos;VE SEEN ENOUGH
                </button>
            </div>
        </div>
    );
}


function incIndex(eventIndex: number, setEventIndex: SetEventIndex) {
    return () => {
        if (eventIndex + 1 >= eventsData.length) return setEventIndex(0);
        setEventIndex(eventIndex + 1);
    };
}

function disableWarning(contentWarning: boolean, setContentWarning: SetContentWarning) {
    return () => {
        setContentWarning(false);
    };
}

const Homepage = () => {
    const [eventIndex, setEventIndex] = useState(0);
    const [contentWarning, setContentWarning] = useState(true);

    return (
        <>
            <MainContent eventIndex={eventIndex} contentWarning={contentWarning} setContentWarning={setContentWarning} setEventIndex={setEventIndex}></MainContent>
        </>
    );
};

export default Homepage;
