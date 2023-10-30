import React, { useState } from "react";
import eventsData from "./data.json";
import { Routes, Route } from "react-router-dom";
import Enough from "./pages/enough";
import Fundraisers from "./pages/fundraisers";
import "./style.css";
import Content from "./components/Content";
import disableScroll from "./block-scroll.js"
import FadeInOut from "./FadeInOut";
type SetEventIndex = (index: number) => void;
type SetContentWarning = (index: boolean) => void;
const MEAN_STEP = Math.floor(eventsData.length / 12);

function MainContent({
    eventIndex,
    contentWarning,
    setEventIndex,
    setContentWarning,
}: {
    eventIndex: number;
    contentWarning: boolean;
    setEventIndex: SetEventIndex;
    setContentWarning: SetContentWarning;
}) {
    return (
        <div id="page-container">
            <div id="title-container">
                <p id="main-title">
                    TRUE FACE
                    <br />
                    OF PALESTINE
                </p>
                <p id="main-subtitle">
                    Like every war in the conflict, this one too started after a palestinian terror attack.
                    Hamas took over civilian towns, commiting some of the most horrifying atrocities of the 21st century.
                </p>
                <p id="worse-warn">
                    FOOTAGE WILL GET PROGRESSIVELY MORE GRAPHIC
                </p>
            </div>
            <main id="graphic-container">
                {contentWarning && (
                    <>
                        <div id="blur" />
                        <div id="warning-containter" onClick={disableWarning(contentWarning, setContentWarning)}>
                            <img id="eye" src="../images/eye.png" />
                            <p id="content-warning">
                                CONTENT WARNING: EXTREME VIOLENCE
                                <br />
                            </p>
                            <p id="btn-disable-warning">
                                SHOW
                            </p>
                        </div>
                        <div id="fade-top" />
                    </>
                )}
                
                <Content
                    src={eventsData[eventIndex].path}
                    details={eventsData[eventIndex].details}
                />
            </main>
            <p id="graphic-detail">{eventsData[eventIndex].details}</p>
            <div className="btn-container">
                <button
                    onClick={incIndex(eventIndex, setEventIndex)}
                    id="btn-show-me-more"
                >
                    WITNESS MORE
                </button>
                <br />
                <button id="btn-ive-seen-enough" onClick={scrollToEnough}>
                    I&apos;VE SEEN ENOUGH
                </button>
            </div>
        </div>
    );
}

function incIndex(eventIndex: number, setEventIndex: SetEventIndex) {
    return () => {
        setEventIndex((eventIndex + 1) % eventsData.length);
        // const step = Math.ceil(Math.random() * MEAN_STEP * 2);
        // if (eventIndex + step >= eventsData.length) {
        //     let i = 0;
        //     for (i = eventsData.length - 2; i >= 0; --i) {
        //         if (
        //             eventsData[i].level !=
        //             eventsData[eventsData.length - 1].level
        //         ) {
        //             break;
        //         }
        //     }
        //     if (i == eventIndex) {
        //         if (i + 1 < eventsData.length) {
        //             ++i;
        //         } else if (i > 0) {
        //             --i;
        //         }
        //     }
        //     setEventIndex(i);
        //     setEventIndex(eventIndex + 1);
        // }
        // setEventIndex(eventIndex + step);
    };
}

function disableWarning(
    contentWarning: boolean,
    setContentWarning: SetContentWarning
) {
    return () => {
        scrollToGraphic();
        setContentWarning(false);
    };
}
function scrollToGraphic() {
    window.scrollTo({
        top: document.getElementById("worse-warn")?.offsetTop || 0,
        behavior: "smooth",
    });
}
function scrollToEnough() {
    const element = document.getElementById("enough-container")!;
    element.scrollIntoView({ behavior: "smooth" });
}

disableScroll();

const Homepage = () => {
    const [eventIndex, setEventIndex] = useState(0);
    const [contentWarning, setContentWarning] = useState(true);

    return (
        <>
            <MainContent
                eventIndex={eventIndex}
                contentWarning={contentWarning}
                setContentWarning={setContentWarning}
                setEventIndex={setEventIndex}
            ></MainContent>
            <Enough></Enough>
        </>
    );
};

export default function App() { 
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="enough" element={<Enough />} />
                <Route path="fundraisers" element={<Fundraisers />} />
            </Routes>
        </div>
    );
}
