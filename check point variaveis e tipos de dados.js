console.log("CHECK POINT - REVISÃO: VARIAVEIS E TIPOS DE DADOS")

const Lista = ["josé", "maria", "antonio", "mario", "alan", "joao", "ana"]
console.log(Lista)
const NovaLista = Lista.filter(item => item[0]=="j")
console.log(NovaLista)

NovaLista.map(item=>{
    console.log(Lista.indexOf(item))
                    }) // não entendi 100%
