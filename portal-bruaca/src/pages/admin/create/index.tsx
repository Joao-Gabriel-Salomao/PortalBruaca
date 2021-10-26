import React from "react";
import AdminField from "../fields";
import styles from './styles.module.scss';
import { api } from '../../../services/api';
import { GetStaticProps } from "next";

export default function AdminCreate(){

    return (

        <div className={styles.create}>
            <div className={styles.title_item}>
                <h2>Criando Experiência</h2>
                <button type="submit">Salvar Experiência</button>
            </div>

            <AdminField />
        </div>  
    )
}