 import {Routes,Route} from "react-router-dom"
import Categories from "../Categories";
import Chicken from "../chicken"
import Cart from "../cart";

import Combo from "../combo/Combo"
import Briyani from "../combo/Briyani";
 function AllRoutes(){
    return (
        <>
        <Routes>
           <Route path="/" element={<Categories/>}/>
            <Route path="/Chicken" element={<Chicken/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Combo" element={<Combo/>}/>
            <Route path="/Briyani" element={<Briyani/>}/>
            <Route path="/login" element={<Login/>}/> 
        </Routes>
        </>
    )
 }
 export default AllRoutes;