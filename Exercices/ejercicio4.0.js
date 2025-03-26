/*Primer código
Tenemos una función que saca el nombre completo del usuario con el nombre y apellido*/
var usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario(user) {
  return "me llamo " +user.nombre+" "+user.apellido;
}

