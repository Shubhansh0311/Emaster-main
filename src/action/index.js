import axios from 'axios'



export const ADD_TO_CART = "ADD_TO_CART";
export const CHANGE_ORDER_CART = "CHANGE_ORDER_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const SET_SHIP_ADDRESS = "SET_SHIP_ADDRESS";
export const PLACE_ORDER = "PLACE_ORDER";
export const EMPTY_CART = "EMPTY_CART"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const INIT_PRODUCTS = "INIT_PRODUCTS";

// for backend data 
// export const INIT_ITEM_AC="INIT_ITEM"//ITEM FROM THE BACKEND

// BACKEND ACTIONS 
//fetching the data from the backend database also we can use fetch here to get the data 

export const initializeProductsAC = ()=>{  

  axios.get('http://localhost:800/allproduct').then(function (res) {
          console.log(res);
          // dispatch({type:INIT_PRODUCTS, payload: res.data})
        })
        .catch(function (error) {
          console.log(error);
        })  

  return function(dispatch){
    
  }
}














// //  it's not safe to string that why we are directly mention it within the type attribute in the cart reducer function 

export const CHANGE_ORDER_CART_AC = (ordercart) => {
  return function (dispatch) {
    setTimeout(() => { dispatch({ type: CHANGE_ORDER_CART, payload: ordercart }) }, 2000)
  }
}
export const ADD_TO_CART_AC = (product) => {
  return function (dispatch) {

    axios.post('http://localhost:800/cart', { item: product }).then(function (response) {
      console.log(response)
      // dispatch({ type: INIT_PRODUCTS, payload:response.data })
    }).catch(function (error) { console.log(error); })

    dispatch({ type: ADD_TO_CART, payload: product })
  }

}
export const CHANGE_QUANTITY_AC = (chngquantity) => {
  return function (dispatch) {
    dispatch({ type: CHANGE_QUANTITY, payload: chngquantity })
  }

}
export const ADD_ADDRESS_AC = (address) => {
  return function (dispatch) {
    dispatch({ type: ADD_ADDRESS, payload: address })
  }

}
export const SET_SHIP_ADDRESS_AC = (shipaddress) => {
  return function (dispatch) {
    dispatch({ type: SET_SHIP_ADDRESS, payload: shipaddress })
  }

}
export const PLACE_ORDER_AC = (placeorder) => {
  return function (dispatch) {
    dispatch({ type: PLACE_ORDER, payload: placeorder })
  }

}
export const EMPTY_CART_AC = (emptyCart) => {
  return function (dispatch) {
    dispatch({ type: EMPTY_CART, payload: emptyCart })
  }

}
export const REMOVE_ITEM_AC = (removeItem) => {
  return function (dispatch) {
    dispatch({ type: REMOVE_ITEM, payload: removeItem })
  }

}