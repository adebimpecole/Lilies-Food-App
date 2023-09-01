import React, {lazy, Suspense, useMemo, useState } from 'react';
import './App.css';
import Home from './LandingPage/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from './Utilities/Context';


 const Login = lazy(() => import('./LoginPage/Login'));
 const Signup = lazy(() => import('./SignupPage/Signup'));
 const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
 const Cart = lazy(() => import('./Dashboard/Cart'));


function App() {
  let [value, setvalue] = useState(0)
  let providerValue = useMemo(() => ({value, setvalue}), [value, setvalue])
  return (
      <BrowserRouter>
        <div className='App'>
        <Context.Provider value={providerValue}>
          <Routes>
            <Route exact path='*' element={<Home/>}/>
            <Route exact path='/login' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Login/>
              </Suspense>
            }/>      
            <Route exact path='/signup' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Signup/>
              </Suspense>
            }/> 
            <Route exact path='/dashb' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard/>
              </Suspense>
            }/> 
            <Route exact path='/cart' element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cart/>
              </Suspense>
            }/>         
          </Routes>
          </Context.Provider>
        </div>
      </BrowserRouter>
  );
}

export default App;
