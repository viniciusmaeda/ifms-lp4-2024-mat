
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

// uso de template string para melhorar a formação da string
console.log(`A soma de ${numero1} e ${numero2} é: ${somar(numero1, numero2)}`);
console.log('A soma de ', numero1, ' e ', numero2, ' é ', somar(numero1, numero2));

//----------------------------------------------------------
// Arrow function / função anônima

const multiplicar = (n1, n2) => {
  let r = n1 * n2;
  return r;
};
// function multiplicar(n1, n2) {
//   let r = n1 * n2;
//   return r;
// }
console.log(`A multiplicação de ${numero1} e ${numero2} é: ${multiplicar(numero1, numero2)}`);
console.log(typeof(multiplicar));



