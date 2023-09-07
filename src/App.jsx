import Breakfast from "./components/Breakfast";
import { Route,Routes } from "react-router-dom";
import BreakfastNavbar from "./components/BreakfastNavbar";
import Prata from "./components/Prata";
import Sandwhich from "./components/Sandwhich";
import Frenchfries from "./components/Frenchfries";

export default function App(){
  
 
  
   
 
  return (
  <div>
      <BreakfastNavbar />
     <Routes>
     <Route path="/breakfast/breakfast" element={<Breakfast />}/>
        <Route path="/breakfast/prata" element={<Prata />}/>
        <Route path="/breakfast/frenchfries" element={<Frenchfries />}/>
        <Route path="/breakfast/sandwhich" element={<Sandwhich />} />
        </Routes>
      
  

  </div>
  )
}