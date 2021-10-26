import { Link } from "react-router-dom";

import { useState } from "react";

import titleImg from "../../assets/images/title2.png";

import "./styles.css";

function Banner() {
    const [active, setMode] = useState(false);

    const ToggleMode = () => {
        setMode(!active);
    }

    return (
        <div className="banner">
            <a href="/">
                <img src={titleImg} alt="titulo" />
            </a>

            <div className="navegaçãoDesktop">
                <main>
                    <li>
                        <Link to="/products">
                            Produtos
                    </Link>
                    </li>
                    <li>
                        <Link to="/store">
                            Loja
                    </Link>
                    </li>
                </main>
            </div>



            <div className="navegacaoResponsiva">
                <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
                
                    <div className="barra1"></div>
                    <div className="barra2"></div>
                    <div className="barra3"></div>
                
                </div>


                <div className={active ? "menu menuOpen" : "menu menuClose"}>
                
                        <li>
                            <Link to="/products">
                                Produtos
                        </Link>
                        </li>
                        <li>
                            <Link to="/store">
                                Loja
                        </Link>
                        </li>
                    
                </div>
            </div>



        </div>
    );
}

export default Banner;