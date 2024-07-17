import React from 'react';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Help from './Components/Help'
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Reviews from './Components/Reviews';
import Tabs from './Components/Tabs';
import Slider from './Components/Slider';
import Lorem from './Components/Lorem';
import Color from './Components/Color';
import GroceryBud from './Components/GroceryBud';
import Strapi from './Components/Strapi';
import Cart from './Components/Cart'
import AxiosTutorial from './Components/AxiosTutorial'
import ImagesSearch from './Components/ImagesSearch'
import Contentful from './Components/Contentful';


function App() {  

  const [mode, setMode] = useState('light'); 

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')   
    document.body.classList.remove('bg-success') 
    document.body.classList.remove('bg-info')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls) 
    document.body.classList.add('bg-'+cls)     
   
    if(mode === 'light'){
      setMode('dark');  
      document.body.style.backgroundColor = 'grey';
    }  
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } 
  }


  return (
  
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>

        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/about" element={<About  mode={mode}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help mode={mode} toggleMode={toggleMode}  car={["deep"]} hpi={(10 > 9)}/>} />
        <Route path="/TextForm"  element={<TextForm mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Tabs" element={<Tabs />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Lorem" element={<Lorem />} />
        <Route path="/Color" element={<Color />} />
        <Route path="/GroceryBud" element={<GroceryBud />} />
        <Route path='/Strapi' element={<Strapi />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/AxiosTutorial' element={<AxiosTutorial />} />
        <Route path='/ImagesSearch' element={<ImagesSearch />} />
        <Route path='/Contentful' element={<Contentful />} />
        
      </Routes>
    </Router>

  );
}


export default App;