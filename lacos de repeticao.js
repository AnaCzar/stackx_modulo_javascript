/** LAÇOS DE REPETIÇÃO */

/**WHILE */

let index = 1 /**indexador/incrementador */

function calc(n1){
    return n1 * 2
}

while(index < 10){
    console.log(calc(index))
    index++
}

//**WHILE - MOSTRANDO O VALOR DO INCREMENTO TBM */

let index = 1 /**indexador/incrementador */

function calc(n1){
    return n1 * 2
}

while(index < 10){
    console.log("incremento " + index)
    console.log("resultado do calculo " + calc(index))
    index++
}

//**FOR - mesmo calculo com for */

for(i =1; i<10; i++ ){  //**declarando(i=0)limitando até 10(i<10)incrementando de 1 em 1(i++ )*/
    console.log(i * 2)
}

//**FOR - MOSTRANDO O VALOR DO INCREMENTO */

for(i =1; i<10; i++ ){  //**declarando(i=0)limitando até 10(i<10)incrementando de 1 em 1(i++ )*/
    console.log("incremento " + i)
    console.log("calculo " + i * 2)
}

//**FOR IN - varrendo uma lista */

let frutas = ["manga", "maracuja", "uva", "amora", "kiwi"];//**declaração da lista */

for(let select in frutas){ //**para(for)declaração variavel(let select) na lista(in) frutas */
    console.log(select)  //**para leitura da posição(na lista) do objeto  - os index*/
    console.log(frutas[select]) //** para leitura dos objetos da lista */
}

//**FOR IN - varrendo um ojeto*/

let cadastro = {nome:"joão",idade: 25, sexo: "masculino"};

for(let key in cadastro){ //**para(for)declaração variavel(let key) na lista(in) cadastro */
    console.log(key)  //**para leitura da chave - index */
    console.log(cadastro[key])//** para leitura do valores de forma dinâmica e não especifica(key.idade ou key.sexo) */
}

//** FOR OF - varrendo uma lista */

let frutas = ["manga", "maracuja", "uva", "amora", "kiwi"];//**declaração da lista */

for(let select of frutas){ //**para(for)declaração variavel(let select) na lista(of) extrai */
    console.log(select)  //**para leitura dos objeto extraidos da lista  - os index*/
}

//** FOR OF - varrendo um objeto */
let cadastro = [{nome:"joão", idade: 25, sexo: "masculino"}]; //**Tem qUE HaveR ChavE para definiçãO Do oBJeTo no FOR of */

for(let key of cadastro){ /**para(for)declaração variavel(let select) na lista(of) extrai obJETO */
    console.log(key.nome)  //**para leitura da chave - index */
}

//**FIM DA AULA */