import React, { useState } from "react";
import fotoNay from '../../images/nay2.png'
import styles from "./main.module.css"
import Header from "./header2";
import Footer from "../mulCon/footer";
import logo from "../../images/logoImersao2.png"

export default function Main(props){
    const [form, setForm] = useState(false);
    const [confirmation, setConfirmation] = useState(false);
    const [resMessage, setResMessage] = useState('');
    const [backColor, setBackColor] = useState('');
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
        Número: ${email};
        Profissão: ${profissao}`;
        return message;
    }

    const instanceId = "HQX4H8J5WVE4WY7ONGOKL7A7"
    const instanceToken = "494fa1b2-9ac5-4b10-9ccb-619d4f38a354"
    const userToken = "d0a32fae-3e1d-4e4a-973e-1d6c24d772c5"

    const handleInfos = async e =>{
        e.preventDefault();

        try{
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
            });
            if(!response.ok){
                throw new Error (`Erro na requisição: ${response.statusText}`)
            }
            console.log(response);
            setBackColor("green")
            setResMessage("Dados enviados com sucesso!")
            setConfirmation(true)
            setTimeout(()=>{setConfirmation(false)}, 2000)
        }catch(error){
            setBackColor("#900000")
            setResMessage("Houve um erro ao processar seus dados. Tente novamente mais tarde ou entre em contato no whatsapp!(Tem um link no final da página para falar diretamente comigo!)")
            setConfirmation(true);
            setTimeout(()=>{setConfirmation(false)}, 6000)

            console.error("Erro na requisição:", error.message);
        }
    }


    return(
        <main>
            <Header logo={logo} description="Logo da imersão da Nay"/>
            <h1 className="montserrat title" style={{marginBottom: "15px"}}>Liberdade Emocional</h1>
            {/*<p className="borel nome">Nayara Tesch</p>*/}
            <div className={styles.teste}>
            <section id="texts">
                <p id="motivational" className="montserrat">Você não está sozinha!</p>
                <div className={styles.eventoDiv}>
                    <h2 className="borel eventTitle">Imersão:</h2>
                    <p className={styles.eventInfos}>
                        <span className="montserrat">
                        Data: 27/05 <br />
                        Reunião online pelo Meet <br />
                        Valor: R$30,00
                        </span>
                    </p>
                </div>
                <p id="tobutton" className="montserrat">Preencha agora o formulário para a inscrição!</p>
                <div className="buttonWppdiv">
                    <button onClick={showForm} className="buttonWpp">Inscreva-se</button>
                </div>
                {form && (
                    <form onSubmit={handleInfos} className={styles.formPart}>
                        <input
                        type="text"
                        className={styles.inputForm}
                        placeholder="Digite seu nome"
                        // className="inputForm"
                        value={name}
                        id="name"
                        onChange={e => { setName(e.target.value)}}
                        required
                        />
                        <input
                        type="text"
                        placeholder="Digite seu número WhatsApp"
                        className={styles.inputForm}
                        value={email}
                        id="email"
                        onChange={e => { setEmail(e.target.value)}}
                        required
                        />
                        <input
                        type="text"
                        placeholder="Digite seu cpf"
                        className={styles.inputForm}
                        value={cpf}
                        id="cpf"
                        onChange={e => { setCpf(e.target.value)}}
                        required
                        />
                        <input
                        type="text"
                        placeholder="Digite sua profissão"
                        className={styles.inputForm}
                        value={profissao}
                        id="prof"
                        onChange={e => { setProfissao(e.target.value)}}
                        required
                        />
                        <br />
                        {/* <p className={styles.texto}>
                        CHAVE PIX (e-mail): mulheresconectadasjp@gmail.com - (Colocar texto " seu nome / taxa de inscrição" no campo de observação do PIX) <br />
                        Enviar comprovante de pagamento ao e-mail do evento: mulheresconectadasjp@gmail.com
                    </p> */}
                        <button className="confirmButton">Enviar Inscrição</button>
                    </form>
                )}
                {confirmation && (
                <div className="confirmationModal">
                    <div className="confirmationText" style={{backgroundColor: backColor}}>{resMessage}</div>
                </div>
                )}
                <p id="explanation" className="montserrat">Tratar a dependência emocional é importante porque pode afetar negativamente todas as áreas da vida, desde relacionamentos até a saúde mental. Ajuda a promover a independência emocional, fortalecer a autoestima e construir relacionamentos mais saudáveis e equilibrados.</p>
            </section>

            <section className="presentation">
                <img src={fotoNay} alt="Foto Nayara Tesch" id="fotoNay"/>
                <p id="convencing" className="montserrat">A partir de agora você tem a oportunidade de se enriquecer de conhecimentos e ferramentas para ter um relacionamento mais leve, livre daquilo que não te deixa ser feliz genuinamente!</p>
            </section>
            </div>
            <section className="montserrat">
                <ul id="listinhaSexista">
                    <li>Iremos tratar 10 tópicos que farão diferença na tua vida!</li>
                    <li><strong>1. Autoconhecimento:</strong> Entenda suas próprias necessidades, desejos e limites emocionais.</li>
                    <li><strong>2. Estabeleça limites saudáveis:</strong> Aprenda a dizer não quando necessário e a não permitir que os outros manipulem suas emoções.</li>
                    <li><strong>3. Cultive sua independência:</strong> Desenvolva hobbies, interesses e amizades fora do relacionamento para fortalecer sua identidade pessoal.</li>
                    <li><strong>4. Terapia:</strong> Considere a terapia individual ou em grupo para explorar questões emocionais e desenvolver habilidades para lidar com elas de forma saudável.</li>
                    <li><strong>5. Pratique o autocuidado:</strong> Dedique tempo para cuidar de si mesmo, seja através do exercício físico, meditação, hobbies relaxantes ou qualquer outra atividade que o faça sentir-se bem.</li>
                    <li><strong>6. Aprenda a ser feliz com você mesmo:</strong> Cultive uma relação positiva consigo mesmo e aprenda a encontrar a felicidade independente do seu relacionamento com os outros.</li>
                    <li><strong>7. Estabeleça relações saudáveis:</strong> Procure relacionamentos baseados no respeito mútuo, apoio emocional e comunicação aberta.</li>
                    <li><strong>8. Se afaste de relacionamentos tóxicos:</strong> Reconheça quando um relacionamento é prejudicial para você e tenha coragem para se afastar, se necessário.</li>
                    <li><strong>9. Desenvolva habilidades de comunicação:</strong> Aprenda a expressar suas necessidades, desejos e preocupações de maneira clara e assertiva.</li>
                    <li><strong>10. Persistência e paciência:</strong> O processo de se livrar da dependência emocional pode levar tempo e esforço, então seja gentil consigo mesmo durante o processo.</li>
                </ul>
            </section>
            <Footer logo={logo}/>
        </main>
    )
}