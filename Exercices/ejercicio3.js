// Comparaciones con booleanos
console.log(false + false); //0
console.log(false + true); //1
console.log(true + true); //2
//  recoje el valor binario en  caso de operaciones  el false vale 0 y el true 1  



// Comparaciones con arrays
//console.log([] === []); //retorna false
console.log([] + []);    // no retorna nada
console.log([1, 2] + [3, 4]);   // cuando hay suma concatena  solo arrays    1,23,4
console.log([1] + 1);  // 11
console.log([1] - 1);   /// 0 

// Comparaciones con objetos
console.log({} + {}); ///  se pune el tostring de un objeto  no definido 
//console.log({} === {});   //  false  porque  esatn definidos los tipos 
//console.log([] === {});   // faslse

// Comparaciones especiales
console.log(null + 1);   // 1 
console.log(undefined + 1); // NaN
console.log(null == 0);    // false
console.log(null <= 0);  // true 
console.log(undefined == null); // true


console.log("------"); 
// Operaciones con NaN
console.log(NaN + 1);   //NaN
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false