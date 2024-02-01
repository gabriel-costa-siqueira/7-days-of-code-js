const name = prompt('Qual o seu nome? ');
const age = prompt('Quantos anos você tem? ');
const programmingLanguage = prompt('Qual linguagem de programação você está estudando? ');

alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${programmingLanguage}!`);

const likeLanguage = prompt(`Você gosta de estudar ${programmingLanguage}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (likeLanguage === '1') {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
} else if (likeLanguage === '2') {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
} else {
    alert('Resposta não foi interpretada.')
}
