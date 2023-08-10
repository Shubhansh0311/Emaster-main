import Cart from "../components/Cart";
import FooterItem from "../components/Footer";
import Navbar from "../components/Navbar";
import { CHANGE_ORDER_CART, CHANGE_QUANTITY, REMOVE_ITEM ,CHANGE_ORDER_CART_AC, CHANGE_QUANTITY_AC, REMOVE_ITEM_AC} from "../action";
import { useDispatch, useSelector } from 'react-redux';// by this we can use particular element of any component
import { useEffect } from "react";





//useDispatched for state to props
//useselector for maps to props

const CartPage = () => {

    // const useProduct = useSelector((store) => store.productItem.Product)


    // for cart functionality


    const cartProduct = useSelector((store) => store.cartItem.item)
    const dispatch = useDispatch();

    const order = useSelector((state) => state.order)
    useEffect(() => {
        // dispatch({ type: CHANGE_ORDER_CART, payload: cartProduct })
        dispatch(CHANGE_ORDER_CART_AC(cartProduct ))
    },[cartProduct])



    // quantity functionality
    const cartQuantity = (quantity, item) => {
        dispatch(CHANGE_QUANTITY_AC({ ...item, quantity: quantity } ))
        // dispatch({ type: CHANGE_QUANTITY, payload: { ...item, quantity: quantity } })
    }
    const removeItem = (item) => {

        dispatch({ type: REMOVE_ITEM, payload: {item} })
        dispatch(REMOVE_ITEM_AC({ type: REMOVE_ITEM, payload: {item} }))
    }
    


    return (<>
        <Navbar cartCount={cartProduct.length} />
        <Cart removeItem={removeItem} AddItem={cartProduct} order={order} cartQuantity={cartQuantity} />
        <FooterItem />

    </>)
}
export default CartPage;