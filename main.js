const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programação você está estudando?');

alert('Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagem + '!');

let gostar = prompt('Você gosta de estudar ' + linguagem + '? Responda com o número 1 para SIM ou 2 para NÃO.');

if(gostar == 1) {
  alert('Muito bom! Continue estudando e você terá muito sucesso.');
} else if (gostar == 2) {
  alert('Ahh que pena... Já tentou aprender outras linguagens?');
}