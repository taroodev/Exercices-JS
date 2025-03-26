/*Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario*/
const user = {
    name: "Pedro",
    last: "Sánchez",
    age: 45,
    salary: 1000,
    profesion: "Barro man",
  };
  
  function userData(user) {
    
    return "Me llamo "+user.name+" "+user.last+" y cobro "+user.salary*12+" € al año";
  }
  
  console.log(userData(user));