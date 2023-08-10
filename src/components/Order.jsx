

const Orders = ({ AddItem, order }) => {
    // const TotalCost=order.items.reduce((total,item)=>total+item.price*item.quantity,0);

    return (
        <div class="container mb-5">
            <div class="d-flex row flex-column m-2 justify-content-start flex-md-row align-items-start  ">
                <div class="col-md-11 mx-md-2 p-0 ">
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


                            </div>
                        </div>
                    )
                    }
                    <div>
                        <p><strong>Order Total:</strong>{order.totalCost - order.totalCost * order.discount / 100 + order.shipping} |
                       <strong>  Address:</strong> {order.shippingAddress.house},{order.shippingAddress.fName} {order.shippingAddress.lName},{order.shippingAddress.city},{order.shippingAddress.pincode} </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Orders;