/*

Esse exemplo demonstra o uso do spread operator

*/

let pessoa = {
  nome: "Gustavo",
  idade: 30,
  cargo: "Programador",
};

let novaPessoa = {
  ...pessoa, //spread operator
  anoAtual: 2021,
  cidade: "São Paulo",
};

console.log(novaPessoa);
