import { Link } from "react-router-dom";

const Productlist = ({ sendProduct, addToCart }) => {
    return (
        <div className="container">
            <div className="row">
                {sendProduct.map((showproduct) => (
                    <div key={showproduct.id} className="col-xl-3 col-md-4 col-sm-6 mb-4">
                        <div className="card h-100 shadow-lg rounded" style={glassEffectStyle}>
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
                                    <h6 className="card-subtitle mb-1 text-muted">{showproduct.name}</h6>
                                    <h5 className="card-title">{showproduct.brand}</h5>
                                    <p className="card-text">
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
const glassEffectStyle = {
    background: "rgb(195 197 210 / 90%)",
    backdropFilter:  "blur(15px)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: '10px',
    position: 'relative',
};






export default Productlist;
