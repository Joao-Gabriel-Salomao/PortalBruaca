import Banner from "../../components/Banner";
import Rodape from "../../components/Rodape";


import barro1Img from "../../assets/images/barro1.jpg";
import barro2Img from "../../assets/images/barro2.jpg";
import barro3Img from "../../assets/images/barro3.jpg";
import barro4Img from "../../assets/images/barro4.jpg";
import barro5Img from "../../assets/images/barro5.jpg";
import barro6Img from "../../assets/images/barro6.jpg";

import palha1Img from "../../assets/images/palha1.jpeg";
import palha2Img from "../../assets/images/palha2.jpg";
import palha3Img from "../../assets/images/palha3.jpg";
import palha4Img from "../../assets/images/palha4.jpg";
import palha5Img from "../../assets/images/palha5.jpg";
import palha6Img from "../../assets/images/palha6.jpg";

import cardIcon from "../../assets/icons/cartao.png";
import cashIcon from "../../assets/icons/dinheiro.png";
import cardIconM from "../../assets/icons/cartaoM.png";



import "./styles.css";

function Store() {
    return (
        <div>
            <Banner />
            <div className="container_store">

                <div className="title_store">
                    <h1>Artesanatos de Barros</h1>

                    <div className="cards_store">
                        <div className="card">
                            <div className="image">
                                <img src={barro1Img} alt="Onça artesanato de barro" />
                            </div>

                            <div className="title">
                                <p>Onças</p>
                            </div>

                            <div className="text">
                                <p>Valor: R$ 40,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={barro2Img} alt="Chaleira artesanato de barro" />
                            </div>

                            <div className="title">
                                <p>Chaleiras de Barro</p>
                            </div>

                            <div className="text">
                                <p>Valor: R$ 100,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={barro3Img} alt="Vaso artesanato de barro" />
                            </div>

                            <div className="title">
                                <p>Vaso</p>
                            </div>

                            <div className="text">
                                <p>Valor: 60,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={barro4Img} alt="Vasos de barro" />
                            </div>

                            <div className="title">
                                <p>Vasos</p>
                            </div>

                            <div className="text">
                                <p>Valor: 120,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={barro5Img} alt="Mulheres ribeirinhas artesanto de barro" />
                            </div>

                            <div className="title">
                                <p>Mulheres Ribeirinhas</p>
                            </div>

                            <div className="text">
                                <p>Valor: 80,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master" />
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={barro6Img} alt="Familía artesanato de barro" />
                            </div>

                            <div className="title">
                                <p>Familía</p>
                            </div>

                            <div className="text">
                                <p>Valor: 75,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="title_store">
                    <h1>Artesanatos de Palhas</h1>

                    <div className="cards_store">
                        <div className="card">
                            <div className="image">
                                <img src={palha1Img} alt="Cesta de palha" />
                            </div>

                            <div className="title">
                                <p>Cesta</p>
                            </div>

                            <div className="text">
                                <p>Valor: 80,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={palha2Img} alt="Chapéu de palha" />
                            </div>

                            <div className="title">
                                <p>Chapéu</p>
                            </div>

                            <div className="text">
                                <p>Valor: 100,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={palha3Img} alt="bolsa" />
                            </div>

                            <div className="title">
                                <p>Bolsa</p>
                            </div>

                            <div className="text">
                                <p>Valor: 120,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={palha4Img} alt="bolsinha" />
                            </div>

                            <div className="title">
                                <p>Bolsinha</p>
                            </div>

                            <div className="text">
                                <p>Valor: 110,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={palha5Img} alt="produtos de palha" />
                            </div>

                            <div className="title">
                                <p>Vasos</p>
                            </div>

                            <div className="text">
                                <p>Valor: 200,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                        <div className="card">
                            <div className="image">
                                <img src={palha6Img} alt="Báu" />
                            </div>

                            <div className="title">
                                <p>Báu</p>
                            </div>

                            <div className="text">
                                <p>Valor: 250,00</p>
                            </div>

                            <div className="title_pagaments">
                                <p>Formas de pagamento</p>
                            </div>

                            <div className="pagaments">
                                <img src={cardIcon} alt="cartão" />
                                <img src={cashIcon} alt="dinheiro" />
                                <img src={cardIconM} alt="cartão master"/>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Rodape />
        </div>
    );

}
export default Store;