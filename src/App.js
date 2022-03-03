// src/App.js
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import countriesFromJson from "./countries.json"

function App() {

  const [countries , setCountries] = useState([])

   useEffect(()=>{
     setCountries(countriesFromJson)
     return ()=> console.log("DB LOADED")
   },[countries])
 
  return (
  <div className="App">
  <Navbar/>  
 {countries.map(country=>(
  <CountriesList key={country.alpha3Code} country={country}/>  
 ))}

  <Routes>
  <Route path={"/:alpha3Code"} element={<CountryDetails countries={countries}/>} />
  <Route path={"/"} element={<ErrorPage />}/>
  </Routes>   
 
  </div>)
}
export default App;
