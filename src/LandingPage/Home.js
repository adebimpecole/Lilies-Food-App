import './Home.css';
import React, {lazy, Suspense, useState } from 'react';
import NavBar from './NavBar';
import FSection from './FSection';
import SSection from './SSection';

const TForm = lazy(() => import('./TForm'))
const Footer = lazy(() => import('./Footer'))

function Home() {
    // const [hideHome, setHideHome] = useState({display: "flex"})

    // const Login = () => {
    //     console.log("hidden")
    //     setHideHome({...hideHome, display: "none"})
    // }
  return (
    <div className="homepg">
      <NavBar />
      <FSection/>
      <SSection/>
      <Suspense fallback={<div>Loading...</div>}>
        <TForm/>
      </Suspense>
      <footer className='foot'>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer/>
        </Suspense>
      </footer>
    </div>
  );
}

export default Home;
