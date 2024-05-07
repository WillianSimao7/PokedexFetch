const grupoGrama = ["bulbasaur", "ivysaur", "venusaur", "butterfree", "beedrill"]
const grupoFogo = ["charmander", "charmeleon", "charizard"]
const grupoTerra = ["caterpie", "metapod", "weedle", "kakuna", "rattata"]
const grupoAgua = ["squirtle", "wartortle", "blastoise"]



function carregarPokemons(){

    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then(function response(data){const promiseData = data.json()
        console.log(promiseData)
        promiseData.then(response=>{
        insertPokemon(response.results)})
        })

        loadComponent()

}

function insertPokemon(pokemons){
        console.log(pokemons)

        for( let index = 0 ; index < pokemons.length; index ++){
            const pokemon = pokemons[index]
            const id = index + 1
            pokemon.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id +".png"
            adicionarCardPokemon(pokemon)
        }
    }
    
function loadComponent(){
        console.log("loadComponent")
    }

    



function adicionarCardPokemon(pokemon){

    console.log(pokemon)

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", pokemon.imagem)

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = pokemon.name

    if(grupoGrama.includes(pokemon.name)){
        textoElemento.classList.add("grama")
    } 
    else if(grupoAgua.includes(pokemon.name)){
        textoElemento.classList.add("agua")
    }
    else if(grupoTerra.includes(pokemon.name)){
        textoElemento.classList.add("terra")
    }
    else if(grupoFogo.includes(pokemon.name)){
        textoElemento.classList.add("fogo")
    }
    
    
   

    const divElemento = document.getElementById("conteudo-pokemon")
    divElemento.classList.add("card")
    divElemento.appendChild(imagemElemento)
    divElemento.appendChild(textoElemento)

}
