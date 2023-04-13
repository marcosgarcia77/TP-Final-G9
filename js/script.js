const formularioUsuarios = document.querySelector(".formularioUsuarios")
const contenedorUsuarios = document.querySelector("#contenedorMascota")
const mascotas =[]

const calcularIMC = (peso,cp,lp) => { 
    var a = cp/0.70622;
    var b = a-lp;
    var c = b/0.9156;
    var d = c-lp;
    return d;
}


const renderzarMascotas = () => {
    contenedorMascota.innerHTML=""
   
    for(const mascota of mascotas){
        let calculo = calcularIMC(mascota.peso, mascota.cirPanza, mascota.largoPata)
        console.log(calculo)
        let estadoGato =""
        if(calculo <=10){
            estadoGato = "Bajo Peso"
            console.log(estadoGato)
            
        }
        else if(calculo<=25){
            estadoGato = "Tu gato esta perfecto"
            console.log(estadoGato)
            
            } 
            else{ 
                estadoGato = "Sobre peso"
                console.log(estadoGato)
            }

            

        contenedorMascota.innerHTML += `
        <div class= imc-card>
        <h2>Nombre Mascota: ${mascota.nombreMascota}</h2>
        <p>Cumpleaños: ${mascota.cumpleGato}</p>
        <p>Sexo: ${mascota.sexoMascota}</p>
        <p>Peso: ${mascota.peso}</p>
        <p>Circunsferencia Pata:${mascota.cirPanza}
        <p>Largo Pata: ${mascota.largoPata}</p>
        <p>Resultado IMC: ${calculo} </p>
        <p>Estado: ${estadoGato}</p>
                             
        `
        calculo = 0
        estadoGato=""
    }
} 
formularioUsuarios.addEventListener("submit", (event) =>{
    event.preventDefault()
    
    mascotas.push({
        nombreMascota: formularioUsuarios.nombreMascota.value,
        cumpleGato: formularioUsuarios.cumpleGato.value,
        sexoMascota: formularioUsuarios.sexoMascota.value,
        peso: formularioUsuarios.peso.value,
        cirPanza: formularioUsuarios.cirPanza.value,
        largoPata: formularioUsuarios.largoPata.value,
        })
    renderzarMascotas()
})


