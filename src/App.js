import { useMemo, useState } from 'react';
import './App.css';
import Home from './LandingPage/Home';
import Login from './LoginPage/Login';
import Signup from './SignupPage/Signup';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Dashboard/Cart';
import { Context } from './Utilities/Context';



function App() {
  let [value, setvalue] = useState(0)
  let providerValue = useMemo(() => ({value, setvalue}), [value, setvalue])
  return (
      <BrowserRouter>
        <div className='App'>
        <Context.Provider value={providerValue}>
          <Routes>
            <Route exact path='*' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            
              <Route exact path='/dashb' element={<Dashboard/>}/>
            
            <Route exact path='/cart' element={<Cart/>}/>            
          </Routes>
          </Context.Provider>
        </div>
      </BrowserRouter>
  );
}

export default App;
