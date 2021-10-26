import "./styles.css";

import titleImg from "../../assets/images/title2.png";

import emailIco from "../../assets/icons/email1.png";
import whatsIco from "../../assets/icons/whats.png";
import instaIco from "../../assets/icons/insta.png";
import localIco from "../../assets/icons/local1.png";
import phoneIco from "../../assets/icons/phone1.png";
import faceIco from "../../assets/icons/face1.png";

function Rodape() {
    return (
        <div className="footer">
            <div className="conteudo_rodape">
                <div className="local">
                    <img src={titleImg} alt="email" />
                    <p>Portal Bruaca ©2021</p>
                </div>
                <div className="end">
                    <div className="contato">
                        <a href=""><img src={localIco} alt="email" /></a>
                        <span>Rua Tiradentes, 563, Centro</span>
                        <span>CEP: 79200-000</span>
                    </div>
                    <div className="contato">
                        <img src={emailIco} alt="email" />
                        <span><a href="mailto:portalbruaca@email.com">portalbruaca@email.com</a></span>
                    </div>
                    <div className="contato">
                        <img src={phoneIco} alt="email" />
                        <span><a href="tel:+556732556565">(67) 3255-6565</a></span>
                    </div>
                </div>
                <div className="redes">
                        <img src={whatsIco} alt="whatsapp" />
                        <img src={instaIco} alt="instagram" />
                        <img src={faceIco} alt="facebook" />
                </div>
            </div>
        </div>
    );
}

export default Rodape;