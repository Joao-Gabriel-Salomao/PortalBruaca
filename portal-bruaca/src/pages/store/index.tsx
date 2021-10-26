
import React from "react"

import styles from './styles.module.scss';

export default function StorePage(){
    return (
        <>
            <div className={styles.areaCards}>
                <div className={styles.card}>
                    <img src="../img/artesanato_palha.jpeg" alt="Artesanato de palha" />
                    <div className={styles.descCard}>
                        <h1>Artesanatos de palha</h1>
                        <p>O processo de coleta das matérias primas, 
                            as técnicas tradicionais de tecelagem da palhas, a extração 
                            das pinturas, os traços simbólicos, entre outros, 
                            compreendem o imaginário da comunidade e o saber ancestral na atividade.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="../img/artesanato_palha.jpeg" alt="Artesanato de palha" />
                    <div className={styles.descCard}>
                        <h1>Artesanato de barro</h1>
                        <p>Essa atividade consiste na elaboração de artesanatos 
                            manuais, com características tipicamente indígenas. 
                            O processo de coleta das matérias primas, 
                            as técnicas tradicionais de tecelagem da palhas, 
                            a extração das pinturas, os traços simbólicos, entre outros.</p>
                    </div>
                </div>
            </div>
        </>
    )
}