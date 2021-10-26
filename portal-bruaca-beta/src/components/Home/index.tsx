import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Link from 'next/link';

import styles from './styles.module.scss';

export function HomePage() {

    return (
        <>
            <div id={styles.carrousel}>

                <div id={styles.titleMain}>
                    <img src="img/titulo.png" alt="Bruaca" />
                </div>

                <Carousel 
                    autoPlay 
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                >
        
                    <div className={styles.img}>
                        <img src="img/slide2.png" alt="Foto 2" />
                    </div>
                    <div className={styles.img}>
                        <img src="img/slide1.png" alt="Foto 1"/>
                    </div>
                    <div className={styles.img}>
                        <img src="img/slide3.png" alt="Foto 3" />
                    </div>

                </Carousel>

            </div>

            <div id={styles.container}>
                <div id="intro" className={styles.faixa}>
                    <h1>PORTAL BRUACA</h1>

                    <p>
                        O Bruaca Pantaneira é um negócio de impacto social, e uma iniciativa comunitária que tem como objetivo
                        oferecer vivências e produtos culturais de comunidades tradicionais localizadas no território pantanal
                        sul.
                    </p>

                    <div className={styles.imgCentralizada}>
                        <img src="img/intro.jpeg" alt="Artesã" />
                    </div>

                    <p>
                        O Portal Bruaca surgiu por meio de um projeto desenvolvido nas comunidades tradicionais do Pantanal de
                        Mato Grosso do Sul, através de ações de pesquisa, documentação e divulgação do saber ancestral dessas
                        comunidades materializadas em vivências e produtos culturais. Nossa iniciativa busca a valorização do
                        Patrimônio Cultural Material e Imaterial dessas comunidades. A iniciativa configura-se ainda como uma
                        alternativa para a geração de renda e trabalho para esses povos que, por estarem distantes da região
                        urbana, carecem de meios para divulgar suas experiências e comercializar seus produtos.
                    </p>
                </div>

                <div id="conheca" className={styles.faixa}>
                    <h1>CONHEÇA O BRUACA</h1>

                    <div className={styles.areasCards}>
                        <div className={styles.card}>
                            <img src="img/espelho_dagua.jpeg" alt="Espelho d'agua" />
                            <div className={styles.descricaoCard}>
                                <span>
                                    <Link href="/experience">
                                        Experiência
                                    </Link>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="apoiadores" className={styles.faixa}>
                    <h1>APOIADORES</h1>

                    <div className={styles.areaCirculos}>
                        <div className={styles.circuloImg}>
                            <img src="img/ifms-aq-marca-2015.png" alt="IFMS campus Aquidauana" />
                        </div>
                        <div className={styles.circuloImg}>
                            <img src="img/ufms.png" alt="Universidade Federal de Mato Grosso do Sul" />
                        </div>
                        <div className={styles.circuloImg}>
                            <img src="img/ipedi.png" alt="IPEDI" />
                        </div>
                        <div className={styles.circuloImg}>
                            <img src="img/natura.png" alt="Natura" />
                        </div>
                    </div>
                </div>

            </div>

        </>


    )

}
