const CarouselItem = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner ">
               
                
                <div className="carousel-item  active " data-bs-interval="3000">
                    <img style={{padding:'10px'}} src="carouselimg/pic1.jpeg" className="d-block carousel1 h-sm-[250px] w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                            <h5>Time with Perfection</h5>
                            <p>See the latest trending and luxuries watch at your comfort</p>
                        </div>
                </div>
                <div className="carousel-item " data-bs-interval="3000">
                    <img style={{padding:'10px'}} src="carouselimg/pic2.jpeg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Timeless Elegance </h5>
                            <p>Elevate your style with our exquisite collection of luxury watches</p>
                        </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img style={{padding:'10px'}} src="carouselimg/pic3.jpeg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                            <h5>Classic Charm</h5>
                            <p>Rediscover the art of watchmaking with our timeless classics</p>
                        </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img style={{padding:'10px'}} src="carouselimg/pic4.jpeg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>The art of being unique
                            </h5>
                            <p> Discover the future of timekeeping with our cutting-edge smartwatches</p>
                        </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img style={{padding:'10px'}} src="carouselimg/pic7.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Time to Evolve</h5>
                            <p>Find your perfect everyday watch that blends functionality with style</p>
                        </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img style={{padding:'10px'}} src="carouselimg/pic5.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Watches for Lifetime</h5>
                            <p>Embrace simplicity with our sleek and minimalist watch designs</p>
                        </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img style={{padding:'10px'}} src="carouselimg/pic6.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Stay Ahead of Time</h5>
                            <p>Explore the latest trends in watch design and functionality</p>
                        </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img style={{padding:'10px'}} src="carouselimg/pic8.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Own a Piece of Art</h5>
                            <p> Discover our limited edition watches that blend craftsmanship and exclusivity</p>
                        </div>
                </div>
     
           
     
            
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default CarouselItem;