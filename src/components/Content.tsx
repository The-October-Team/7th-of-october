import React, { useState, useEffect } from "react";

export interface ContentProps {
    src: string;
    details: string;
    children?: JSX.Element | JSX.Element[];
}

const Content = (props: ContentProps) => {
    const src: string = props.src;
    const details: string = props.details;

    const [contentType, setContentType] = useState("undefined");

    useEffect(() => {
        const getContentType = (path: string | undefined) => {
            const videoTypes: string[] = ["mkv", "mov", "mp4", "webv"];
            const imageTypes: string[] = ["png", "jpeg", "jpg", "webp"];
            const fileExtention = path?.split(".").pop();

            if (fileExtention === undefined) {
                return "undefined";
            } else if (videoTypes.includes(fileExtention)) {
                return "video";
            } else if (imageTypes.includes(fileExtention)) {
                return "image";
            }

            return "";
        };

        setContentType(getContentType(src));
    });

    if (contentType === "video") {
        return (
            <video controls loop autoPlay id="graphic">
                <source src={src} type="video/mp4" />
            </video>
        );
    } else if (contentType === "image") {
        return <img src={src} id="graphic" alt={details} />;
    }

    return <div>Media could not be loaded.</div>;
};

export default Content;
