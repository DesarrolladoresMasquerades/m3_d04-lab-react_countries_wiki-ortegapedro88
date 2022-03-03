import { Link } from "react-router-dom"
export default function CountriesList(props){



    return(
        <ul><Link to={"/"+props.country.alpha3Code} > {props.country.name} </Link></ul>
     
    )
}

