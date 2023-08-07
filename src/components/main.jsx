import React from "react";
import { Link } from "react-router-dom";
import fotoNay from '../images/nay1.png'
export default function Main(props){
    return(
        <main>
            <h1 className="montserrat title" >Mulheres Conectadas</h1>
            <p>por</p>
            <p className="borel nome">Nayara Tesch</p>
            <section id="texts">
                <p id="motivational" className="montserrat">Você não está sozinha!</p>
                <p id="explanation" className="montserrat">Nosso projeto foi pensado exclusivamente para mulheres que não querem desistir. <br />Queremos ver você se tornar uma nova mulher, capaz de superar todas as barreiras e, finalmente, brilhar.</p>
                <p id="tobutton" className="roboto">Aperte no botão abaixo para fazer a inscrição pelo whatsapp!</p>
                <div className="buttonWppdiv">
                    <Link to="https://wa.me/558382204431?text=Olá,%20queria%20saber%20mais%20sobre%20o%20encontro%20Mulheres%20+%20Conectadas!"
                        target="_blank" className="buttonWpp">Inscreva-se agora!
                    </Link>
                </div>
            </section>

            <section className="presentation">
                <img src={fotoNay} alt="Foto Nayara Tesch" id="fotoNay"/>
            </section>
        </main>
    )
}