import { Link,useParams } from "react-router-dom"

export default function CountryDetails(props){


function handleName(border){
   return props.countries.find(country => country.alpha3Code === border).name
}




    let {alpha3Code} = useParams();
   const country =  props.countries.find(country => country.alpha3Code === alpha3Code)
    
    

   
    return(
        <div>
        <img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}alt="" width="100px" height="auto" />
        <h1>{country.name}</h1>
        <h3>Capital: {country.capital}</h3>
        <h3>Borders:      
        
        {country.borders.map((border)=>(    
            <ul key={border}>
                <li><Link to={"/"+border} >{handleName(border)} </Link></li>
            </ul>
        ))}</h3>
        </div>
)} 
