// src/App.js
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import countriesFromJson from "./countries.json"

function App() {

  const [countries , setCountries] = useState(countriesFromJson)

 
  return (
  <div className="App">
  <Navbar/>  
 {countries.map(country=>(
  <CountriesList key={country.alpha3Code} country={country}/>  
 ))}

  <Routes>
  <Route path={"/:alpha3Code"} element={<CountryDetails countries={countries}/>} />
  </Routes>   
 
  </div>)
}
export default App;
