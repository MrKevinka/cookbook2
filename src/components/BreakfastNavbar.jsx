import { NavLink } from "react-router-dom";
export default function BreakfastNavbar(){
    return(
        <>
        <NavLink to={"/breakfast/prata"}> Prate</NavLink>
        <NavLink to={"/breakfast/frenchfries"}>French Fries</NavLink>
        <NavLink to={"/breakfast/sandwhich"}>Sandwhich</NavLink>
        <NavLink to={"/breakfast/breakfast"}>Breakfast</NavLink>
        </>
    )
}