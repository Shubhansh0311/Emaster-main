import { ADD_ADDRESS, ADD_TO_CART, CHANGE_ORDER_CART, CHANGE_QUANTITY, SET_SHIP_ADDRESS, EMPTY_CART, PLACE_ORDER, REMOVE_ITEM,  INIT_PRODUCTS } from "../action";

const initialProduct = {
    Product: [
        // now getting data from the backend

        { id: 1, name: "watch1", brand: "boat", price: 1000, image: "watch1", rating: 2 ,color:'red' },
        { id: 2, name: "watch2", brand: "boatx", price: 2000, image: "watch2", rating: 3  ,color:'green'},
        { id: 3, name: "watch3", brand: "boaty", price: 3000, image: "watch3", rating: 4 ,color:'black' },
        { id: 4, name: "watch4", brand: "boatz", price: 4000, image: "watch4", rating: 4 ,color:'red' },
        { id: 5, name: "watch5", brand: "boatA", price: 5000, image: "watch5", rating: 4 ,color:'green' },
        { id: 6, name: "watch6", brand: "boatB", price: 6000, image: "watch6", rating: 5 ,color:'black' },
        { id: 7, name: "watch7", brand: "boatC", price: 7000, image: "watch7", rating: 5 ,color:'red' },
        { id: 8, name: "watch8", brand: "boatD", price: 8000, image: "watch8", rating: 5  ,color:'red'}
    ]
}


// Reducers are functions that take the current state and an action as argumen
// ts, and return a new state result. In other words, (state, action) => newState .

//here this is product database 
const ProductReducer = (state = initialProduct, action) => {
switch(action.type){
    case INIT_PRODUCTS:
        return{...state,Product:action.payload}
    
default:      
        return state;
    
}
}


const initialCart = {
    item: []
}

const initialOrder = {
    items: [],
    shipping: 50,
    discount: 50,
    shippingAddress: '',
    totalItems: 0,
    totalCost: 0
}
const OrderReducer = (state = initialOrder, action) => {
    switch (action.type) {
        case CHANGE_ORDER_CART:
            const items = action.payload;
            const totalItems = items.reduce((total, item) => total + (item.quantity * 1), 0)
            const totalCost = items.reduce((total, item) => total + item.price * (item.quantity * 1), 0)
            return { ...state, items: action.payload, totalCost, totalItems }
        case SET_SHIP_ADDRESS:
            return { ...state, shippingAddress: action.payload }

        default:
            return state
    }
}


const CartReducer = (state = initialCart, action) =>
 {
    switch (action.type) {
        case ADD_TO_CART:

            // TAING DATA FROM THE BACKEND
            // if (state.item.find(items => items._id === action.payload._id)) {
            //     return state;
            // }
            // else
            {
                return { ...state, item: [...state.item, { ...action.payload, quantity: 1 }] };


            }
        case EMPTY_CART:
            {
                return { ...state, item: [] }
            } case CHANGE_QUANTITY:
            const olditem = state.item.find(item => item._id === action.payload._id)
            const index = state.item.indexOf(olditem);
            const newItem = [...state.item]
            newItem[index] = action.payload;
            return {
                ...state, item: newItem
            }

        case REMOVE_ITEM: {
            const item = action.payload
            const i = state.item.findIndex(it => it._id === item._id)
            const itemsArray = [...state.item]
            itemsArray.splice(i, 1)
            return { ...state, item: itemsArray }
        }
        //item declared above is used here
        //... represent the previous item within the item array
        {
            return { ...state, item: [...state.item, action.payload] };

        }
        return({...state,item:[...state.ADD_TO_CART.item,action.payload]})
        default:
            return state;
    }

}


// user address reducer

const initialUser = {
    name: "anil",
    email: "anil@gmail.com",
    addresses: [
        {
            fName: "shubh",
            lName: "agrawal",
            city: 'JBP',
            house: 1,
            state: "AP",
            country: "india",
            pincode: 483119,
            phone: 9125658565
        },
        {
            fName: "shubh",
            lName: "agrawal",
            city: 'JBP',
            house: 2,
            state: "AP",
            country: "india",
            pincode: 583119,
            phone: 9125658565
        },
        {
            fName: "shubh",
            lName: "agrawal",
            city: 'JBP',
            house: 3,
            state: "AP",
            country: "india",
            pincode: 683119,
            phone: 9125658565
        },

    ],
    orders: [],
}

const UserReducer = (state = initialUser, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return { ...state, addresses: [...state.addresses, action.payload] };
        case PLACE_ORDER:
            return { ...state, orders: [...state.orders, action.payload] };
        default:
            return state;
    }

}

export { ProductReducer, CartReducer, OrderReducer, UserReducer };
