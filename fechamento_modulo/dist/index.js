"use strict";
//**REALIZANDO UMA REQUISIÇÃO HTTP VIA NPM/AXIOS*/
//**para o github(utilizando exempli da biblioteca npmjs.com/package/axios)*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const axios = require("axios").default; //**constante axios recebe requisição(chamando a biblioteca axios) */
//axios.get("https://api.github.com/users/AnaCzar")
//.then(result =>console.log(result)) //**trata-se funçao assincrona/promess - dados que podem cair/perder-se - se tudo der certo (then) recebe result , dando um console no prorpio dado de resultado */
//.catch(err =>console.log(err));
/**se der erro(catch) recebe erro e mostra o erro(console) */
//**em package.json / scripts(basicamente :automação no codigo npm) coloca = , + espaço + enter + "start"(starta o programa) + :"node index.js" */
//npm**npm start = comando para rodar o codigo */
//** PEGANDO SOMENTE ALGUNS CAMPOS DO OBJETO */
//const axios = require("axios").default; //**constante axios recebe requisição(chamando a biblioteca axios) */
//axios.get("https://api.github.com/users/AnaCzar")
//.then(result=> {
// const data = result.data;
//const { name, login, bio } = data
//const usuarioGithub = {
//name, login, bio
//};
//console.log(usuarioGithub)
//})
//.catch(err =>consolelog(err));
//** TYPESCRIPT */
//** comando para instalar no programa (typescript) npm install typescript --global */
//** se der erro de segurança, entrar pelo cmd no windows power shell +  Set-ExecutionPolicy RemoteSigned + opção de liberar todos(a) - após o uso, bloquear nomvamente*/
//** tsc -- init para iniciar o arquivo tsc/ usar ctr+f buscar outdir(pasta de saida para arquivos do tsc, pois node não entende tsc) + usar ctrl+f para buscas target e aleterar para versao mais recente do ecnos(es 2020) + alterar o arquivo index.js para extensão .ts + demais alteraões de linguagens para os comantos antes dados ao js como o require(que é importação de uma biblioteca)*/
//**usar ctrl+f no package.json para buscar start e alterar para "node dist/index.js"(apontar no node a pasta do tsc) + tsc no terminal(PARA TRANSPILAR) +npm start */
const axios_1 = __importDefault(require("axios"));
axios_1.default.get("https://api.github.com/users/AnaCzar")
    .then(result => console.log(result)) //**trata-se funçao assincrona/promess - dados que podem cair/perder-se - se tudo der certo (then) recebe result , dando um console no prorpio dado de resultado */
    .catch(err => console.log(err));
