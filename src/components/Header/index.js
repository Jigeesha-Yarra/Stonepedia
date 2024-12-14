import {Link} from "react-router-dom"
import "./index.css"

const Header = () => (
    <nav className="nav-header">
        <div className="nav-content">
            <img className="nav-logo" src="https://stonepedia.in/wp-content/uploads/2024/10/icon-01.png" alt="stonepedia" />
            <ul className="nav-menu">
                <li className="nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                <Link to="/stones">Stones</Link>
                </li>
                <li className="nav-link">
                <Link to="/about">About</Link>
                </li>
                <li className="nav-link">
                <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header

