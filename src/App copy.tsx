import React, { useState } from "react";
import "./styles copy.css";
import eventsData from "./data.json";

type SetEventIndex = (index: number) => void;

document.body.style.backgroundColor = "#343638";

function MainContent({
    eventIndex,
    setEventIndex,
}: {
    eventIndex: number;
    setEventIndex: SetEventIndex;
}) {
    return (
        <div id="page-container">
            <section id="title-container">
                <p id="main-title">Your Title</p>
                <p id="main-subtitle">Subtitle</p>
            </section>
            <main id="graphic-container">
                <img
                    src={eventsData[eventIndex].path}
                    id="graphic"
                    alt="Image Description"
                />
                <p id="graphic-detail">
                    {eventsData[eventIndex].details}
                </p>
            </main>
            <div className="btn-container">
                <button
                    id="btn-ive-seen-enough"
                >
                    I&apos;ve seen enough.
                </button>
                <button
                    onClick={incIndex(eventIndex, setEventIndex)}
                    id="btn-show-me-more"
                >
                    Show me more
                </button>
            </div>
            <div>
                <input type="checkbox" id="nsfw-toggle" />
                <label htmlFor="nsfw-toggle" id="nsfw-label">
                    <svg
                        id="warning"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z"
                            stroke="#0f0f0f"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <svg
                        id="lock"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                            stroke="#0f0f0f"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </label>                    
                <p>
                    NSFL
                </p>
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

const Homepage = () => {
    const [eventIndex, setEventIndex] = useState(0);
    return (
        <>
            <MainContent eventIndex={eventIndex} setEventIndex={setEventIndex}></MainContent>
        </>
    );
};

export default Homepage;
