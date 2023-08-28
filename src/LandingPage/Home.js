import './Home.css';
import React, { useState } from 'react';
import NavBar from './NavBar';
import FSection from './FSection';
import SSection from './SSection';
import TForm from './TForm';
import Footer from './Footer';

function Home() {
    const [hideHome, setHideHome] = useState({display: "flex"})

    const Login = (data) => {
        console.log("hidden")
        setHideHome({...hideHome, display: "none"})
    }
  return (
    <div className="homepg" style={hideHome}>
      <NavBar Clicked={Login}/>
      <FSection/>
      <SSection/>
      <TForm/>
      <footer className='foot'><Footer/></footer>
    </div>
  );
}

export default Home;
