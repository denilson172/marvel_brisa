//useEffect: para carregar na pagina
//useState: para salvar requisição em variavel
import React, { useEffect, useState } from "react";
import api from "../API/api";

import Head from 'next/head';
//import Image from 'next/image';
import styles from '../../styles/Home.module.css';

//indormando ao ts a tipagem dos dados
interface ResponseData {
  id: number;
  title: string;
  description: string;
  thumbnail:{
    path: string,
    extencion: string;
  };
}

//requisição
const Comics: React.FC = () => {
  const [comics, setComics] = useState<ResponseData[]>([]);
  useEffect( () => {
     api
     .get('/comics')
     .then(response => {
       //console.log(response.data.data.results)
       setComics(response.data.data.results);
       //console.log('log 2', comics);
     })
     .catch(err => console.log(err));
}, []);

return (
    <div className={styles.container}>
      <Head>
        <title>MARVEL BRISANET</title>
        <meta name="MARVEL" content="SISTEMA PARA TESTE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MARVEL BRISANET TEST
        </h1>

        <p className={styles.description}>Caixa de busca</p>

        <div className={styles.grid}>
        {comics.map(comics => {
          return(
              <a href={comics.description} className={styles.card}>
                <h2 className={styles.titleLite}>{comics.title}</h2>
                <ul className={styles.ul}>
                  <li key={comics.id}>
                      <img className = {styles.figure} src={comics.thumbnail.path+'.jpg'}/>  
                    <span>{comics.thumbnail.extencion}</span>       
                  </li>
                </ul>
                <button className={styles.buttom} href={comics.description} >Ler mais</button>
                {/*}<p><h5>{comics.description}</h5></p>{*/}
              </a>
          )})}
          </div>
      </main>

      <footer className={styles.footer}>
          Desenvolvido por Denilson Oliveira
      </footer>
    </div>
)

}

export default Comics;