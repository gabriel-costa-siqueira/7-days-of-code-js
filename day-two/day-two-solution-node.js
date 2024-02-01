const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const firstQuestion = 'Qual o seu nome? ';
const secondQuestion = 'Quantos anos você tem? ';
const thirdQuestion = 'Qual linguagem de programação você está estudando? ';

const makeQuestion = (question) => {
    return new Promise(resolve => rl.question(question, (resposta) => resolve(resposta)))
}

async function askQuestions() {
    const name = await makeQuestion(firstQuestion);
    const age = await makeQuestion(secondQuestion);
    const programmingLanguage = await makeQuestion(thirdQuestion);

    console.log(`Olá ${name}, você tem ${age} anos e já está aprendendo ${programmingLanguage}!`);
    const fourthQuestion = `Você gosta de estudar ${programmingLanguage}? Responda com o número 1 para SIM ou 2 para NÃO.`;
    const likeLanguage = await makeQuestion(fourthQuestion);

    if (likeLanguage === '1') {
        console.log('Muito bom! Continue estudando e você terá muito sucesso.')
    } else if (likeLanguage === '2') {
        console.log('Ahh que pena... Já tentou aprender outras linguagens?')
    } else {
        console.log('Resposta não foi interpretada.')
    }
    
    process.exit();
}

askQuestions()





