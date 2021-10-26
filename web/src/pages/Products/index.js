import Banner from "../../components/Banner";
import Rodape from "../../components/Rodape";


import barroImg from "../../assets/images/barro.jpg";
import barcoImg from "../../assets/images/barco.jpg";
import palhaImg from "../../assets/images/palha.jpg";
import trilhaImg from "../../assets/images/trilha.jpg";
import avesImg from "../../assets/images/aves.jpg";
import bikeImg from "../../assets/images/bike.jpg";
import comidaImg from "../../assets/images/comida.jpg";
import saberesImg from "../../assets/images/saberes.jpg";
import cavalos_passeioImg from "../../assets/images/cavalo_passeio.jpg"; 


import "./styles.css";

function Products() {
    return (
        <div>
            <Banner />
            <div className="container_products">
                <h1>Produtos</h1>
                <div className="cards_products">
                    <div className="card">
                        <div className="image">
                            <img src={palhaImg} alt="produção de palha" />
                        </div>

                        <div className="title">
                            <p>Artesanatos de Palha</p>
                        </div>

                        <div className="text">
                            <p>O processo de coleta das matérias primas, as técnicas tradicionais de tecelagem da palhas, a extração das pinturas, os traços simbólicos, entre outros, 
                            compreendem o imaginário da comunidade e o saber ancestral na atividade</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={barroImg} alt="produção de barro" />
                        </div>

                        <div className="title">
                            <p>Artesanatos de Barros</p>
                        </div>

                        <div className="text">
                            <p>Essa atividade consiste na elaboração de artesanatos manuais, com características tipicamente indígenas. 
                                O processo de coleta das matérias primas, as técnicas tradicionais de tecelagem da palhas, 
                                a extração das pinturas, os traços simbólicos, entre outros</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={barcoImg} alt="passeio de barco" />
                        </div>

                        <div className="title">
                            <p>O espelho d’água</p>
                        </div>

                        <div className="text">
                            <p>Consiste na realização de um passeio de barco com um pescador. Sendo uma atividade costumeira, os pescadores e pescadoras possuem métodos e saberes próprios referentes a atividade, 
                                os locais propícios, os tipos de iscas, as épocas, o tempo de recria, a limpeza</p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="image">
                            <img src={trilhaImg} alt="Trilha feita no pantanal" />
                        </div>

                        <div className="title">
                            <p>Caminhada do saber</p>
                        </div>

                        <div className="text">
                            <p>Consiste na realização de visitas guiadas com pessoas das comunidades tradicionais do Pantanal: conhecer os saberes sobre a terra, as plantas e suas aplicações, 
                                os insetos, cuidados com o ambiente, cultura e ancestralidade.</p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="image">
                            <img src={avesImg} alt="Tucano voando" />
                        </div>

                        <div className="title">
                            <p>Observação de aves</p>
                        </div>

                        <div className="text">
                            <p>Também denominado como “birdwatching”, consiste na realização de contemplação e registro fotográfico de aves que habitam as comunidades pantaneiras, 
                                e que muitas vezes, não acessam costumeiramente o ambiente urbano</p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="image">
                            <img src={bikeImg} alt="Passeio de bike" />
                        </div>

                        <div className="title">
                            <p>Wetland Bike</p>
                        </div>

                        <div className="text">
                            <p>Através do reconhecimento mundial do pantanal pela sua biodiversidade, 
                                será oferecido uma atividade que combina o amor pela pedalada com a natureza</p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="image">
                            <img src={comidaImg} alt="Comida do Pantanal" />
                        </div>

                        <div className="title">
                            <p>Comida cultural </p>
                        </div>

                        <div className="text">
                            <p>Contemplando-se a comida, em uma gastronomia genuinamente regional, 
                                são ofertados encontros com o saber alimentar cultural das comunidades.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={saberesImg} alt="Pessoas aprendendo a como tratar um solo com os ribeirinhos" />
                        </div>

                        <div className="title">
                            <p>Saberes da comunidade</p>
                        </div>

                        <div className="text">
                            <p>Através da indicação do participante, será possível o mesmo ter acesso a cursos 
                                práticos relacionados as comunidades, realizados pelos próprios membros.</p>
                        </div>
                        
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={cavalos_passeioImg} alt="Produção de Artesantos" />
                        </div>

                        <div className="title">
                            <p>Passeio a cavalo</p>
                        </div>

                        <div className="text">
                            <p>Paseio a cavalo realizado com guia, ribeirinho ou indigena, por trilhas
                                onde á possibilidade de avistar animais. 
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            <Rodape />
        </div>
    );
}

export default Products;