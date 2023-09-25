import { useState, useEffect } from "react";
import { Heading, SimpleGrid } from "@chakra-ui/react"
import CartItem from "./CartItem"
import axios from "axios";
function Cart() {
    const [data, setData] = useState([]);
    const [Price, setPrice] = useState(0);

    const cartPrice = (val) => {

        setPrice(val)

    }
    const fetchData = () => {
        axios.get(`https://tender-xhl3.onrender.com/Cart`)
            .then((res) => {
                setData(res.data)

                let sum = 0
                for (let i = 0; i < res.data.length; i++) {

                    sum += res.data[i].price
                }

                cartPrice(sum)
                // console.log(res)
            })
            .catch((err)=>{
                  console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
        // react-hooks/exhaustive-deps
    }, [Price])
    const handleDelete = (id) => {
        fetch(`https://tender-xhl3.onrender.com/Cart/${id}`, {
            method: "DELETE",

        })
            //.then((res)=>res.json())
            .then(() => { fetchData() })
    }

    return (
        <>
            <Heading p={2}> Cart Total:{Price}</Heading>
            <SimpleGrid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6} mt={4}>
                {data?.map((item) => {

                    return <CartItem key={item.id} {...item} handleDelete={handleDelete} />

                })
                }
            </SimpleGrid>


        </>
    )
}
export default Cart;