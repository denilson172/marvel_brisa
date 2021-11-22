//useEffect: para carregar na pagina
//useState: para salvar requisição em variavel
import React, { useEffect, useState } from "react";

//arquivos
import api from "../API/APIcomics/apiComics";
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

//maps
import App from '../_app';
import { GoogleMap } from "@react-google-maps/api";
import ReactDOM from 'react-dom';
//import reportWebVitals from '../../reportWebVitals';


//maps - NÃO FUNCIONAL
{/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/}


//indormando ao tsx a tipagem dos dados
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
  async function loadComics() {
    try{
      api
      let url='/comics';
      const response = await api.get(url);
      setComics(response.data.data.results);
    }catch(error){
      console.log(comics);
    }
  }

  /*async function Search() {
    var search=document.getElementById("search");
    (ev) => setComics(ev.target.value);
  }*/
  
  useEffect( () => {
     loadComics();
}, []);

return (
    //inicio da linguagem de marcação junto ao ts
    <div className={styles.container}>
      <Head>
        <title>MARVEL BRISANET</title>
        <meta name="MARVEL" content="SINGLE PAGE TEST" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*BANNER*/}
      <main className={styles.main}>
        <img className={styles.logo} src="https://www.brisanet.com.br/imgs/logoMobileWhite.png"/>
        <h5 className={styles.titleWelcome}>Seja bem vindo ao</h5>
        <h1 className={styles.title}>MARVEL BRISANET TEST</h1>

        {/*SEARCH - NÃO FUNCIONAL*/}
       {/* {comics.map(comics => {
            return(
            )
          })}*/}
          <form className={styles.formSearch} action="">    
              
             <input className={styles.inputSearch}
             type="text"
             name="search"
             placeholder="Pesquisar..."
             id="search"
             //value={setComics}
            //onChange={(ev) => Search()}
           />
            <input
              className={styles.buttomSearch}
              type="submit"
              value="Buscar"
              id="search"
            />
          </form>
          
        

        {/*INIT GRID*/}
        <div className={styles.grid}>
        {comics.map(comics => {  {/*mapeando array e coletando dados*/}
          return(
              <div className={styles.card}>
                <h2 className={styles.titleCard}>{comics.title}</h2> {/*titulo comics*/}
                <ul className={styles.ul}>
                  <li key={comics.id}>
                      <img className = {styles.figure} src={comics.thumbnail.path+'.jpg'}/>  {/*imagem comics*/}
                      {/*{comics.thumbnail.extencion} //a extenção da imagem não está puxando da api*/}
                      <h2 className={styles.titleLiteModal}>{comics.description}</h2> {/*descrição comics*/}

                      {/*INIT MODAL*/}
                      <div id="abrirModal" className={styles.modal}>
                        <h2 className={styles.titleLiteModal}>{comics.id}{comics.title}</h2>
                        {/* INIT GOOGLE MAPS (não funcional)*/}
                        {/*}  <GoogleMap
                            onLoad={map => {
                              const bounds = new google.maps.LatLngBounds();
                              map.fitBounds(bounds);
                            }}
                            onUnmount={map => {
                              // do your stuff before map is unmounted
                            }}
                          />*/}

                        <a href="#fechar" title="Fechar" className={styles.close}>X</a>
                      </div>
                      <a href="#abrirModal" className={styles.buttomPurchase}>R$ | COMPRAR</a> {/*botão de compra*/}
                  </li>
                </ul>
              </div>
          )})}
          </div>
      </main>
      
      {/*INIT FOOTER*/}
      <footer className={styles.footer}>
          Desenvolvido por Denilson Oliveira
      </footer>

    </div>
)

}

export default Comics;