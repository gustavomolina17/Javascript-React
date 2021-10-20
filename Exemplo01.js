/*

Esse exemplo demonstra como desconstruir um objeto em arrays


*/

let nomes = ["Gustavo", "Molina", 30];
let { 1: segundonome } = nomes;
console.log(segundonome);
let { 0: primeironome, 2: idade } = nomes;
