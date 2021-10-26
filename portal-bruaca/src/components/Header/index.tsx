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
                        <Link href='/store'>
                            LOJA
                        </Link>
                   </li>
                    <li>
                        <Link href='/admin/index'>
                            Create
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}