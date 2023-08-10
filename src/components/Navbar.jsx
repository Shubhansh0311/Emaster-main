import {Link} from 'react-router-dom'
const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">E-market</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart.html"> My Cart <i className="bi bi-cart-plus-fill"></i><span
                                className="badge bg-success cart-badge f-sm">{cartCount}</span></Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#product">Smartwatch</a></li>
                                <li><a className="dropdown-item" href="/#product">Sports</a></li>
                                <li><a className="dropdown-item" href="/#product">Digital</a></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex my-auto " role="search">
                        <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn bg-secondary search-btn " data-bs-toggle="tooltip" data-bs-placement="left"
                            title="type to search products " type="submit"><i className="bi bi-search text-light"></i></button>

                    </form>
                    <div className="navbar-nav">
                        <li className="nav-item dropdown order-last ">
                            <a className="nav-link dropdown-toggle myaccount  text-secondary mx-lg-3  " href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                My Account
                            </a>
                            <ul className="dropdown-menu myaccount ">
                                <li><Link  className="dropdown-item " to="/myorder.html">My orders </Link></li>
                                <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#myModal"
                                    href="/#product">My profile <i className="bi  bi-person-circle " ></i></a></li>
                                <li><a className="dropdown-item" href="index.html">log out</a></li>
                            </ul>
                        </li>
                    </div>            </div>
            </div>
        </nav>
    )
}
export default Navbar;