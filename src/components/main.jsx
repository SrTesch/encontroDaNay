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
                <p id="convencing" className="montserrat">Problemas com autoestima, <br />desafios para empreender, <br />dificuldades em conciliar a vida pessoal e profissional... <br />Sabia que tudo isso é muito mais comum entre as mulheres?</p>
            </section>
            <section>
                <ul id="listinhaSexista">
                    <li>20% das mulheres brasileiras sofrem com baixa autoestima</li>
                    <li>A taxa de empreendedorismo entre mulheres é de 24,6%. Já a dos homens chega a 36,5%</li>
                    <li>As mulheres abandonaram mais seus negócios e tiveram renda menor que os homens nos últimos 4 anos</li>
                    <li>As startups e scale-ups brasileiras fundadas exclusivamente por mulheres são apenas 4,7% do total</li>
                    <li>Dupla jornada faz mulheres trabalharem 3,1 horas a mais que homens</li>
                    <li>O Brasil é o país com o maior número de realizações de cirurgias plásticas no mundo e os procedimentos em mulheres correspondem a quase 90% do total</li>
                </ul>
            </section>
            <section>
                <p className="montserrat convencing2" >Por isso, precisamos ser mais fortes. <br />Precisamos assumir o protagonismo das nossas vidas. Precisamos despertar nossas habilidades, colocar nossos projetos em prática e conquistar nossa independência emocional e financeira!</p>
            </section>
        </main>
    )
}