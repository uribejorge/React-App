import React from 'react';
import './Footer.css'; // Asegúrate de que este archivo exista para los estilos del Footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
                <ul className="footer-links">
                    <li><a href="/privacidad">Política de Privacidad</a></li>
                    <li><a href="/terminos">Términos y Condiciones</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
