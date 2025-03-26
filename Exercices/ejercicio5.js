/*igue los siguientes pasos:

Crea un mapa llamado myMap
Añade los siguientes key-valor al map
Clave	Valor
moroso	user (object)
agarrado	user (object)
generoso	user2 (object)
funcion	findAnimal (function)
color	color (string)
Muestra por consola todo el map
Muestra por consola el key moroso
Comprueba si existe la key hola
Muestra por consola el tamaño total del map
Recorre el map con un forEach
Elimina el elemento agarrado del map
Limpia el mapa por completo*/
const User={
    nombre:"jhon"
    
}
const User2 ={
    nombre:"kevin"
}

function saludo(){
 
}

// ejercicio 1 y 2 
const myMap = new Map();

myMap.set("moroso",User)
myMap.set("agarrado",User)
myMap.set("generoso",User2)
myMap.set("function",saludo())
myMap.set("color","azul")

console.log(myMap)
// ejercicio 3 
myMap.forEach((value, key) => {


    if (key=="hola"){
 
        
        return
    }
  
    
  });

  // ejercicio 4

  encontrado = false
  const clave = "hola"
  myMap.forEach((value, key) => {

    if (key==clave){
        console.log(`${key}`);
        console.log(`la clave ${key} si existe`);
        encontrado=true
        return
    } 
  });
  if (encontrado==false){
    console.log(`la clave ${clave} no existe`)
  }


  // ejercicio  5 

   console.log(myMap.size)

// ejercicio 6 

 myMap.delete("moroso")
 console.log(myMap)
 //  ejercicio  6

 console.log(myMap.clear())
