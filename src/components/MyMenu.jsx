import { useEffect } from 'react'

import {
  Badge,
  Card,
  CardHeader,
  Link
} from '@chakra-ui/react'


import { useSelector, useDispatch } from 'react-redux'
import { getCart } from '../features/cart/cartSlice'

export default function MyMenu() { 

    const dispatch = useDispatch()
    const cartList = useSelector((state) => state.cart.cartList)

    useEffect(() => {
        dispatch(getCart())
    },[dispatch])

    return (
    <Card backgroundColor={'darkblue'} style={{border:'1px solid grey', height:50}}>
        <CardHeader style={{ display:"flex", height:50, lineHeight:"50px",justifyContent:'space-around', color:'white'}}>
            <Link href='/'> Home </Link> 
            <Link href='/cart'> Cart </Link>
            <div> Cart <Badge>{cartList?.length || 0}</Badge></div>
        </CardHeader>
    </Card>
    )
}