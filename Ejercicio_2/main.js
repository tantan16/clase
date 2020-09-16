const AvanzarSemaforo = (ColorActual) => {
if (ColorActual == (`amarillo`)) {
    return(`rojo`)
}

else if (ColorActual ==(`rojo`)) {
    return(`verde`)
}

else if (ColorActual==(`verde`)) {
    return(`amarillo`)
}

else {
    return(`Error, color del semáforo inválido`)
}
}

console.log(AvanzarSemaforo(`verde`))
console.log(AvanzarSemaforo(`amarillo`))
console.log(AvanzarSemaforo(`rojo`))
console.log(AvanzarSemaforo(`amarillo`))
console.log(AvanzarSemaforo(`negro`))