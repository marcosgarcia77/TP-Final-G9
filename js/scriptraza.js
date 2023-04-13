const contenedorHTML = document.getElementById("selectRazas")
const URL_API_RAZA = "https://api.thecatapi.com/v1/images/search?breed_ids="   /* id y url */
const  URL_API = "https://api.thecatapi.com/v1/breeds"     /* id, name, description, life_span */

fetch(URL_API)
.then(response => response.json())
.then(gatos => {

        for(const razas of gatos){
         contenedorHTML.innerHTML += `
         <option value= "${razas.id}" data-info= "nombre":'{${razas.name},"descripcion":${razas.description},"anos:"${razas.life_span}}'>${razas.name}</option> 
        ` 

    }

})

function mostrarRaza(){
    const listaDesplegable = document.getElementById("selectRazas")
    const cardGatoHTML = document.getElementById("contenedorRaza")

    const buscar = URL_API_RAZA+listaDesplegable.value
    cardGatoHTML.innerHTML=""

    fetch(buscar)
    .then(response => response.json())
    .then(gato =>{

            var caturl = gato.url;
            cardGatoHTML.innerHTML +=`
            <div class="cardGato">
            <img src=${gato[0].url}>
            </div>`      

    }) 

}