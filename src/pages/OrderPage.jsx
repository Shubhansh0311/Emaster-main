
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


    return (<div id="root">
        <div className="main-content">
        <Navbar cartCount={cartProduct.length} />
<div className="container">

<div class="d-flex row flex-column m-2 BG-LIGHT p-2 justify-content-start flex-md-row bg-light  align-items-start  ">

       <h3 className="center">My orders:  {!order.items.length ? 'no active orders' : null}</h3>

        {user.orders.map(order =>
            <Order AddItem={order.items} order={order} />
        )}
</div>
</div>
        </div>
        <FooterItem />
</div>
    )
}
export default OrderPage;