//primer desafio
// setTimeout(() => {
//     async function albumAsincrono() {
//     try {
//         let contenido= await fetch('https://jsonplaceholder.typicode.com/photos')
//         let response = await contenido.json()
//         let iterar = response.filter((e) => e.id <= 20)
//         console.log(iterar)
//     } catch (error) {
//         console.log(error)
//     }
// }
// albumAsincrono() 
// }, 3000);

//segundo desafio


async function getUser(user) {
    try {
        let contenido = await fetch('https://api.github.com/users')
        let response = await contenido.json()
        let iterarUser = response.filter((e) => e.login == login)
        let nameUser = iterarUser[0].nameUser
        let cantRepos = iterarUser[0].public_repos
        let localidad = iterarUser[0].location
        return nameUser,cantRepos,localidad
    } catch (error) {
        return 'user not found'
    }
}
let usuario1 = await getUser('name')
document.getElementById('resultados').innerHTML= `los datos del usuario son ${usuario1}`



//funcion fetch para la api
async function urlApi() {
    try {
        let contenido = await fetch('https://api.github.com/users')
        let response = await contenido.json()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
urlApi()


//comportamiento del boton

let enviar = document.getElementById('enviar')
enviar.addEventListener('click', datoUser)


function datoUser() {
    event.preventDefault()
    let nombre = document.getElementById('nombre').value
    let numero = document.getElementById('pagina').value
    let repositorio = document.getElementById('repoPagina').value
    const resultado = document.getElementById('resultados')
    const p = document.createElement('p')
    resultado.appendChild(p)
}





