import styles from './styles.module.scss';

export function Footer(){

    return(
       <footer className={styles.footerContainer}>
            <div className={styles.local}>
                <img src="/img/titulo.png" alt="email" />
                <p>Portal Bruaca ©2021</p>
            </div>
            <div className={styles.end}>
                <div className={styles.contato}>
                    <a href=""><img src="/icons/local.png" alt="email" /></a>
                    <span>Rua Tiradentes, 563, Centro</span>
                    <span>CEP: 79200-000</span>
                </div>
                <div className={styles.contato}>
                    <img src="/icons/email.png" alt="email" />
                    <span><a href="mailto:portalbruaca@email.com">portalbruaca@email.com</a></span>
                </div>
                <div className={styles.contato}>
                    <img src="/icons/tel.png" alt="email" />
                    <span><a href="tel:+556732556565">(67) 3255-6565</a></span>
                </div>
            </div>
            <div className={styles.redes}>
                <img src="/icons/whats.png" alt="whatsapp" />
                <img src="/icons/insta.png" alt="instagram" />
                <img src="/icons/face.png" alt="facebook" />
            </div>
       </footer>
    )
}

