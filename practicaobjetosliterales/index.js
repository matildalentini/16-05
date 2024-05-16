//practica objetos literales
//misDatos
let misDatos={
    nombre= "Matilda"
    apellido="Lentini"
    Dni="47083220"
    comidasFavoritas:["sushi","pizza","pastas"],
    age:"18",
    saludar:function() {
        let saludo= "hola mi nombre es "+ this.nombre +this.apellido + " y tengo " + this.age+ " años. mi primer comida favorita es "+ this.comidasFavoritas[0]
        return saludo
      
    }
}

console.log(misDatos.saludar());
//auto

let auto ={
    marca: "Honda",
    modelo:"Fit",
    año:2012,
    color:"gris",
    posicion:0,
    avanzar: function (km) {
        return auto.posicion=this.posicion+km 
    },
    retroceder:function (km) {
        return auto.posicion=this.posicion-km
    }

}

console.log(auto.avanzar(6));
console.log(auto.posicion); 

console.log(auto.retroceder(1));
console.log(auto.posicion); 

//autoNuevo
let autoNuevo ={
    marca: "Honda",
    modelo:"Fit",
    año:2012,
    color:"gris",
    posicion:0,
    avanzar: function (km) {
        return autoNuevo.posicion=this.posicion+km 
    },
  
}


console.log(autoNuevo.moverse(2));
console.log(autoNuevo.posicion);

let ironMan={
    nombre:"Iron Man",
    equipo:"Avengers",
    poderes: ["volar","disparar", ],
    energia: 200,
    getPoder: function (numero) {
        ironMan.energia=ironMan.energia-20
        return "poder elegido de "+ironMan.nombre+ " :"+ ironMan.poderes[numero]+" energia restante: "+ironMan.energia  
    }
};

console.log(ironMan.getPoder(0)); 
console.log(ironMan.energia);

let Hulk={
    nombre:"Hulk",
    equipo:"Avengers",
    poderes:["fuerza","golpear"],
    energia:200,
    getPoder:function (numero) {
        Hulk.energia=Hulk.energia-20
        return "poder elegido de "+Hulk.nombre+ " :"+ Hulk.poderes[numero]+"energia restante: "+Hulk.energia  
    }
}

console.log(ironMan.getPoder(Math.floor(Math.random()*1)));

console.log(HulkMan.getPoder(Math.floor(Math.random()*1)));
