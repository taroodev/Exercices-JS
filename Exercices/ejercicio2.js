console.log(a);
// aqui te devuelve un undefined
var a = "hola";
console.log(b);
let b = "hola";
console.log(c);
const c = "hola";
// tanto el let como el const te devuleve una refereError 


sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}
function sayBye() {
  console.log("Adios desde sayBye!");
}
sayBye();

// ambas funciones si valen pero la primera no es tan recomendada