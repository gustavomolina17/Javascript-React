/*

Esse exemplo demonstra o uso de: includes, endswith e startswith

*/

// Includes --> Retorna true ou false

let nomes = ["Gustavo", "Ana", "Gabriela"];

console.log(nomes.includes("Ana"));

if (nomes.includes("Gustavo")) {
  console.log("Gustavo ESTÁ na lista :) ");
} else {
  console.log("Gustavo NÃO ESTÁ na lista!! ");
}

let nome = "Freddy Kruger";
console.log(nome.endsWith("r")); //retorna true ou false
console.log(nome.startsWith("y")); //retorna true ou false
