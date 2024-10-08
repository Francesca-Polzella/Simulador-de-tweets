const formularia = document.querySelector('#formulario')
const ListaTweets =document.querySelector('#lista-tweets')
let arregloTweet=[]
const ListaDeCaracteres= 150

//eventos

formularia.addEventListener('submit',agregarTweet)

// formularia.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     instrucciones
// })

function agregarTweet(e){
    e.preventDefault()
    //console.log ('boton') 
    const infoTweet = document.querySelector('#tweet').value
    console.log(infoTweet)
    if(infoTweet===''){
        //console.log('vacio')
        mostrarError('El Tweet no puede estar vacio')
        return
        
    }
    else if (infoTweet.length > ListaDeCaracteres) {
        mostrarError(`El Tweet no puede exceder los ${ListaDeCaracteres} caracteres`)
        //console.log('excesivo')
        
    
    }else{
        //console.log('campo lleno')
        const objTweet ={
            tweet:infoTweet,
            id:Date.now()  
        }
        //console.log(objTweet)
        arregloTweet.push(objTweet)
        //console.log(arregloTweet)
        crearListaTweet()
        tweet=[...arregloTweet,objTweet]
        //console.log(tweet)
        crearHTML()
        formularia.reset()

    }
}   




function crearListaTweet(){
    limpiarHTML()
    arregloTweet.forEach(i=>{
        const li = document.createElement('li')
        li.innerText = i.tweet
        ListaTweets.appendChild(li)
        formularia.reset()
    })
}

function limpiarHTML(){
    while(ListaTweets.firstChild){
        ListaTweets.removeChild(ListaTweets.firstChild)
    }
}

function mostrarError(mensaje){
    //console.log(mensaje)
    const mensajeError = document.createElement('p')
    mensajeError.innerText = mensaje
    mensajeError.classList.add('error')

    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)

    setTimeout(()=>{
        mensajeError.remove()
    },3000)
}

function crearHTML(){
    limpiarHTML()

    //console.log('funcion')
    if(arregloTweet.length>0){
        arregloTweet.forEach(i=>{
            const li = document.createElement('li')
            const btnBorrar= document.createElement('a')
            btnBorrar.classList.add('borrar-tweet')
            btnBorrar.innerText= 'X'
            btnBorrar.onclick=()=>{
                Borrar(i.id)
            }

            li.innerText= i.tweet
            li.appendChild(btnBorrar)
            ListaTweets.appendChild(li)

        })
    }
}


function Borrar(id){
    //console.log('borrar')
    arregloTweet = arregloTweet.filter(i=>i.id !==id)
    //console.log(i)
    crearHTML()

    //no me quiere hacer la funcion de borrar 
}

