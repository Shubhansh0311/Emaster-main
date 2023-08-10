const FooterItem = () => {
    return (<div className="footer mt-auto bg-dark text-light footer-item">
        <div className="container py-3">
            <div className="row d-flex footer-direction">

                <div className="col">
                    <h5>Categories</h5>
                    <ul>
                        <li> <a href="#">Sports</a> </li>
                        <li> <a href="#"> Analog </a> </li>
                        <li> <a href="#"> Smartwatch </a> </li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Useful Links</h5>
                    <ul>
                        <li> <a href="#"> Terms </a> </li>
                        <li> <a href="#"> Privacy </a> </li>
                        <li> <a href="#"> About us </a> </li>
                        <li> <a href="#"> Misson </a> </li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Get updates</h5>
                    <div  className="d-flex">
                        <input type="text"  className="form-control footer-input" />
                        <button className="btn footer-btn">Subscibe</button>
                    </div>
                </div>
            </div>
            <p className="text-center">iam_shubhansh subjected to © 2023-2024</p>
        </div>
    </div>)
}
export default FooterItem;