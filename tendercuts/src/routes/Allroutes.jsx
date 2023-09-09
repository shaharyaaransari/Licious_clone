 import {Routes,Route} from "react-router-dom"
import Categories from "../component/Categories";
import Chicken from "../component/chicken"
import Cart from "../component/cart";
import Login from "../component/Login";
import Combo from "../component/combo/Combo"
import Briyani from "../component/combo/Briyani";
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