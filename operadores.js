// Operadores 

// Soma, subtração, divisáo, multiplicação e potencia
const x = 3
const y = 4

console.log("soma " + (x+y))
console.log("subtração " + (x-y))
console.log("Divisão " + (x/y))
console.log("Multiplicação " + (x*y))
console.log("Potencia " + " X^Y =  " + (x**y))

// Laços de reptição/incremento
let z = 7

console.log(z)
z++ // INCREMENTO de mais um
console.log(z)
z++ // INCREMENTO de mais um
console.log(z)
z++ // INCREMENTO de mais um
console.log(z) // Final Z = 10
z-- // DECREMENTO de mais um
console.log(z)
z-- // DECREMENTO de mais um
console.log(z)

// ATRIBUIÇÃO
let b = 5
console.log(b)
b += 2 // soma dois (b = +2)
console.log(b)
b += 1// soma um (b = +1)
console.log(b)
b/=2 // divide por dois (b = /2)
console.log(b)
b*=5 // multiplica por cinco (b = *5)
console.log(b)
// Pode ser feito com todas operações

// MOD - o resto de uma divisão
let w = 5
let k = 4
console.log(w % k) // w mod 4 - resto 1 

// Operadores de comparação USAR SEMPRE OS 3 sinais === para verificação de valor e tipo 
console.log( 1>5) // retorna FALSE
console.log( 1 === 1) // retorna TRUE
console.log( 1 ==="1") // retorna FALSE
console.log( "OLÁ" === "OLÁ")// rretorna TRUE
console.log( 1 == "1") // se deixar apenas dois == não verificará o tipo de dará retorno TRUE
console.log(1!="1") //Diferente - Retorna False (considera que são iguais)- pois não considera o tipo
console.log(1!=="1") //Diferente - Retorna True - (dois = = )considera o tipo

// COMPARAÇÃO
let n = 1
let m = 2
let p = 1
var q // variavel não declarada - UNDEFINED

console.log(n && p) // AND - Considera True and True - retorna 1
console.log(n && m) // AND - Considera True and False(em comparação ao primeiro dado) - retorna 2 (False)
//lembrando da regra do AND, que só será verdadeiro qdo todas forem verdadeiras - basta 1 falso para que dê falso
console.log(n||m) // OR - Considera True ou False - retorna 1 pq previlegia o True
//lembrando da regra do OR, que só será falso qdo todas forem falso - basta 1 verdadeiro para que dê verdadeiro
console.log(!m) // NOT - neste caso, negando a existencia da variavel m
console.log(!q)// NOT - neste caso, negando a existencia da variavel q


