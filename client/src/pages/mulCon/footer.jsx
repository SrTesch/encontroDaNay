import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer(props){
    return(
        <footer>
            <article className="footer-content"><img src={props.logo} alt="logo Braba" id="logoFooter"/></article>
            <div className="divisor" style={{color:"#00000000"}}>.</div>
            <aside className="footer-content">
                <h3>Contato:</h3>
                <p className="itemFooter">
                    <Link to="https://www.instagram.com/naytesch/"
                        className="linkFooter"
                        target="_blank"><InstagramIcon />Nayara Tesch
                    </Link>
                    <Link to="https://wa.me/558382204431?text=Olá,%20queria%20saber%20mais%20sobre%20o%20encontro%20Mulheres%20+%20Conectadas!"
                    className="linkFooter"
                    target="_blank"><WhatsAppIcon/>WhatsApp
                    </Link>
                </p>
            </aside>
        </footer>
    )
}