 import {Routes,Route} from "react-router-dom"
import Categories from "./Categories";
import Chicken from "./chicken"
import Cart from "./cart";

 function AllRoutes(){
    return (
        <>
        <Routes>
           <Route path="/" element={<Categories/>}/>
            <Route path="/Chicken" element={<Chicken/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </>
    )
 }
 export default AllRoutes;