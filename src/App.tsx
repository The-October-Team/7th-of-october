import React, { useState } from "react";
import eventsData from "./data.json";
import { Routes, Route } from "react-router-dom";
import Enough from "./pages/enough";
import "./styles.css";
import Content from "./components/Content";

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
            <section id="title-container">
                <p id="main-title">
                    <span>true face of</span> palestine
                </p>
                <p id="main-subtitle">
                    IN THE PAST FEW DAYS, HAMAS TERRORISTS TOOK OVER ISRAELI
                    TOWNS. THE IMAGES BELOW ARE THE AFTERMATH OF THEIR BRUTAL
                    ATTACK.
                </p>
            </section>
            <main id="graphic-container">
                {contentWarning && (
                    <>
                        <div id="blur" />
                        <div id="warning-containter">
                            <img id="eye" src="../images/eye.png" />
                            <p
                                id="content-warning"
                                onClick={disableWarning(
                                    contentWarning,
                                    setContentWarning
                                )}
                            >
                                CONTENT WARNING: EXTREME VIOLENCE
                                <br />
                                SHOW
                            </p>
                        </div>
                    </>
                )}
                <div id="fade-top" />
                {/* <img
                    src={eventsData[eventIndex].path}
                    id="graphic"
                    alt="Image Description"
                /> */}
                <Content
                    src={eventsData[eventIndex].path}
                    details={eventsData[eventIndex].details} />
                <div id="fade-bottom" />
            </main>
            <p id="graphic-detail">{eventsData[eventIndex].details}</p>
            <div className="btn-container">
                <button
                    onClick={incIndex(eventIndex, setEventIndex)}
                    id="btn-show-me-more"
                >
                    SHOW ME MORE
                </button>
                <button id="btn-ive-seen-enough">I&apos;VE SEEN ENOUGH</button>
            </div>
        </div>
    );
}

function incIndex(eventIndex: number, setEventIndex: SetEventIndex) {
    return () => {
        const step = Math.ceil(Math.random() * MEAN_STEP * 2);
        if (eventIndex + step >= eventsData.length) {
            let i = 0;
            for (i = eventsData.length - 2; i >= 0; --i) {
                if (
                    eventsData[i].level !=
                    eventsData[eventsData.length - 1].level
                ) {
                    break;
                }
            }
            if (i == eventIndex) {
                if (i + 1 < eventsData.length) {
                    ++i;
                } else if (i > 0) {
                    --i;
                }
            }
            setEventIndex(i);
            return;
        }
        setEventIndex(eventIndex + step);
    };
}

function disableWarning(
    contentWarning: boolean,
    setContentWarning: SetContentWarning
) {
    return () => {
        setContentWarning(false);
    };
}

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
        </>
    );
};

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="enough" element={<Enough />} />
            </Routes>
        </div>
    );
}