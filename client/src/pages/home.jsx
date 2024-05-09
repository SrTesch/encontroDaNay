import React from "react";
import fundo from "../images/teste.jpeg";

export default function Home(props){
    const divStyle = {
        backgroundImage: `url(${fundo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // cor semi-transparente para a sombra
    };

    return(
        <div className="homePage" style={divStyle}>
            <div style={overlayStyle}></div>
            <div style={{position: 'relative', zIndex: 1}} id="over">
                <a href="/mulheresConectadas" className="homebuttons" id="mulCon"> <strong>Mulheres Conectadas</strong></a>
                <a href="/imersao" className="homebuttons" id="imersao"><strong>Imersão</strong></a>
            </div>
        </div>
    );
}
