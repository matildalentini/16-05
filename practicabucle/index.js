//precalentando
for (let i = 0; i<5; i++) {
    console.log("Practicando con el bucle for");
}

for (let i=0; i<10;i++){
    console.log(la variable i tiene el valor ${i});
}
for (let i=0; i<=20;i++){
    console.log(la variable i tiene el valor ${i*2});
} 

for (let i=0; i<60;i++){
    console.log(la variable i tiene el valor ${i*5});
} 
for (let i=100; i>0; i--) {
    console.log(${i});
    
} 
//tablasdemultiplicar
let base=5
let resultados=[]

for (let i=2; i<=10;i++){
    let multiplicacion=base*i
    resultados.push(multiplicacion)
}

console.log(resultados);

//obteniendoeltotal
let ganancias=[8,5,4,-1,-2,14,15,22,21,48];

let total=0
for (let i=0; i<ganancias.length;i++){
    total= total+ ganancias[i]
    console.log(total);
}
//recoriendoArrays

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously']
    

for (let i=0; i<healingIsDifficult.length;i++) {
console.log(`${i+1} `+ healingIsDifficult[i]);
}

//recoriendoArraysConObjetosLiterales
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i=0; 1 <got.length; i++)
    {console.log("Hola" ${got[i].nombre} +${got[i].apellido} +criatura viajera!);
}
for (let i=0; i<got.length;i++)
{console.log("Hola" ${got[i].nombre}+ ${got[i].apellido}+ criatura viajera!de la ciudad+ ${got[i].ciudad}`);;}
