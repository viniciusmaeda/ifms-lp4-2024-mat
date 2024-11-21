
//----------------------------------------------------------
// Funções

function somar(n1, n2) {
  return n1 + n2;
}

function subtrair(n1, n2) {
  let r = n1 - n2;
  return r;
}

let numero1 = 5;
let numero2 = 7;

// console.log('A soma de 3 + 5 é: ', somar(numero1, numero2));
// console.log('A subtração de 5 - 3 é: ', subtrair(numero2, numero1));


//----------------------------------------------------------
// Template String

// forma convencional de montar um string com variáveis
console.log('A soma de ', numero1, ' e ', numero2, ' é ', somar(numero1, numero2));
// uso de template string para melhorar a formação da string
console.log(`A soma de ${numero1} e ${numero2} é: ${somar(numero1, numero2)}`);

//----------------------------------------------------------
// Arrow function / função anônima

// forma convencional de criar uma função
// function multiplicar(n1, n2) {
//   let r = n1 * n2;
//   return r;
// }
// utilização de arrow function e função anônima
const multiplicar = (n1, n2) => {
  let r = n1 * n2;
  return r;
};
console.log(`A multiplicação de ${numero1} e ${numero2} é: ${multiplicar(numero1, numero2)}`);
console.log(typeof(multiplicar)); // tipo da constante



