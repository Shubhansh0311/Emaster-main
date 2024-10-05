import { Link } from "react-router-dom";

const Productlist = ({ sendProduct, addToCart }) => {
    return (
        <div className="container">
            <div className="row">
                {sendProduct.map((showproduct) => (
                    <div key={showproduct.id} className="col-xl-3 col-md-4 col-sm-6 mb-4">
                        <div className="card h-100 shadow-lg rounded" >
                            <div className="position-relative">
                                <Link to={`product/${showproduct.id}`}>
                                    <div className="image-container">
                                        <img
                                            src={`images/${showproduct.image}.png`}
                                            className="card-img-top img-fluid product-image"
                                            alt={showproduct.name}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Click to know more"
                                        />
                                    </div>
                                </Link>
                                <div className="overlay"></div>
                            </div>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title bolder capitalize">{showproduct.brand}</h5>
                                    <h6 className="card-subtitle mb-1 text-muted capitalize">{showproduct.name}</h6>
                                    <p className="card-text bolder ">
                                        ₹{showproduct.price}
                                        <span className="float-end">
                                            {[...Array(showproduct.rating)].map((_, index) => (
                                                <i key={index} className="bi bi-star-fill rating-stars"></i>
                                            ))}
                                        </span>
                                    </p>
                                </div>
                                <div className="text-center my-3">
                                    <a className="btn btn-dark w-100 addToCartBtn" role="button" onClick={() => addToCart(showproduct)}>
                                        <i style={{ position: "relative", bottom: '2px', padding: "0px 2px" }} className="bi bi-cart-plus-fill"></i>
                                        Add To Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Glass effect style







export default Productlist;
