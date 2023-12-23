import React, { useState } from "react";
import fotoNay from '../images/nay1.png'

export default function Main(props){

    const [form, setForm] = useState(false);
    
    const showForm = e =>{
        setForm(!form);
    }
    
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [profissao, setProfissao] = useState('');

    
    const createMessage =  () =>{
        const message = `Nome: ${name};
        CPF: ${cpf};
        Email: ${email};
        Profissão: ${profissao}`;
        return message;
    }
    const instanceId = "HQX4H8J5WVE4WY7ONGOKL7A7"
    const instanceToken = "494fa1b2-9ac5-4b10-9ccb-619d4f38a354"
    const userToken = "d0a32fae-3e1d-4e4a-973e-1d6c24d772c5"

    const handleInfos = async e =>{
        e.preventDefault();
        const message = createMessage();
        const url = "https://api.gzappy.com/v1/message/send-message";
        const response = await fetch(url, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'user_token_id': userToken,
            },
            body: JSON.stringify({
                instance_id:instanceId,
                instance_token: instanceToken,
                message: [message],
                phone: "558382204431"
            })
        })
        console.log(response);
    }


    return(
        <main>
            <h1 className="montserrat title" style={{marginBottom: "15px"}}>Cura Emocional</h1>
            {/*<p className="borel nome">Nayara Tesch</p>*/}
            <section id="texts">
                <p id="motivational" className="montserrat">Você não está sozinha!</p>
                <p id="explanation" className="montserrat">Nosso projeto foi pensado exclusivamente para mulheres que não querem desistir. <br />Queremos ver você se tornar uma nova mulher, capaz de superar todas as barreiras e, finalmente, brilhar.</p>
                <p id="tobutton" className="roboto">Preencha agora o formulário para a lista de espera do conectadas 2024!</p>
                <div className="buttonWppdiv">
                    <button onClick={showForm} className="buttonWpp">Inscreva-se</button>
                </div>
                {form && (
                    <div className="divForm">
                        <form onSubmit={handleInfos} id="formParticipante">
                            <label>
                                Nome:
                                <input
                                type="text"
                                placeholder="Digite seu nome"
                                className="inputForm"
                                value={name}
                                onChange={e => { setName(e.target.value)}}
                                required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                type="text"
                                placeholder="Digite seu email"
                                className="inputForm"
                                value={email}
                                onChange={e => { setEmail(e.target.value)}}
                                required
                                />
                            </label>
                            <label>
                                CPF:
                                <input
                                type="text"
                                placeholder="Digite seu cpf"
                                className="inputForm"
                                value={cpf}
                                onChange={e => { setCpf(e.target.value)}}
                                required
                                />
                            </label>
                            <label>
                                Profissão:
                                <input
                                type="text"
                                placeholder="Digite sua profissão"
                                className="inputForm"
                                value={profissao}
                                onChange={e => { setProfissao(e.target.value)}}
                                required
                                />
                            </label>
                            <button className="confirmButton">Enviar</button>
                        </form>
                    </div>
                )}
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