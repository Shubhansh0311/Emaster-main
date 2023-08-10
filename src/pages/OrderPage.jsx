
import { useDispatch, useSelector } from "react-redux";
import FooterItem from "../components/Footer";
import Navbar from "../components/Navbar";
import Order from "../components/Order";

//useDispatched for state to props
//useselector for maps to props

const OrderPage = () => {

    // const dispatch = useDispatch()
    const cartProduct = useSelector((store) => store.cartItem.item)
    const order = useSelector(state => state.order)
    const user = useSelector(state => state.user)
    // quantity functionality


    return (<>
        <Navbar cartCount={cartProduct.length} />
       <h3>My orders:  {!order.items.length ? 'no active orders' : null}</h3>

        {user.orders.map(order =>
            <Order AddItem={order.items} order={order} />
        )}
        <FooterItem />

    </>)
}
export default OrderPage;