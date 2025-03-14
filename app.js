let lista = [] // Array para almacenamiento de strings

function agregarAmigo(){
    Nombre = document.querySelector('#amigo').value
    document.querySelector('#listaAmigos').innerHTML = ""
    texto = ""
    if(Nombre === ""){
        alert('El campo no puede estar vacio, por favor añada un nombre')
    }else{
        lista.push(Nombre)
        document.querySelector('#amigo').value = ""
        for(i = 0; i < lista.length; i++){
            texto = texto + lista[i] +"</br>"
        }
        document.querySelector('#listaAmigos').innerHTML = texto
    }

}

function sortearAmigo(){
    texto = ""
    if(lista.length == 0){
        document.querySelector('#resultado').innerHTML = ""
        alert("No hay amigos para sortear, por favor ingrese un nombre primero")
    }
    else{
        N = Randomizer()
        document.querySelector('#resultado').innerHTML = lista[N]
        lista.splice(N,1)
        document.querySelector('#amigo').value = ""
        for(i = 0; i < lista.length; i++){
            texto = texto + lista[i] +"</br>"
        }
        document.querySelector('#listaAmigos').innerHTML = texto
    }
}

function Randomizer(){
    N = lista.length
 return Math.floor(Math.random()*N)
}