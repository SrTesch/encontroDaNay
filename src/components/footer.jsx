import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

export default function Footer(props){
    return(
        <footer>
            <article className="footer-content">Teste</article>
            <div className="divisor"> . </div>
            <aside className="footer-content">
                <h3>Contato:</h3>
                <p className="itemFooter">
                    <Link to="https://www.instagram.com/naytesch/"
                        className="linkFooter"
                        target="_blank"><InstagramIcon />Nayara Tesch
                    </Link>
                </p>
            </aside>
        </footer>
    )
}