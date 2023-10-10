import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
 
function MainContent() {
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
          <img src="/images/graphic_design_is_my_passion.png" className="img-fluid" alt="Image Description" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <p className="text-center">Description text goes here. You can add more details below the image.</p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <a href="#" className="btn btn-primary btn-block">Button 1</a>
        </div>
        <div className="col-6">
          <a href="#" className="btn btn-primary btn-block">Button 2</a>
        </div>
      </div>
    </div>
    );
}

const Homepage = () => {
    return (
        <>
            <MainContent></MainContent>
        </>
    );
}

export default Homepage;