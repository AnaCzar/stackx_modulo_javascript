//**class User {
//**Para iniciar a classe com algumas propriedades usamos o construtor
//**constructor(nome, email){
//**Definindo mais sobre nossos parametros do construtor
//**this.nome = nome
//**this.email = email
//**}
//**Método = nosso comportamento - ele faz algo, nesse caso eu quero que retorne alguns dados do nosso usuario
//**exibirInfos() {
//**return `${this.nome}, ${this.email}`
//**}
//** */}

//**Criando um objeto com o nosso tipo que definimos na classe
//**const novoUser = new User('Gabriel', 'g@g.com')
//**console.log(novoUser)
//**console.log(novoUser.exibirInfos) 

//** ENCAPSULAMENTO */


    class User {    
        //Para dizermos que ela é privada temos que declarar com o # antes de construtor e no construtor
        #nome
        constructor(nome, email, nascimento) {
        this.#nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        }
        //Sintaxe do método privado
        #montaObjUser() {
        return ({
        nome: this.#nome,
        email: this.email
        })
        }
        exibirInfos() {
        //desse modo posso acessar o método privado, pois estou acessando dentro da classe
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}`;
        }
        }
        //Criando um objeto com o nosso tipo que definimos na classe
        const novoUser = new User('Gabriel', 'g@g.com')
        console.log(novoUser.exibirInfos());

 //**HERANÇA */

 //**Temos a nossa classe principal, primeiro devemos falar para o nosso programa que essa classe todo mundo pode usar, então colocamos o expor default antes de class*/

export default class Aluno {
constructor(nome, email, matricula) {
this.nome = nome
this.email = email
this.matricula = matricula
}
//Método = nosso comportamento
exibirInfos() {
return `${this.nome}, ${this.matricula}`;
}
}