/* 
    -Query Params => meusite.com/users?name=rodolfo&age=28//FILTROS
    -Route Params => /users/2 //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
*/

const port = 3002
const express = require ('express')
const app = express ()
app.get ('/users', (request, response) => {
    // const name = request.query.name
    // const age = request.query.age
    const {name,age} = request.query
    console.log (name,age)
    return response.json ({name, age})
})
app.listen (port, () =>  {
    console.log ('😀 Server started on port 3000')
})