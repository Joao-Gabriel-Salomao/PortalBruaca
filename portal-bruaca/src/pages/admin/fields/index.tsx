import styles from './styles.module.scss';

export default function AdminField() {

    return (
        <>
            <div className={styles.item}>
                <div>Imagem da Experiência</div>
                <div>
                    <input type="url" name="image" placeholder="http//"/>
                </div>
            </div>

            <div className={styles.item}>
                <div>Nome do Responsável</div>
                <div>
                    <input type="text" name="name" placeholder="Nome do Responsável"  /> 
                </div>
            </div>

            <div className={styles.item}>
                <div>Whatsapp</div>
                <div>
                    <input type="text" name="whatsapp" placeholder="Whatsapp"  />
                </div>
            </div>

            <div className={styles.item}>
                <div>E-mail</div>
                <div>
                    <input type="text" name="e-mail" placeholder="bruaca@email.com" />
                </div>
            </div>

            <div className={styles.item}>
                <div>Descrição</div>
                <div className={styles.textarea}>
                    <textarea id="story" name="information" rows="18" cols="33"></textarea>
                </div>
            </div>

        </>
    )
}