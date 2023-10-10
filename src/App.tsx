import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import eventData from './data.json';
import {useState} from 'react';

interface Event {
    details: string;
    path: string;
}

type SetEventIndex = (index: number)=>void

function MainContent({ eventIndex, setEventIndex }: {eventIndex: number, setEventIndex: SetEventIndex}) {
    return (
      <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Your Title</h1>
          <h2 className="text-center">Subtitle</h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <img src={eventData[eventIndex].path} className="img-fluid" alt="Image Description" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <p className="text-center">{eventData[eventIndex].details}</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <a href="#" className="btn btn-primary btn-block" onClick={incIndex(eventIndex, setEventIndex)}>Button 1</a>
        </div>
        <div className="col-6">
          <a href="#" className="btn btn-primary btn-block">Button 2</a>
        </div>
      </div>
    </div>
    );
}

function incIndex(eventIndex: number, setEventIndex: SetEventIndex) {
  return () => {setEventIndex(eventIndex++)}
}

const Homepage = () => {
  let [eventIndex, setEventIndex] = useState(0);
    return (
        <>
            <MainContent eventIndex={eventIndex} setEventIndex={setEventIndex}></MainContent>
        </>
    );
}

export default Homepage;