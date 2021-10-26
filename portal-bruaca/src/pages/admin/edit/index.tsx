
import React from "react";
import AdminField from "../fields";
import styles from "./styles.module.scss";


export default function AdminEdit() {
    return (

        <div className={styles.edit}>
            <div className={styles.header}>
                <h2>Editando Experiência</h2>
                <div className={styles.buttons}>
                    <button type="submit">Deletar</button>
                    <button type="submit">Salvar Experiência</button>
                </div>
            </div>

            <AdminField />

        </div>

    )
}