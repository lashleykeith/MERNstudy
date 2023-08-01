import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import logo from './instagram.png';
import './App.css';
import Login from './components/login';

import soljiImage1 from './solji/1.jpg';
import soljiImage2 from './solji/2.jpg';
import soljiImage3 from './solji/3.jpg';
import soljiImage4 from './solji/4.jpg';
import soljiImage5 from './solji/5.jpg';
import soljiImage6 from './solji/cupcake.jpg';

export default function App() {
 
  // ... Rest of the code remains unchanged




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

function Home() {
  return (
    <>
      <h1>Welcome to InstaPhotos</h1>

      {/* Render the Login component */}
      <Login />

      <Link to="/about">Login to InstaPhotos</Link> {/* Use Link to navigate to the About page */}>
      <br />
      <br />
      <br />
      //We need to put the login function here.
      <div className="app">
        <img src={logo} alt="react logo" style={{ width: '200px', height: 'auto' }} />
        <br />
        <img src={soljiImage6} alt="solji image 6" style={{ width: '200px', height: 'auto' }} />
      </div>
    </>
  );
}


function About(){
  return (
    <>
      <h1>InstaPhotos</h1>
      <Link to="/">Logout Goodbye!</Link> {/* Add a link to navigate back to the Home page */}
      <p>Your Photos</p>
      <div className="app">
      <h1>Image in project</h1>
      <img src={logo} alt="react logo" style={{ width: '200px', height: 'auto' }}/>

      <h1>Image from google</h1>
      
      <br />
        <br />
       <h1>Cupcake Gram!</h1>
      <img src={soljiImage1} alt="solji image 1" style={{ width: '200px', height: 'auto' }}/>
      <br />
        <br />
       <h1>Cupcake Gram!</h1>
      <img src={soljiImage2} alt="solji image 2" style={{ width: '200px', height: 'auto' }}/>
<br />
        <br />
       <h1>Cupcake Gram!</h1>
      <img src={soljiImage3} alt="solji image 3" style={{ width: '200px', height: 'auto' }}/>
     <br />
        <br />
   <br />
        <br />
       <h1>Cupcake Gram!</h1>
      <img src={soljiImage4} alt="solji image 4" style={{ width: '200px', height: 'auto' }}/>    

       <h1>Cupcake Gram!</h1>
      <img src={soljiImage5} alt="solji image 5" style={{ width: '200px', height: 'auto' }}/>

      <h1>Background image</h1>
      <div
        className="background-image"
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)"
        }}
      >
        Overlay text
      </div>
    </div>
    </>
  );
}

