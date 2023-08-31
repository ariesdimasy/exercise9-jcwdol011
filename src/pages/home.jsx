import { useEffect } from "react";
import { Card, CardBody, CardHeader, Heading, Button, Divider} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./../features/product/productSlice";
import { addCart } from "../features/cart/cartSlice";

export default function Home() { 

    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)

    useEffect(() => {
        dispatch(fetchProducts())

    },[dispatch])

    const handleClickAddtoCart = (item) => {
        dispatch(addCart({...item, qty:1}))
    }

    return (<div>
        <h1> Home </h1>
        {products.map((item,index) => {
            return (
                <Card key={index} style={{ margin:'10px 0'}}>
                    <CardHeader>
                        <Heading>{item.name}</Heading>
                    </CardHeader>
                    <Divider />
                    <CardBody> 
                        <p>Price : {item.price}</p>
                        <Button onClick={() => handleClickAddtoCart(item)}> Add to Cart </Button>
                    </CardBody>
                </Card>
            )
        })}
    </div>)
}