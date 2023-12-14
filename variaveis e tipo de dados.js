//METODOS STRINGS

//Declaração de variaveis - nos 3 tipo(var, let e const)
var Nome = "Ana Paula " 
console.log(Nome) 
const Sobrenome = "Czarnobay" 
console.log(Sobrenome)
let Idade= 44 
console.log(Idade)
// concatendando
console.log('Meu nome é ' + Nome + Sobrenome + '. Minha idade é de '+ Idade + ' anos. Olá Mundo!') 
// usando a função replace para alterar uma string -não altera a original
console.log(Sobrenome.replace("y", "i"))
//concatenando para demopnstrar que replace não altera original
console.log('Meu nome é ' + Nome + Sobrenome + '. Minha idade é de '+ Idade + ' anos. Olá Mundo!') 
// usando o touppercase
console.log(Sobrenome.toUpperCase())
//concatenando para demopnstrar que replace não altera original
console.log('Meu nome é ' + Nome + Sobrenome + '. Minha idade é de '+ Idade + ' anos. Olá Mundo!') 

// METODOS NUMEROS

//Transformando um número emn string
const Idade = 18;
console.log(Idade);
console.log(Idade.toLocaleString());
// Prova real de que transformou numero em string - Usando typeof
const Idade = 18;
console.log(typeof Idade);
console.log(typeof Idade.toLocaleString());
//Transformando uma string em número ou garantindo que deverá ser um numero]
let numero = "1"
let numero2 = "5"
console.log(numero+numero2) // Assim, somente concatena

numero = parseInt(numero) //variavel num,recebe variavel num em tipo num inteiro
numero2 = parseInt(numero2)//variavel num2,recebe variavel num2 em tipo num int.
console.log(numero+numero2) // Assim, somará como numeros

//METODOS BOOLEAN
const verdadeiro = true
const falso = false

// utilizado && - operador logico - "Basta um ser não, para toda afirmativa ser negativa" , pois tem um false - caso do NÃO e SIM(negaçao em logica de programação)
console.log(true && true) // retorna true
console.log(false && false) // retorna false
console.log(false && true)// retorna false

// utilizando == comprartação(exatamente igual, usado em logica de programação)
console.log(verdadeiro == verdadeiro) // retorna true
console.log(false == false) // retorna verdadeiro
console.log(false && true)// retorna false

// TIPOS COMPLEXOS / COMPOSTOS

//TIPO ARRAY
// lista somente de string
const Alunos = ["Ana", "Alice", "Beto", "Carlos", "Diego"] 
console.log(Alunos)
// concatenando - usando uma cadeia de string("Concatenando com alunos extras: ") 
console.log("Concatenando com alunos extras: " + Alunos.concat(["Filó", "Gertrud", "Amélie"]))
// selecionando uma posição
console.log(Alunos[0])
// Filtrando(FILTER) Alunos com a primeria letra A(observar que só buscará na lista original)
console.log(Alunos.filter(Aluno =>Aluno[0]=="A"))
// LOcalizando(FIND)o primeiro/unico valor na lista de alunos, que a primeira letra ser eh A
console.log(Alunos.find(Aluno =>Aluno[0]=="A"))
//concatenando sem uma cadeia de string("Concatenando com alunos extras: ") 
console.log(Alunos.concat(["Filó", "Gertrud"])) 
//lista mista: string, numero, string, boolean
const ListaMista = ["ANA" , 18, "18", true]
console.log(ListaMista)
// Função map - mapeamento e alteração dentro da lista
console.log(Alunos.map(Aluno => Aluno.toLocaleUpperCase()))//Altera toda lista para maiusculo
console.log(Alunos.map(nomes => nomes.endsWith("o"))) // Busca na lista nomes terminados com "o" minusculo
console.log(Alunos.map(nomes => nomes.includes("A")))// Busca na lista nomes com a letra A maiuscula

// TIPO OBJETO

//ojeto utiliza { chave e é composto de chave e valor
const Pessoa = {nome:"José", idade:18, cargo: "professor"}
console.log(Pessoa)
//Utilizando "." para acessar determinada propriedade somente
console.log(Pessoa.nome)
//Utilizando objeto com lista
const Aluno = { 
    Alunos:[
    {nome:"José", idade:18, curso: "medicina"}
   ]
}
console.log(Aluno)

// fim da aula 