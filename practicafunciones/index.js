//funciones clase 8
//rectangulo
function rectangulo (altura, ancho)
{let area= altura* ancho
    return area
}
console.log(rectangulo) (20,22)

//triangulo
function triangulo (base,altura) 
{let area=(base* altura)/2
    return area  
}
console.log(triangulo(3,4));

//largodelArray
function largoDelArray (lista)
{return Array.lenght}
let largo=LargoDelArray ([5,6,7,8])
console.log(largo);

//cantidadDeLetras
function cantidadDeLetras(palabra) {
    return palabra.length   
}
console.log(cantidadDeLetras(palabra="alfajor"))

//dolarHoy
function dolarHoy(precio)
{let preciodolar=precio/1100
    return preciodolar
}
console.log(dolarHoy("77000"));

//precioFinal
function precioFinal (precio)
{let final=precio + (precio *2)
    return final
}
console.log(precioFinal(6));

//mitad
function mitad (numero) 
{ let half= numero/2
    return half
}
console.log(mitad(5))

//
function anterior(numero) {
    let anterior=numero-1
    return anterior
}
console.log(anterior(3));

function triple(numero) {
    let triple=numero*3
    return triple
}
console.log(triple(3))
function anteriorDelTriple(numero) {
    return anterior(triple(numero))
}

console.log(anteriorDelTriple(3));
