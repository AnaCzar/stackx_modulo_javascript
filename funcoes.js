console.log(FUNÇÕES)


// FUNÇOES COMUNS

function soma(n1, n2){    //Construindo uma função
    console.log(n1 + n2)
    console.log((n1 * n2)/3)
    console.log(n1)
    console.log((n2))
    console.log(n1 ** n2)
      
    }

soma(56, 464)  //Chamando a função

// Mais um exemplo de função

function hipotenusa(CatetoAdj, CatetoOpo){    //Construindo uma função
    console.log(CatetoAdj**2 + CatetoOpo**2)
         
    }

hipotenusa(3, 4)  //Chamando a função

// Mais um exemplo de função

function wordpass(n1, n2){    //Construindo uma função
    
    console.log("olá mundo")
    console.log("Tudo bem?!")
    console.log(n1+n2)
    console.log(n1**n2)         
    }

wordpass(1, 2)//Chamando a função
wordpass(12, 15)//cahamndo a função novamente

// Mais um exemplo de função - de outro modo

function eleva (n1, n2){    //Construindo uma função
    
    const calceleva = n1**n2
    return calceleva   
    }

console.log(eleva(2, 2))//Chamando a função
console.log(eleva(3, 3))//cahamndo a função novamente

// teste sem retorn, com CONSOLE.LOG
function soma(n1, n2){    //Construindo uma função sem return
    console.log(n1 + n2)
    }

soma(56, 464)  //Chamando a função 

console.log("Desta forma não sai " + soma(56,464) ) // chamando a função com CONSOLE.LOG -aparece undefined



// FUNÇÕES ASSINCRONAS

async function descricao(){
    const resposta = await fetch("https://www.google.com/search?q=fun%C3%A7%C3%A3o+fetch+javascript&oq=fun%C3%A7%C3%A3o+fetch&aqs=chrome.0.0i512j69i57j0i22i30j0i15i22i30l2.3671j0j7&sourceid=chrome&ie=UTF-8")
    return resposta
}

descricao().then(e =>{      //e = evento
    console.log(e)      //e = console.log no evento ""se tudo der certo(conexão), dêum console.log no evento
}).catch(err => console.log("erro")) // se der erro, mostrar msg erro

// fazendo nomvamente, mas com erro(pego site inexistente - propositadamente)

async function descricao(){
    const resposta = await fetch("https://api..com/users/devjosecarlostele")
    return resposta
}

descricao().then(e =>{      //e = evento
    console.log(e)      //e = console.log no evento ""se tudo der certo(conexão), dêum console.log no evento
}).catch(err => console.log("erro")) 


// realizando de forma diferente

async function descricao(){
    const resposta = await fetch("https://www.google.com/search?q=fun%C3%A7%C3%A3o+fetch+javascript&oq=fun%C3%A7%C3%A3o+fetch&aqs=chrome.0.0i512j69i57j0i22i30j0i15i22i30l2.3671j0j7&sourceid=chrome&ie=UTF-8")
    return resposta
}

descricao().then(result => console.log(result)).catch(error => console.log(error)) 

// e...realizando de forma diferente c/ erro proposital
async function descricao(){
    const resposta = await fetch("https://api..com/users/devjosecarlostele")
    return resposta
}

descricao().then(result => console.log(result)).catch(error => console.log("error")) 



//FUNÇÕES - ARROW FUNCTION

const nomePrinc = () => console.log("Ana") // construindo a função
nomePrinc()  // retornando/ chamando a funçao

// exemplo com calculo

const calculoPi = (n1) => console.log(n1*3.14) // construindo
calculoPi(5)  // chamando
calculoPi(45) // chamando

// outro exemplo
const txt = () => console.log("Deus, conceda-me a serenidade para aceitar as coisas que não posso mudar,a coragem para mudar as coisas que posso e a sabedoria para discernir uma da outra. Vivendo um dia de cada vez, apreciando um momento de cada vez, recebendo as dificuldades como um caminho para a paz e, como Jesus, aceitando as circunstâncias do mundo como realmente são, e não como gostaria que fossem. Confiando que o Senhor tudo fará se eu me entregar à Sua vontade; pois assim poderei ser razoavelmente feliz nesta vida e supremamente feliz ao seu lado na eternidade.Amém.")


console.log(txt())



// FUNÇÕES CALLBACK

//exemplo 1

function login(callback) {   // a função login recebe uma CALLBACK(funçao)
    callback("Bem Vindo")
}

login((msg) =>{      //msg recebe uma funçao 
    console.log(msg)
})

//exemplo 2 - testando/validando usuario

function login(user, callback){  // testar usuario c/ funçao callback
    user === "admin"? callback("Bem vindo"):callback("Erro - usuário desconhecido") // usuario = admin? retorne: bem vindo, senão retorne: erro - usuario desconhecido
}

login("admin",(msg)=>{  //entrando com usuario admin, ler a msg (em callback)recebe funçao: leia msg
    console.log(msg)
})

// exemplo da apostila c/ algumas alterções
function word(name,callback){
    name === "Ana"? callback("olá Ana !!"):callback("olá usuário. Faça seu login")
}

word("Ana", msg =>{
    console.log(msg)
})

// um exemplo da internet

function exibir(result){
    console.log("O calculo resultou em: " + result);
}

function soma(n1,n2, callback){
    var op = n1+n2;
    callback (op);
}

function multipl(n1,n2, callback){
    var op = n1*n2;
    callback (op);
}

soma(1, 5, exibir);
multipl(2,10, exibir);


