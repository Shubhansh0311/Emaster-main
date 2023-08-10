import FooterItem from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from 'react-redux';// by this we can use particular element of any component
// import { useEffect } from "react";
import Checkout from "../components/Checkout";
import { ADD_ADDRESS, SET_SHIP_ADDRESS, PLACE_ORDER, EMPTY_CART, ADD_ADDRESS_AC, SET_SHIP_ADDRESS_AC, EMPTY_CART_AC, PLACE_ORDER_AC } from "../action";





//useDispatched for state to props
//useselector for maps to props

const CheckoutPage = () => {

    const dispatch = useDispatch();
    // const useProduct = useSelector((store) => store.productItem.Product)


    // for cart functionality


    const cartProduct = useSelector((store) => store.cartItem.item)

    const order = useSelector((state) => state.order)
    const user = useSelector((state) => state.user)



    const addAddress = (address) => {
        // dispatch({ type: ADD_ADDRESS, payload: address })
        dispatch(ADD_ADDRESS_AC(address))
        
    }
    const setShipAddress = (address) => {
        // dispatch({ type: SET_SHIP_ADDRESS, payload: address })
        dispatch( SET_SHIP_ADDRESS_AC(address))
    }

    const placeOrder = () => {
        if (order.shippingAddress) {
            // dispatch({ type: PLACE_ORDER, payload: order });
            dispatch(PLACE_ORDER_AC(order));
            // dispatch({ type: EMPTY_CART })
            dispatch(EMPTY_CART_AC())
        }
        else {
            alert('add shipping address ')
        }
    }

    return (<>
        <Navbar cartCount={cartProduct.length} />
        <Checkout order={order} user={user} addAddress={addAddress} setShipAddress={setShipAddress} placeOrder={placeOrder} />
        <FooterItem />

    </>)
}
export default CheckoutPage;