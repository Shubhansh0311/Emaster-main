import { useState } from "react";

const Checkout = ({ order, user, addAddress, setShipAddress, placeOrder }) => {
    const blankAddress = { fName: "", lName: "", phone: '', address2: '', address1: '', zipcode: '', state: '', country: '' }
    const [address, setAddress] = useState(blankAddress)
const[itemCount,setItemsCount]=useState(order.totalItems)
    const validateAddress = (address) => {
        if (!address.fName || !address.lName || !address.phone || !address.zipcode || !address.address1 || !address.country || !address.state);
        //  { alert("enter a valid address") }/
        else {
            addAddress(address);
            setAddress(blankAddress)
        }
    }
    return (
        <div class="container ">
            <div  style={{background:"white"}} className="p-4 m-5 ">
            <div class="py-5 text-center">

                <h2>Checkout</h2>
            </div>

            <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart</span>
                        <span class="badge p-2 bg-success rounded-pill">{itemCount}</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 class="my-0">Total</h6>
                                <small class="text-muted">cart item</small>
                            </div>
                            <span class="text-muted">₹{order.totalCost}</span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between bg-light">
                            <div class="text-success">
                                <h6 class="my-0">Shipping Charge</h6>
                            </div>
                           {order!=null?( <span class="text-success">₹{order.shipping}</span>):"₹0"}
                        </li>
                        <li class="list-group-item d-flex justify-content-between bg-light">
                            <div class="text-secondary">
                                <h6 class="my-0">total</h6>
                                <strong class="text-success">discount</strong>
                            </div>
                            <span class="text-success">₹{order.totalCost * order.discount / 100}</span>
                        </li>

                        <li className="list-group-item d-flex justify-content-between">
    <span>Total </span>
    {order!=null ? (
        <strong>
            ₹{order.totalCost + order.shipping - (order.totalCost * order.discount) / 100}
        </strong>
    ) : (
        <strong>₹0</strong>
    )}
</li>

                    </ul>



                    {order.shippingAddress ? <div class="card">
                        <div class="card-body">
                            <h5 class="text-success">Delievery Address</h5>
                            <h5 class="card-title">{order.shippingAddress.fName} {order.shippingAddress.lName}</h5>
                            <h6 class="card-subtitle mb-2 text-muted ">{order.shippingAddress.house},{order.shippingAddress.city},{order.shippingAddress.country},{order.shippingAddress.pincode}</h6>
                            <p class="card-text ">
                                +91-{order.shippingAddress.phone}</p>
                        </div>
                    </div> : null}


                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Shipping address</h4>

                    {user.addresses.map(address =>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{address.fName} {address.lName}</h5>
                                <h6 class="card-subtitle mb-2 text-muted ">{address.house},{address.city},{address.country},{address.pincode}</h6>
                                <p class="card-text ">
                                    +91-{address.phone}</p>
                                <input type="radio" name="addAddress" id="" onClick={e => setShipAddress(address)} /> Use this address
                            </div>
                        </div>
                    )}
                    <hr class="my-4" />
                    <h5>OR</h5>
                    <h4 class="mb-3">Add new Address</h4>
                    <form class="needs-validation" novalidate="" onSubmit={(e) => { e.preventDefault(); validateAddress(address) }}>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" class="form-control" id="firstName" placeholder="" value={address.fName} onChange={e => setAddress({ ...address, fName: e.target.value })}
                                    fdprocessedid="1zurbw" />
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" class="form-control" id="lastName" placeholder="" value={address.lName} onChange={e => setAddress({ ...address, lName: e.target.value })}
                                    fdprocessedid="2mznn" />
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>



                        <div class="mb-3">
                            <label for="phone">Phone <span class="text-muted"></span></label>
                            <input type="tel" class="form-control" id="phone" placeholder="+91-1111111111"
                                fdprocessedid="ca6bt8" value={address.phone} onChange={e => setAddress({ ...address, phone: e.target.value })} />
                            <div class="invalid-feedback">
                                Please enter a valid phone for shipping updates.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address">Address1</label>
                            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" value={address.address1} onChange={e => setAddress({ ...address, address1: e.target.value })}
                                fdprocessedid="t0hdp" />
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                            <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" value={address.address2} onChange={e => setAddress({ ...address, address2: e.target.value })}
                                fdprocessedid="ekkjnl" />
                        </div>

                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="country">Country</label>
                                <select class="custom-select d-block w-100 form-control" id="country" required="" fdprocessedid="7uhwoq" value={address.country} onChange={e => setAddress({ ...address, country: e.target.value })}>
                                    <option value="">Choose...</option>
                                    <option>USA</option>
                                    <option>India</option>
                                    <option>China</option>
                                    <option>Australia</option>
                                    <option>South Africa</option>
                                    <option>UK</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state">State</label>
                                <select class="custom-select d-block w-100 form-control" id="state" required="" fdprocessedid="7kucws" value={address.state} onChange={e => setAddress({ ...address, state: e.target.value })}>
                                    <option value="">Choose...</option>
                                    <option>MP</option>
                                    <option>UP</option>
                                    <option>AP</option>

                                </select>
                                <div class="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control" id="zip" placeholder="" required="" value={address.zipcode} onChange={e => setAddress({ ...address, zipcode: e.target.value })}
                                    fdprocessedid="70rt6x" />
                                <div class="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>
                        <hr class="mb-4" />

                        <button class="btn btn-primary btn-lg btn-block flex col-12" type="submit"
                            fdprocessedid="h0gg9n">Add Address</button>
                        <button class="btn btn-success mt-4 btn-lg btn-block flex col-12 w-100" onClick={e => {placeOrder()
setItemsCount(0);}

                        }
                            fdprocessedid="h0gg9n">Continue to Checkout</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Checkout;