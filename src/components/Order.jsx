const Orders = ({ AddItem, order }) => {
    return (
        <div className="container mb-5">
            <div className="d-flex flex-column m-2 justify-content-start flex-md-row align-items-start">
                <div className="col-12 col-md-11 mx-md-2 p-0">
                    {AddItem.map(myItem => (
                        <div className="cart-item p-3 mb-2 border rounded" key={myItem.id}>
                            <div className="d-flex flex-column flex-md-row align-items-center">
                                <img 
                                    style={{ height: "200px", width: "200px" }}
                                    className="img-fluid orderImg col-12 col-md-4 py-2 product_details_img mx-auto" 
                                    src={`images/${myItem.image}.png`} 
                                    alt={myItem.name} 
                                />
                                <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="fw-bold text-capitalize">{myItem.brand}</h5>
                                        <h6 className="text-capitalize">{myItem.name}</h6>
                                        <h6>Quantity: {myItem.quantity}</h6>
                                        <p className="fw-bold">Price: ₹{myItem.price}</p>
                                        <div className="d-flex gap-1">
                                            <input type="radio" className="bg-danger" name={`color-${myItem.id}`} id={`red-${myItem.id}`} />
                                            <label htmlFor={`red-${myItem.id}`}>RED</label>
                                            <input type="radio" className="bg-primary" name={`color-${myItem.id}`} id={`blue-${myItem.id}`} />
                                            <label htmlFor={`blue-${myItem.id}`}>BLUE</label>
                                            <input type="radio" className="bg-black" name={`color-${myItem.id}`} id={`black-${myItem.id}`} />
                                            <label htmlFor={`black-${myItem.id}`}>BLACK</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mt-4">
                        <p>
                            <strong>Order Total:</strong> ₹{(order.totalCost - (order.totalCost * order.discount / 100) + order.shipping).toFixed(2)} |
                            <strong> Address:</strong> {order.shippingAddress.house}, {order.shippingAddress.fName} {order.shippingAddress.lName}, {order.shippingAddress.city}, {order.shippingAddress.pincode}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;
