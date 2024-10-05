// actions.js
export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const CHANGE_ORDER_CART = "CHANGE_ORDER_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const SET_SHIP_ADDRESS = "SET_SHIP_ADDRESS";
export const EMPTY_CART = "EMPTY_CART";
export const PLACE_ORDER = "PLACE_ORDER";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const INIT_PRODUCTS = "INIT_PRODUCTS";

// Initial product state
const initialProduct = {
    Product: [
        { id: 1, name: "watch1", brand: "boat", price: 1000, image: "watch1", rating: 4, color: 'red' },
        { id: 2, name: "watch2", brand: "boatx", price: 2000, image: "watch2", rating: 4, color: 'green' },
        { id: 3, name: "watch3", brand: "boaty", price: 3000, image: "watch3", rating: 4, color: 'black' },
        { id: 4, name: "watch4", brand: "boatz", price: 4000, image: "watch4", rating: 4, color: 'red' },
        { id: 5, name: "watch5", brand: "boatA", price: 5000, image: "watch5", rating: 4, color: 'green' },
        { id: 6, name: "watch6", brand: "boatB", price: 6000, image: "watch6", rating: 5, color: 'black' },
        { id: 7, name: "watch7", brand: "boatC", price: 7000, image: "watch7", rating: 5, color: 'red' },
        { id: 8, name: "watch8", brand: "boatD", price: 8000, image: "watch8", rating: 5, color: 'red' }
    ]
};

// Product reducer
const ProductReducer = (state = initialProduct, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
            return { ...state, Product: action.payload };
        default:      
            return state;
    }
};

// Initial cart state
const initialCart = {
    item: []
};

// Cart reducer
const CartReducer = (state = initialCart, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.item.find(item => item.id === action.payload.id);

            if (existingItem) {
                // Increase quantity if item already exists
                return {
                    ...state}
                //     item: state.item.map(item =>
                //         item.id === existingItem.id
                //             ? { ...item, quantity: item.quantity=1 }
                //             : item
                //     )
                // };
            } else {
                // Add new item with quantity 1
                return {
                    ...state,
                    item: [...state.item, { ...action.payload, quantity: 1 }]
                };
            }

        case EMPTY_CART:
            return { ...state, item: [] };

        case CHANGE_QUANTITY:
      {      const updatedItems = state.item.map(item =>
                item.id === action.payload.id 
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
            return { ...state, item: updatedItems };
}
case REMOVE_ITEM: {
    // console.log(action.payload.item.id);
    
    return {
        ...state,
        item: state.item.filter(item => item.id !== action.payload.item.id),
    };
}


        default:
            return state;
    }
};

// Initial order state
const initialOrder = {
    items: [],
    shipping: 50,
    discount: 50,
    shippingAddress: '',
    totalItems: 0,
    totalCost: 0
};

// Order reducer
const OrderReducer = (state = initialOrder, action) => {
    switch (action.type) {
        case CHANGE_ORDER_CART:
            const items = action.payload;
            const totalItems = items.reduce((total, item) => total + (item.quantity * 1), 0);
            const totalCost = items.reduce((total, item) => total + item.price * (item.quantity * 1), 0);
            return { ...state, items: action.payload, totalCost, totalItems };
        case SET_SHIP_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        default:
            return state;
    }
};

// Initial user state
const initialUser = {
    name: "anil",
    email: "anil@gmail.com",
    addresses: [
        { fName: "shubh", lName: "agrawal", city: 'JBP', house: 1, state: "AP", country: "india", pincode: 483119, phone: 9125658565 },
        { fName: "shubh", lName: "agrawal", city: 'JBP', house: 2, state: "AP", country: "india", pincode: 583119, phone: 9125658565 },
        { fName: "shubh", lName: "agrawal", city: 'JBP', house: 3, state: "AP", country: "india", pincode: 683119, phone: 9125658565 },
    ],
    orders: [],
};

// User reducer
const UserReducer = (state = initialUser, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return { ...state, addresses: [...state.addresses, action.payload] };
        case PLACE_ORDER:
            return { ...state, orders: [...state.orders, action.payload] };
        default:
            return state;
    }
};

// Selector for total quantity of items in the cart
const getTotalQuantity = (cart) => {
    return cart.item.reduce((total, item) => total + item.quantity, 0);
};

// Exporting reducers and selector
export { 
    ProductReducer, 
    CartReducer, 
    OrderReducer, 
    UserReducer, 
    getTotalQuantity 
};
