import { Link } from "react-router-dom";

const Cart = ({ AddItem, order,removeItem, cartQuantity }) => {
    // const TotalCost=order.items.reduce((total,item)=>total+item.price*item.quantity,0);

    return (
        <div class="container mb-5">
            <div class="d-flex row flex-column m-2 justify-content-start flex-md-row align-items-start  ">

                <h3>My Cart: {!order.items.length ? 'no items within the cart' : null}</h3>
                <div class="col-md-7 mx-md-2 p-0 ">
                    
                    {AddItem.map(myItem =>
                        <div class="cart-item p-3   ">
                            <div class=" d-flex flex-row ">
                                <img class="img-fluid col-2 py-2" src={`images/${myItem.image}.jpg`} alt="" />
                                <div class="col-6">
                                    <h5>{myItem.brand}</h5>
                                    <h6>{myItem.name}</h6>
                                    <h6>Quantity: {myItem.quantity}</h6>
                                    <p>Price : ${myItem.price}</p>
                                    <div class="d-flex">
                                        <input type="radio" class="bg-danger" name="color" id="red" />RED
                                        <input type="radio" class="bg-primary" name="color" id="blue" />BLUE
                                        <input type="radio" class="bg-black" name="color" id="black" />BLACK
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    Quantity
                                    <select name="selectmenu" id=" selectid " value={myItem.quantity} onChange={(e) => cartQuantity(e.target.value, myItem)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>

                                </div>
                                <div onClick={()=>removeItem(AddItem)}
                                    data-bs-target="#removemyModal"><i class="bi bi-x-circle-fill"></i>

                                </div>
                            </div>
                        </div>

                    )
                    }
                </div>
                {order.items.length ? <div class="col-md-4 order d-flex flex-grow flex-column p-3 ">
                    <h4>Order detail</h4>
                    <div class="d-flex py-2 flex-row align-items-start ">
                        <input type="text " class="form-control" placeholder="promo code" />
                        <button class="btn btn-primary ">Apply</button>
                    </div>
                    <div class="d-flex py-2 justify-content-between">
                        <span class="billing-item">Cart Quantity</span>
                        <span class="billing-cost">{order.totalItems}</span>
                    </div>
                    <div class="d-flex py-2 justify-content-between">
                        <span class="billing-item">Item Cost</span>
                        <span class="billing-cost">${order.totalCost}</span>
                    </div>
                    <div class="d-flex py-2 justify-content-between">
                        <span class="billing-item">Ship</span>
                        <span class="billing-cost">${order.shipping}</span>
                    </div>
                    <div class="d-flex py-2 justify-content-between">
                        <span class="billing-item">Discount</span>
                        <span class="billing-cost">${order.discount}</span>
                    </div>
                    <div class="d-flex py-2 justify-content-between">
                        <span class="billing-item">Total</span>
                        <span class="billing-cost">${order.totalCost + order.shipping - order.discount * order.totalCost / 100}</span>
                    </div>
                    <Link to="/checkout.html" class="button btn py-2 btn-primary">Buy-now</Link>
                </div> : null}

            </div>
        </div>

    )
}
export default Cart;