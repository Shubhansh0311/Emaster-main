import { Link } from "react-router-dom";

const Cart = ({ AddItem, order, removeItem, cartQuantity }) => {
    return (
        <div className="container mb-5" style={{ background: 'white', marginTop: "10px" }}>
            <div className="m-2">
                <h3>My Cart: {!order.items.length ? 'no items within the cart' : null}</h3>

                <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-7 mx-md-2 p-0">
                        {AddItem.map(myItem => (
                            <div className="cart-item p-3 mb-3 border rounded" key={myItem.id} style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                                <div className="d-flex align-items-center flex-column flex-md-row">
                                    <div className="d-flex justify-content-center col-12 col-md-4 py-2">
                                        <img
                                            className="img-fluid cartImg"
                                            src={`images/${myItem.image}.png`}
                                            alt={myItem.name}
                                            style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-5 d-flex flex-column justify-content-between">
                                        <div>
                                            <h5 className="mb-1 fw-bold">{myItem.brand}</h5>
                                            <h6 className="mb-2">{myItem.name}</h6>
                                            <div className="d-flex align-items-center justify-content-start mb-2">
                                                <h6 className="me-2">Quantity:</h6>
                                                <select
                                                    className="form-select w-auto"
                                                    value={myItem.quantity}
                                                    onChange={(e) => cartQuantity(e.target.value, myItem)}
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                            <p className="mb-0 fw-bold">Price: <strong>₹{myItem.price}</strong></p>
                                            <div className="d-flex flex-wrap gap-1 mb-2">
                                                <input type="radio" name={`color-${myItem.id}`} id={`red-${myItem.id}`} />
                                                <label htmlFor={`red-${myItem.id}`}>RED</label>
                                                <input type="radio" name={`color-${myItem.id}`} id={`blue-${myItem.id}`} />
                                                <label htmlFor={`blue-${myItem.id}`}>BLUE</label>
                                                <input type="radio" name={`color-${myItem.id}`} id={`black-${myItem.id}`} />
                                                <label htmlFor={`black-${myItem.id}`}>BLACK</label>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-danger w-100 mt-2"
                                            onClick={() => removeItem(myItem)}
                                            title="Remove item"
                                            style={{
                                                borderRadius: '5px',
                                                padding: '10px 0',
                                                fontSize: '1.1rem',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            Remove Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {order.items.length ? (
                        <div style={{height:"300px"}} className="col-12 col-md-4 order d-flex flex-grow flex-column p-3 mx-md-2 mt-3 mt-md-0">
                            <h4>Order Details</h4>
                            <div className="d-flex flex-column">
                                <div className="py-1 d-flex justify-content-between">
                                    <span className="billing-item" style={{ fontSize: '0.9rem' }}>Cart Quantity</span>
                                    <span className="billing-cost" style={{ fontSize: '0.9rem' }}>{order.totalItems}</span>
                                </div>
                                <div className="py-1 d-flex justify-content-between">
                                    <span className="billing-item" style={{ fontSize: '0.9rem' }}>Item Cost</span>
                                    <span className="billing-cost" style={{ fontSize: '0.9rem' }}>₹{order.totalCost.toFixed(2)}</span>
                                </div>
                                <div className="py-1 d-flex justify-content-between">
                                    <span className="billing-item" style={{ fontSize: '0.9rem' }}>Ship</span>
                                    <span className="billing-cost" style={{ fontSize: '0.9rem' }}>₹{order.shipping.toFixed(2)}</span>
                                </div>
                                <div className="py-1 d-flex justify-content-between">
                                    <span className="billing-item" style={{ fontSize: '0.9rem' }}>Discount</span>
                                    <span className="billing-cost" style={{ fontSize: '0.9rem' }}>₹{order.discount.toFixed(2)}</span>
                                </div>
                                <div className="py-1 d-flex justify-content-between">
                                    <span className="billing-item" style={{ fontSize: '0.9rem' }}>Total</span>
                                    <span className="billing-cost" style={{ fontSize: '0.9rem' }}>₹{(order.totalCost + order.shipping - (order.discount * order.totalCost / 100)).toFixed(2)}</span>
                                </div>
                            </div>
                            <Link to="/checkout.html" className="button btn py-2 btn-primary mt-4">Buy-now</Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Cart;
