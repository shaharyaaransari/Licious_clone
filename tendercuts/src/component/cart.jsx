import {useState,useEffect} from "react";
import {Heading,Grid} from "@chakra-ui/react"
import CartItem from "./CartItem"
import axios from "axios";
function Cart(){
    const [data,setData] = useState([]);
    const [Price,setPrice]=useState(0);
    const cartPrice =(val)=>{
       
        setPrice(val)
       
    }
    const fetchData=()=>{
        axios.get(`https://cute-puce-jackrabbit-robe.cyclic.app/Cart`)
        .then((res)=>{
            setData(res.data)
          
           let sum=0
            for(let i=0;i<res.data.length;i++){
                
                sum+=res.data[i].price
            }
            
            cartPrice(sum)
           // console.log(res)
        })
    }
    useEffect(()=>{
  fetchData()
    },[Price])
   
    return (
        <>
        <Heading> Cart Total:{Price}</Heading>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={4}>
{ data?.map((item)=>{
    
            return   <CartItem key={item.id} {...item}/>   
           
        })
    }
        </Grid>
       
       
        </>
    )
}
export default Cart;