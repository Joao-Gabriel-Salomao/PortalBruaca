import { Link } from "react-router-dom";

import Banner from "../../components/Banner";
import Rodape from "../../components/Rodape";

import Slider from "infinite-react-carousel";

import cavalos_passeioImg from "../../assets/images/cavalo_passeio.jpg";
import cavalos from "../../assets/images/cavalos.jpg";
import comunidadeImg from "../../assets/images/comunidade.jpg";
import barroImg from "../../assets/images/barro.jpg";
import barcoImg from "../../assets/images/barco.jpg";

import logoIFMS from "../../assets/images/logoIFMS150.png";
import logoIPEDI from "../../assets/images/logoIPEDI150.png";
import logoNATURA from "../../assets/images/logoNATURA150.png";
import logoUFMS from "../../assets/images/logoUFMS150.png";

import barro5Img from "../../assets/images/barro5.jpg";

import "./styles.css";


function Home() {
    return (
        <div>
            <Banner />

            <div className="bloco1">

                <div className="texto">
                    <h1>Bruaca</h1>
                    <span></span>
                    <p>Um acervo online do Patrimônio cultural material e imaterial do Pantanal Sul</p>
                </div>

                <Slider dots className="carousel">
                    <div className="imgs">
                        <img src={comunidadeImg} alt="Barco com indigenas" />
                    </div>
                    <div className="imgs">
                        <img src={barroImg} alt="Artesanato de Barro" />
                    </div>
                    <div className="imgs">
                        <img src={cavalos_passeioImg} alt="Passeio a cavalo" />
                    </div>
                </Slider>

               

            </div>


            <div className="card_historia">
                <h1>Portal Bruaca</h1>

                <p>
                    Bruaca pantaneira é um negócio de impacto social, e
                    uma iniciativa comunitária que tem como objetivo oferecer vivências e
                    produtos culturais de comunidades
                    tradicionais localizadas no território pantanal sul.
                </p>


                <img src={cavalos} alt="passeio a cavalo" />

                <p>
                    O Portal Bruaca surgiu por meio de um projeto desenvolvido nas comunidades
                    tradicionais do Pantanal de Mato Grosso do Sul, através de ações de pesquisa,
                    documentação e divulgação do saber ancestral dessas comunidades materializadas em vivências e
                    produtos culturais. Nossa iniciativa busca a valorização do Patrimônio Cultural Material e
                    Imaterial dessas comunidades.  A iniciativa configura-se ainda como uma alternativa para a
                    geração de renda e trabalho para esses povos que, por estarem distantes da região urbana,
                    carecem de meios para divulgar suas experiências e comercializar seus produtos.
                </p>

            </div>


            <div className="bloco">
                <h1>Conheça o Portal</h1>

                <div className="resumo">
                    <div className="card_principal">
                        <Link to="/products">
                            <div className="card">
                                <img src={barcoImg} alt="Pessoa remando" />

                                <div className="title">
                                    <p>Produtos</p>
                                    <span></span>
                                </div>
                            </div>
                        </Link>

                        
                    </div>

                    <div className="card_principal">
                        <Link to="/store">
                            <div className="card">
                                <img src={barro5Img} alt="Artesanato de barro" />

                                <div className="title">
                                    <p>Artesanatos</p>
                                    <span></span>
                                </div>
                            </div>
                        </Link>

                    
                    </div>
                </div>

            </div>


            <div className="container_apoiadores">
                <h1>Apoiadores</h1>

                <div className="apoiadores">
                    <div className="imgApoiadores">
                        <a href="https://www.ifms.edu.br/" target="_blank">
                            <img src={logoIFMS} alt="logo do ifms" />
                        </a>
                    </div>

                    <div className="imgApoiadores">
                        <a href="http://ipedi.blogspot.com/" target="_blank">
                            <img src={logoIPEDI} alt="logo do ipedi" />
                        </a>
                    </div>

                    <div className="imgApoiadores">
                        <a href="https://www.natura.com.br/" target="_blank">
                            <img src={logoNATURA} alt="logo da natura" />
                        </a>
                    </div>

                    <div className="imgApoiadores">
                        <a href="https://www.ufms.br/" target="_blank">
                            <img src={logoUFMS} alt="logo do ufms" />
                        </a>
                    </div>
                </div>

            </div>


            <Rodape />
        </div>

    );
}

export default Home;