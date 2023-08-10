import Productlist from "../components/Productlist"
import FooterItem from "../components/Footer";
import Navbar from "../components/Navbar";
import CarouselItem from "../components/Carousel";

//to access the data of the reducer 
import { useDispatch, useSelector } from 'react-redux';// by this we can use particular element of any component



//useDispatched for state to props
//useselector for maps to props



import { ADD_TO_CART_AC, INIT_PRODUCT_AC, initializeProductsAC } from "../action";
import { useEffect } from "react";
const Home = () => {
    const useProduct = useSelector((store) => store.productItem.Product)

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeProductsAC())
    }, [])





    // for cart functionality
    const addToCart = (AddToCartProduct) => {
        dispatch(ADD_TO_CART_AC(AddToCartProduct))
    }
    const cartProduct = useSelector((store) => store.cartItem.item)
    // console.log(addToCart.length);

    //backend
    return (
        <>
            {/* the cart count here is passed to navbar.jsx */}
            {/* ny this we get the length of the array  */}
            <Navbar cartCount={cartProduct.length} />
            <CarouselItem />
            <Productlist sendProduct={useProduct} addToCart={addToCart} />
            <FooterItem />
        </>


    )
}
export default Home;