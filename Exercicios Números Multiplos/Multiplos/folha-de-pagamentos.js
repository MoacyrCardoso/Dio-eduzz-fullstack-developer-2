//Resolvendo Desafios Básicos em JavaScript

//1 / 3 - Folha de Pagamento Intermediário Princípios Básicos
//Desafio
//Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, porém temos apenas a quantidade de horas trabalhadas e o valor hora.Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse colaborador.Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.

//Entrada
//Você receverá 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.

//Saída
//Exiba o número e o salário do colaborador, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.No caso do salário, também deve haver um espaço em branco após o $.


//Exemplos de Entrada Exemplos de Saída
//25
//100
//5.50

//NUMBER = 25
//SALARY = U$ 550.00

//1
//200
//20.50

//NUMBER = 1
//SALARY = U$ 4100.00

//6
//145
//15.55

//NUMBER = 6
//SALARY = U$ 2254.75


//1 / 3 - Folha de Pagamento Intermediário Princípios Básicoslet numero = parseInt(gets(25));

let horasTrabalhadas = parseInt(gets(100));
let valorHora = parseFloat(gets(5.50));
let salario = parseFloat(horasTrabalhadas * valorHora).toFixed(2);

console.log("NUMBER = " + " " + numero);
console.log("SALARY = U$ " + " " + salario);