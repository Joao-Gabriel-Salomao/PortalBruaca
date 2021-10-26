
import React from "react"
import { GetStaticProps } from 'next';
import { api } from '../../services/api';
import styles from './styles.module.scss';
import Link from "next/link";

export default function ExperiencePage({experiences}){

    

    return (
        <>  
            <div className={styles.areaCards}>
                {experiences.map((experience) => {
                    return (
                        <div key={experience.id} className={styles.card}>
                            <Link href={`/experiences/${experience.id}`}>
                                <img className={styles.image} src={experience.image} />
                            </Link>
                            <div className={styles.descCard}>
                                <h1>{experience.title}</h1>
                                <h2>Responsável {experience.responsible}</h2>
                                <div className={styles.contato}>
                                    <a href={
                                        `http://api.whatsapp.com/send?1=pt_BR&phone=${experience.whats}`} 
                                        target="_blank">
                                    <img src="../icons/whats.png" alt="" />{experience.whats}</a>
                                </div>
                                <div className={styles.contato}>
                                    <a href={`mailto:${experience.email}`}>
                                        <img src="../icons/email.png" alt="" 
                                    />{experience.email}</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}




export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('experience')
  
    const experiences = data.map(expirence => {
      return {
        id: expirence.id,
        title: expirence.title,
        responsible: expirence.responsible,
        image: expirence.image,
        whats: expirence.whats,
        email: expirence.email
      };
    })
    

    return {
      props: {
        experiences
      }
    }
}