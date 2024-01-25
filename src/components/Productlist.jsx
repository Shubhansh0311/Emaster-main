import { Link } from "react-router-dom";

const Productlist = ({ sendProduct, addToCart }) => {

    return (

        <div className="container">
            <div className="row">
                {
                    sendProduct.map((showproduct) =>

                        <div className="col-xl-3 col-md-4  col-sm-6 position-relative">
                            <div className="card-product m-sm-3 m-3 ">

                                <i className="bi  bi-heart-fill liked  position-absolute"></i>
                                <i className="bi  bi-heart like position-absolute "></i>
                                <Link to={`product/${showproduct._id}`}> 
                                    <img src={`images/${showproduct.image}.jpg`} data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="click to know more " className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">{showproduct.name}</h6>
                                    <h5 className="card-title">{showproduct.brand}</h5>
                                    <p className="card-text">${showproduct.price} <span className="float-end">
                                        {[...Array(showproduct.rating)].map(() =>
                                            <i className="bi bi-star-fill  rating-stars"></i>
                                        )}
                                  

                                    </span></p>
                                    {/*  */}
                                    <div className="text-center">
                                        <a className="btn btn-dark w-100" role="button" onClick={() => addToCart(showproduct)}><i
                                            className="bi bi-cart-plus-fill" ></i>Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>

    )
}
export default Productlist;
