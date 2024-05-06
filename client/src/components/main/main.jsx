import React, { useState } from "react";
import fotoNay from '../../images/nay1.png'
import styles from "./main.module.css"
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
        Email: ${email};
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
            <h1 className="montserrat title" style={{marginBottom: "15px"}}>Cura Emocional</h1>
            {/*<p className="borel nome">Nayara Tesch</p>*/}
            <div className={styles.teste}>
            <section id="texts">
                <p id="motivational" className="montserrat">Você não está sozinha!</p>
                <div className={styles.eventoDiv}>
                    <h2 className="borel eventTitle">Próximo evento:</h2>
                    <p className={styles.eventInfos}>
                        <span className="montserrat">
                        Data: em Julho <br />
                        Local: Rio de Janeiro/RJ <br />
                        Valor: R$50,00
                        </span>
                    </p>
                </div>
                <p id="tobutton" className="montserrat">Preencha agora o formulário para a lista de espera do conectadas 2024!</p>
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
                        placeholder="Digite seu email"
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
                        <p className={styles.texto}>
                        CHAVE PIX (e-mail): mulheresconectadasjp@gmail.com - (Colocar texto " seu nome / taxa de inscrição" no campo de observação do PIX) <br />
                        Enviar comprovante de pagamento ao e-mail do evento: mulheresconectadasjp@gmail.com
                        </p>
                        <button className="confirmButton">Enviar Inscrição</button>
                    </form>
                )}
                {confirmation && (
                <div className="confirmationModal">
                    <div className="confirmationText" style={{backgroundColor: backColor}}>{resMessage}</div>
                </div>
                )}
                <p id="explanation" className="montserrat">Nosso projeto foi pensado exclusivamente para mulheres que não querem desistir. <br />Queremos ver você se tornar uma nova mulher, capaz de superar todas as barreiras e, finalmente, brilhar.</p>
            </section>

            <section className="presentation">
                <img src={fotoNay} alt="Foto Nayara Tesch" id="fotoNay"/>
                <p id="convencing" className="montserrat">A partir de agora você é convidado(a) a mergulhar no alívio e na cura das bagagens emocionais para que a viagem da sua vida, seja mais livre, mais leve, do jeito que você planejou e sonhou.</p>
            </section>
            </div>
            <section className="montserrat">
                <ul id="listinhaSexista">
                    <li>Todos de alguma forma ou em algum momento da vida, já acumularam algo nas emoções</li>
                    <li>E a delicadeza disso, é que, o que está mal resolvido dentro, CERTAMENTE TRAZ REFLEXOS PRA FORA.</li>
                    <li>Atitudes, hábitos ruins, decisões impulsivas e inconsequentes, são claramente resultados de bagagens emocionais acumuladas e carregadas ao longo da nossa história.</li>
                    <li>A proposta e o propósito desse projeto é orientativa, esclarecedora e resulta na experiência extraordinária de libertação.</li>
                </ul>
            </section>
            <section>
                <p className="montserrat convencing2" >Por isso, precisamos ser mais fortes. <br />Precisamos assumir o protagonismo das nossas vidas. Precisamos despertar nossas habilidades, colocar nossos projetos em prática e conquistar nossa independência emocional!</p>
            </section>
        </main>
    )
}