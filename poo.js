var users = [];

function createUser (id, nome){     //**criando uma função CREATEUSER */
    return users.push({id, nome})   //**PUSH(retorna valores em uma array) */
}
createUser(0,"admin");        //**trazendo valores para a função */

function getAllUsers (){     //**criando uma função GETALLUSERS */
    return users   //**retorna os USERS */
}
console.log(getAllUsers());        //**trazendo valores das 2 FUNÇÕES */


