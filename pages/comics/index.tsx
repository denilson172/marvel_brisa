//useEffect: para carregar na pagina
//useState: para salvar requisição em variavel
import React, { useEffect, useState } from "react";
import api from "../API/api";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";

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
        <h5 className={styles.titleWelcome}>Seja bem vindo ao</h5>
        <h1 className={styles.title}>
          MARVEL BRISANET TEST
        </h1>

        <form action="">
        <input className={styles.buttomBuscar} type="button" value="Buscar"/>
          <input className={styles.BuscaTexto} type="text" placeholder="Pesquisar..."/>
        </form>

        <div className={styles.grid}>
        {comics.map(comics => {
          return(
              <a href="" className={styles.card}>
                <h2 className={styles.titleCard}>{comics.title}</h2>
                <ul className={styles.ul}>
                  <li key={comics.id}>
                      <img className = {styles.figure} src={comics.thumbnail.path+'.jpg'}/>  
                    <span>{comics.thumbnail.extencion}</span>
                         
                  </li>
                </ul>
                <a href="#abrirModal">Mais Detalhes <FontAwesomeIcon icon={["fas", "save"]} /></a>
                <div id="abrirModal" className={styles.modal}>
                  <a href="#fechar" title="Fechar" className={styles.close}>X</a>

                  <h2 className={styles.titleLiteModal}>{comics.title}</h2>
                  <h2 className={styles.titleLiteModal}>{comics.description}</h2>
                  
                </div>               
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