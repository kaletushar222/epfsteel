import { List } from 'react-bootstrap-icons';
import { Link } from "react-scroll";
import Logo from '../assets/images/logo.png';

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const toggleMobileNav = () => {
    if (
        navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        select('#navbar').classList.toggle('navbar-mobile')
    }
}

function Header() {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">
                <nav id="navbar" className="navbar custom-margin">
                    <ul>
                        <li>
                            <Link
                                activeClass=""
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                onClick={toggleMobileNav}
                                className="nav-link scrollto "
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                onClick={toggleMobileNav}
                                className="nav-link scrollto"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                onClick={toggleMobileNav}
                                className="nav-link scrollto"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="products"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                onClick={toggleMobileNav}
                                className="nav-link scrollto"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                onClick={toggleMobileNav}
                                className="nav-link scrollto"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass=""
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                className="getstarted scrollto"
                                onClick={toggleMobileNav}
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                    <List onClick={toggleMobileNav} size={30} color="white" className="mobile-nav-toggle" />
                </nav>

            </div>
        </header>

    );
}

export default Header;
