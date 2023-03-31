 import {Routes,Route} from "react-router-dom"
import Categories from "./Categories";
import Chicken from "./chicken"

 function AllRoutes(){
    return (
        <>
        <Routes>
           <Route path="/" element={<Categories/>}/>
            <Route path="/Chicken" element={<Chicken/>}/>

        </Routes>
        </>
    )
 }
 export default AllRoutes;