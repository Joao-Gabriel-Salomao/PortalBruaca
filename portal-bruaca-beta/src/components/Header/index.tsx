import styles from './styles.module.scss';

import Link from 'next/link';

export function Header(){

    return(
        <header className={styles.headerContainer}>
            <div id={styles.titleHeader}>
               <Link href='/'><img src='/img/titulo.png' alt="titulo do portal" /></Link>
            </div>

            <div id={styles.menuHeader}>
                <ul>
                    <li>
                        <Link href='/experience'>
                            <a>EXPERIÊNCIA</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/experience'>
                            <a>HOME</a>
                        </Link>
                    </li>
                </ul>
            </div>


            <div id={styles.menuResponsivo}>
                <ul>
                    <li>
                       <Link href='/'>
                            <img src="img/home.png" alt="Home" />
                        </Link>
                    </li>
                    <li>
                        <Link href='/experience'>
                            <img src="img/experiencias.png" alt="Experiências" />
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}