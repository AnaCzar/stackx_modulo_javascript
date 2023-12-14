console.log("Estruturas Condicionais")

// Utiizando IF e else
var senha = 1234 ;   // declaração - alterar aqui para teste
var usuario = "admin";// declaração - alterar aqui para teste

if (senha ===1234 && usuario ==="admin"){
    console.log("Seja bem vindo " + usuario);
}
else {
    console.log("Usuário ou Senha inválido");
}
// Novamente exemplo com IF e Else
var saldo = 1000
var saque = 1000

if(saque>saldo){
    console.log("Saldo indisponível para saque");
}
else{
    console.log("Operação realizada com sucesso! Aguarde a contagem das notas");
}

// Novamente exemplo com IF e Else
var saldo = 1000;
var saque = 10;
var bloqueada = true;

if(saque>saldo || bloqueada){  // utilizando condicional OU/OR bloqueada iniciou com TRUE não é necessário usar =
    console.log("Saldo Indisponível para saque ou conta bloqueada");
}
else{
    console.log("Operação realizada com sucesso! Aguarde a contagem das notas");
}

//Exemplo com ELSEIF
var opcao = 4;

if (opcao ===1){
    console.log("Financeiro");
}
else if(opcao ===2){
    console.log("Faturamento");
}
else if(opcao===3){
    console.log("Comercial");
}
else{
    throw new Error("Opção inválida"); // lançar novo erro - qdo o erro finaliza o programa/não trata
}
// Exemplo usando SWICH, CASE e BREAK
var opcao = 3;

switch(opcao){
    case 1 :
        console.log("Financiamentos")
        break;
    case 2 :
        console.log("Agendamento");
        break;
    case 3 || 4:
        console.log("Atendimento");
        break;
    default:
        console.log("Opção inválida")
}

// Utilizando Ternário(somente utiliza qdo possue 2 opções)
var idade = 13

idade>=18 ? console.log("Olá usuário"): console.log("Você não pode acessar - Menor de 18 anos");

//Mesma questão, dentro de um console
var idade = 13

console.log(idade>=18 ?("Olá usuário"):("Você não pode acessar - Menor de 18 anos"));

// Mesma questão - em código limpo

function ValidaIdade(idade) { 
    if (idade>=18) return "Olá usuário"; // Como a primeira linha é falsa, passará para segunda
        return "Você não pode acessar - Menor de 18 anos"// Depois de RETURN não é mais feito leitura do codigo, portanto valida...substitui um SENÃO / ELSE IF
}
console.log(ValidaIdade(13));
