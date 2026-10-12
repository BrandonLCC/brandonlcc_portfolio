


import "./footer.css";
import logo from "../../assets/img/backgrounds/BRLC-logo.svg";

function Footer() {
    return (
        /* footer mt-20 */
        <footer className="footer  bg-[var(--bg-second)] ">
            <img src={logo} alt="Logo BRLC" className="footer__logo mb-5" />
            <p className="text-center cursor-default text-text-muted   ">
            BrandonLC ©  2026 <a href="https://github.com/BrandonLCC" className="footer__link"></a>
            </p>
            <div className="footer__nav ">
                <a href="#" className="footer__link  font-mono text-label">
                    Inicio
                </a>
                <div className="footer__divider" />
                <a href="#" className="footer__link font-mono text-label">
                    Proyectos
                </a>
            </div>
        </footer>
    )
}

export default Footer;