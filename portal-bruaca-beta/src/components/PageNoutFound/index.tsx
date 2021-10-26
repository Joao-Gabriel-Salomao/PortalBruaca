import React from 'react';
import styles from './styles.module.scss';

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <h1>Erro 404</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você tentou acessar está indisponível ou não existe.</p>
        </div>
    )
}

export default PageNotFound