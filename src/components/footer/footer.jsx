


import "./footer.css";
import logo from "../../assets/img/backgrounds/BRLC-logo.svg";

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo BRLC" className="footer__logo " />
            <p className="footer__text  ">
            BrandonLC ©  2026 <a href="https://github.com/BrandonLCC" className="footer__link"></a>
            </p>
            <div className="footer__nav ">
                <a href="#" className="footer__link">
                    Inicio
                </a>
                <div className="footer__divider" />
                <a href="#" className="footer__link">
                    Proyectos
                </a>
            </div>
        </footer>
    )
}

export default Footer;