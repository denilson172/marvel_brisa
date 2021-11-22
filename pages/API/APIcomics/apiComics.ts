import axios, { Axios } from 'axios';
import md5 from 'md5';

// { CHAVE API COMICS: AIzaSyD6dmM0xR3AmV98Z6-WG4squy1hT4TmlOs }

//envio de dados para requisição (definido pela API)
const publicKey = '428dd75b078a7889db86b7ca7a2ecaab'; 
const privateKey = '19f92ec5b440ed56a6be0286fb85914d52044d6a';
const time = Number(new Date()); //time stamp (convertendo a data para numero)
const hash = md5(time+privateKey+publicKey); //criando hash para requisição

//criando link para a requisição    
const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKey,
        hash: hash
      },
});

export default api;