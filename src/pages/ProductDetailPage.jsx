import Cart from "../components/Cart";
import FooterItem from "../components/Footer";
import Navbar from "../components/Navbar";
import { ADD_TO_CART, ADD_TO_CART_AC, CHANGE_ORDER_CART, CHANGE_QUANTITY, REMOVE_ITEM } from "../action";
import { useDispatch, useSelector } from 'react-redux';// by this we can use particular element of any component
import { useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router";




//useDispatched for state to props
//useselector for maps to props

const ProductDetailPage = () => {
    
    let {productID}=useParams();
    // console.log(productID);
    const products=useSelector(state=>state.productItem.Product)
    const product=products.find(p=>p._id===productID)
        console.log(products);
    // console.log(product);//❗this product contains all the data 
    // console.log(product);
    // const useProduct = useSelector((store) => store.productItem.Product)


    // for cart functionality


    const cartProduct = useSelector((store) => store.cartItem.item)

   


    // add cart  functionality
    const dispatch = useDispatch();
    const addToCart = (AddToCartProduct) => {
        dispatch(ADD_TO_CART_AC(AddToCartProduct))
    }


    return (<>
        <Navbar cartCount={cartProduct.length} />
        <ProductDetails product={product}      addToCart={addToCart} />
        <FooterItem />

    </>)
}
export default ProductDetailPage;