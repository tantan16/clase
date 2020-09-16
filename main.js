// const edadDelUsuario = 

// if (edadDelUsuario >= 18) {
//      alert("Felicitaciones, podes comprar alcohol (legalmente)")
// } 

// else {
//      alert("sos muy joven para comprar alcohol")
// }

// console.log(2+2)

// console.log(edadDelUsuario>=18)//false


// console.log(Boolean(80))//true ---> así se convierte a booleano

// //valores falsy
// //0
//-0
//


// const edadUsuario = 25
// edadUsuario >= 13 && edadUsuario <= 30  //este operador permite unire dos o más condiciones

// if (edadUsuario >=30 && edadUsuario <=30){
//      alert("tenes entre 13 y 30 años")
// }

// console.log(edadUsuario >= 13)

//si algo de la función es negativo, toda la cadena dará false 

//!== ---> distinto de 


// const edadUsuario = 27

// const nombreUsuario = "TANIA"

// if (edadUsuario >= 13 && edadUsuario <=30 && nombreUsuario !== "Diego") {
//      alert("Tenes entre 13 y 30 años y no te llamas Diego")
// }

//-------EJERCICIO ES VOCAL-----------

// const esVocal = (letra) =>{
//      if (letra !== `a` && letra !== `e` &&  letra !== `i` &&  letra !== `o` && letra !== `u`) {
//           return(`False`)
//      }

//      else {
//           return(`true`)
//      }
// }

// console.log(esVocal(`a`))
// console.log(esVocal(`r`))
// console.log(esVocal(`i`))
// console.log(esVocal(`o`))
// console.log(esVocal(`u`))


// && AND----> Une condiciones, ambas tienen que ser verdaderas
// || OR-----> Une condiciones, al menos una tiene que ser verdad

//ej con ||

// const esVocal = (letra) => {
//      if (letra == "a" || letra == "e" || letra == "i" ||letra == "o" || letra == "u"){
//      return true
//      }
//      else {
//           return false 
//      }
// }

// console.log(esVocal(`a`))
// console.log(esVocal(`r`))
// console.log(esVocal(`i`))
// console.log(esVocal(`o`))
// console.log(esVocal(`u`))

// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos
// un número edad y un booleano tieneAutorizacion, y
// devuelva true si la persona está habilitada para ver la película o
// false si no. Sólo puede ver la película si: tiene 15 años o más, o
// tiene autorización de sus padres.


//js convierte las comparaciones en booleanos 

//--------EJERCICIO PUEDE VER PELÍCULA---------

// const puedeVerPelicula = (edad, tienePermiso) => {
//      if (edad >=15 || tienePermiso === true){
//           return true
//      }
//      else {
//           return false 
//      }
// }

// console.log(puedeVerPelicula(12, false)) // false
// console.log(puedeVerPelicula(12, true))  // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log(puedeVerPelicula(18, true))  // true


// EJERCICIO ES CONSONANTE 
// const esConsonante = (letra) =>{
//      if (letra == "a" || letra == "e" || letra == "i" ||letra == "o" || letra == "u"){
//        return false
//                }
//      else {
//      return 
//                 }
// }

// console.log(esConsonante('a')) // false
// console.log(esConsonante('n')) // true
// console.log(esConsonante('e')) // false

//EJERCICIO CARNET 

// const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) =>{
//      if(pasoTests == true && tieneMultasImpagas == true && pagoImpuestos== true){
//           return  true}
     
//      else{
//           return false 
//      }
//      }

// console.log(puedeRenovarCarnet(true, true, true))    // false
// console.log(puedeRenovarCarnet(true, true, false))   // false
// console.log(puedeRenovarCarnet(true, false, true))   // true
// console.log(puedeRenovarCarnet(true, false, false))  // false
// console.log(puedeRenovarCarnet(false, true, true))   // false
// console.log(puedeRenovarCarnet(false, true, false))  // false
// console.log(puedeRenovarCarnet(false, false, true))  // false
// console.log(puedeRenovarCarnet(false, false, false)) // false

//-------EJERCICIO ESTA EN RANGO----

//  const estaEnRango = (num1,num2,num3) => {
//      if(num2 >= num1 && num2 <= num3){
//           return true
//      }
     

//      else {
//           return false 
//      }
//  }
     
//  console.log(estaEnRango(3, 1, 10))   // true
//  console.log(estaEnRango(1, 1, 10))   // true
//  console.log(estaEnRango(10, 1, 10))  // true
//  console.log(estaEnRango(12, 1, 10))  // false
//  console.log(estaEnRango(-3, 1, 10))  // false


// //-----EJERCICIO PUEDE GRADUARSE -----


// const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) =>{
//      if(asistencia >= 75 && materiasAprobadas >=50 && tesisAprobada == true){
//           return true
//      }
//      else {
//           return false 
//      }
// }

// console.log(puedeGraduarse(80, 50, true))  // true
// console.log(puedeGraduarse(80, 50, false)) // false
// console.log(puedeGraduarse(80, 45, true))  // false
// console.log(puedeGraduarse(80, 45, false)) // false
// console.log(puedeGraduarse(65, 50, true))  // false
// console.log(puedeGraduarse(33, 55, false)) // false
// console.log(puedeGraduarse(42, 45, true))  // false
// console.log(puedeGraduarse(28, 45, false)) // false


//---------JUGAR PIEDRA PAPEL O TIJERA--------------

     alert(`Vamos a jugar piedra, papel o tijera
 piensa bien tus movimientos e introduce tus jugadas a continuación:`)     
     let a = prompt(`¡Vamos! que es tu  primer turno, ¿qué tiras???`)

     let b = prompt (`tu segundo movimiento es, piedra, papel o tijera?`)

     const jugarPiedraPapelTijera = (a,b) => {
     if(a == `tijera` && b == `piedra` || a == `piedra` && b == `tijera`){
         return(`¡Ganó Piedra!`)
     }

       else if(a == `papel` && b == `piedra` || a == `piedra` && b == `papel`){
          return(`¡Ganó Papel!`)
          }

      else if(a == `tijera` && b == `piedra` || a == `piedra` && b == `tijera`){
          return(`¡Ganó tijera!`)
               }
     
     else if(a == `piedra` && b == `piedra` || a == `papel` && b == `papel` || a == `tijera` && b == `tijera` ){
          return(`¡Empate!`)
                }
     
     else{
          return (` Oopsy Intenta otra vez`)
     }
     }

     alert(jugarPiedraPapelTijera(a,b))

