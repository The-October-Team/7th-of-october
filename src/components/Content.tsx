import React from "react";

export interface ContentProps {
    isVideo: boolean;
    src: string;
    details: string
}


const Content = (props: ContentProps) => {
    const isVideo: boolean = props.isVideo;
    const src: string = props.src;
    const details: string = props.details;

    if (isVideo) {
        return (
            <video controls loop autoPlay id="graphic">
                <source src={src} type="video/mp4" />
            </video>
        );
    } else {
        return (
            <img
                src={src}
                id="graphic"
                alt={details}
            />
        );
    }
};

export default Content;