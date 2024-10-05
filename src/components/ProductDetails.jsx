import { ADD_TO_CART } from "../action";

const ProductDetails = ({ product, addToCart }) => {
    return (
        <div className="container mb-5">
            <div className="row justify-content-center bg-light d-flex flex-md-row m-3 p-5">
                <div className="col-md-4 product-large product_details_img">
                    <img className="img-fluid" src={`/images/${product.image}.png`} alt="" />
                </div>
                <div className="col-md-2 product-small d-flex flex-row flex-md-column justify-content-center order-md-first">
                    <img className="img-fluid product_details_img" src={`/images/${product.image}.png`} alt="" />
                    <img className="img-fluid product_details_img" src={`/images/${product.image}.png`} alt="" />
                    <img className="img-fluid product_details_img" src={`/images/${product.image}.png`} alt="" />
                </div>
                <div className="col-md-6">
                    <h3 className="text-capitalize text-secondary bolder Capitalize">{product.brand}</h3>
                    <h1 className="fs-3 Capitalize">{product.name}</h1>
                    <h4 className="text-secondary fs-6 fw-bold bolder">Price: ₹{product.price}</h4>
                    <div className="color text-secondary">Colors:</div>
                    <div className="py-2">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="colors" id="red" autoComplete="off" checked={product.color === 'red'} />
                            <label className="btn color-btn btn-danger" htmlFor="red"><i className="bi bi-check2"></i></label>

                            <input type="radio" className="btn-check" name="colors" id="blue" autoComplete="off" checked={product.color === 'blue'} />
                            <label className="btn color-btn btn-primary" htmlFor="blue"><i className="bi bi-check2"></i></label>

                            <input type="radio" className="btn-check" name="colors" id="black" autoComplete="off" checked={product.color === 'black'} />
                            <label className="btn color-btn btn-dark" htmlFor="black"><i className="bi bi-check2"></i></label>
                        </div>
                    </div>

                    <div className="text-center">
                        <a className="btn btn-dark w-100 addToCartBtn" role="button" onClick={() => addToCart(product)}>
                            <i style={{ position: "relative", bottom: '2px', padding: "0px 2px" }} className="bi bi-cart-plus-fill"></i>
                            Add To Cart
                        </a>
                    </div>

                    <div className="details text-secondary">Details:
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
