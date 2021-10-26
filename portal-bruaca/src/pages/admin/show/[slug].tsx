import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

import { api } from '../../../services/api';

import styles from './styles.module.scss';


export default function ShowAdmin({ experience }) {
    
    return (
        <>
            <div className={styles.header}>
                <h2>Experiência: {experience.title}</h2>
                <Link href='/admin/edit'>
                    Editar Experiência
                </Link>
            </div>

            <div className={styles.experience}>
                <img src={experience.image} alt={experience.title} />
                
                <div id={styles.faixa}>
                    <div className={styles.infos}>
                        {experience.title}
                        <div> Rensponsável {experience.responsible}</div>
                    </div>
                    
                    
                    <div className={styles.contatos}>
                        <h2>Contatos</h2>
                        <div className={styles.contato}>
                            <a href={`http://api.whatsapp.com/send?1=pt_BR&phone=${experience.whats}`} 
                                target="_blank">
                            <img src="../../../../../icons/whats2.png" alt="" />{experience.whats}</a>
                        </div>

                        <div className={styles.contato}>
                            <a href={`mailto:${experience.email}`}>
                                <img src="../../../../../icons/email2.png" alt="" 
                            />{experience.email}</a>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h2>Descrição</h2>
                        <p>{experience.description}</p>
                    </div>
                </div>
            
            </div>
        </>

       
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;

    const { data } = await api.get(`/experience/${slug}`)

    const experience = {
        id: data.id,
        title: data.title,
        responsible: data.responsible,
        image: data.image,
        whats: data.whats,
        email: data.email,
        description: data.description
    }

    return {
        props: {
            experience
        }
    }
}