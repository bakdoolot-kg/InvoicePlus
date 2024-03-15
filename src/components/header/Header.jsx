import {useState} from "react";
import "./header.css";
import {Link} from "react-router-dom";

const Header = () => {
    /*=============== Change Background Header ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 200) header.classList.add("scroll-header");
        else header.classList.remove(".scroll-header");
    });

    /*=============== Toggle Menu ===============*/
    const [toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">InvoicePlus</Link>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a
                                href="#home"
                                onClick={() => setActiveNav("#home")}
                                className={
                                    activeNav === "#home" ? "nav__link active-link" : "nav__link"
                                }
                            >
                                <i className="uil uil-estate nav__icon"></i> Главная
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#about"
                                onClick={() => setActiveNav("#about")}
                                className={
                                    activeNav === "#about" ? "nav__link active-link" : "nav__link"
                                }
                            >
                                <i className="uil uil-user nav__icon"></i> О нас
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#services"
                                onClick={() => setActiveNav("#services")}
                                className={
                                    activeNav === "#services"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-file nav__icon"></i> Услуги
                            </a>
                        </li>

                        <li className="nav__item">
                            <a
                                href="#contact"
                                onClick={() => setActiveNav("#contact")}
                                className={
                                    activeNav === "#contact"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-message nav__icon"></i> Наши контакты
                            </a>
                        </li>
                    </ul>

                    <i
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(!toggle)}
                    ></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;