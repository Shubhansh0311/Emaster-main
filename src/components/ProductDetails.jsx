import { ADD_TO_CART } from "../action";

const ProductDetails=({product,addToCart})=>{
   

    return(
        <div class="container mb-5">
        <div class="row justify-conteznt-center d-flex flex-md-row m-3">
            <div class="col-md-4 product-large">
                <img class="img-fluid" src={`/images/${product.image}.jpg`}    alt=""/>
            </div>
            <div class="col-md-2 product-small d-flex flex-row flex-md-column justify-content-start order-md-first ">
                <img class="img-fluid" src={`/images/${product.image}.jpg`} alt=""/>
                <img class="img-fluid" src={`/images/${product.image}.jpg`} alt=""/>
                <img class="img-fluid" src={`/images/${product.image}.jpg`} alt=""/>
            </div>
            <div class="col-md-6">
                <h3 class="text-capitalize text-secondary">{product.brand}</h3>
                <h1 class="fs-3">{product.name}</h1>
                <h4 class="text-secondary fs-6 fw-bold">Price : ${product.price} </h4>
                <div class="color text-secondary">Colors :</div>
                <div class="py-2">
                    <div class="btn-group" role="group " aria-label="Basic radio toggle button group ">
                        <input type="radio" class="btn-check " name="colors" id="red" autocomplete="off" checked={product.color=='red'} />
                        <label class="btn color-btn btn-danger" for="red"><i class="bi bi-check2"></i></label>

                        <input type="radio" class="btn-check" name="colors" id="blue" autocomplete="off" checked={product.color=='black'}/>
                        <label class="btn  color-btn btn-primary" for="blue"><i class="bi bi-check2"></i></label>

                        <input type="radio" class="btn-check" name="colors" id="black" autocomplete="off" checked={product.color=='blue'}/>
                        <label class="btn  color-btn btn-dark" for="black"><i class="bi bi-check2"></i></label>
                    </div> 
            

                </div>
                
                <div class="btn btn-primary w-100 bg-dark"  onClick={()=>addToCart(product)}>
                    <i class="bi bi-cart-plus-fill " ></i>Add To Cart
                </div>
                <div class="details text-secondary">Details:
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                    <code>.accordion-flush</code> class. This is the first item's accordion body.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                    <code>.accordion-flush</code> class. This is the second item's accordion body. Let's
                                    imagine this being filled with some
                                    actual content.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                                    <code>.accordion-flush</code> class. This is the third item's accordion body.
                                    Nothing more exciting happening here in terms of content, but just filling up the
                                    space to make it look, at least at first glance, a bit more representative of
                                    how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    </div>

    )
}
export default ProductDetails;