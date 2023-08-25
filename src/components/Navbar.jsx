import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"


const Navbar = (props) => {
  const {cart} = useCart()
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div class="container-fluid">
        <a class="navbar-brand mx-3" href="/" onClick={() => props.handleShow(false)}>My Shopping</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Link</a>
            </li>

    <Link to="/cart">
            <li class="nav-item mt-2 mx-2">
              <i className="fas fa-cart-plus"></i>
              <sup> {cart.length} </sup>
            </li>
    </Link>

          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
