import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'; // Importing necessary hooks from Redux
import Productlist from "../components/Productlist";
import FooterItem from "../components/Footer";
import Navbar from "../components/Navbar";
import CarouselItem from "../components/Carousel";
import { ADD_TO_CART_AC, initializeProductsAC } from "../action"; // Adjust your action imports accordingly

const Home = () => {
    const dispatch = useDispatch();
    
    // Accessing products from the Redux store
    const products = useSelector((store) => store.productItem.Product);
    
    // Accessing cart items from the Redux store
    const cartProduct = useSelector((store) => store.cartItem.item);

    // Fetching products when the component mounts
    useEffect(() => {
        dispatch(initializeProductsAC());
    }, [dispatch]); // Including dispatch in the dependency array

    // Function to add product to cart
    const addToCart = (AddToCartProduct) => {
        dispatch(ADD_TO_CART_AC(AddToCartProduct));
    };

    return (
        <>
            {/* The cart count is passed to Navbar */}
            <Navbar cartCount={cartProduct.length} />
            <CarouselItem />
            <Productlist sendProduct={products} addToCart={addToCart} />
            <FooterItem />
        </>
    );
};

export default Home;
