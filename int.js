const botao = 
document.getElementById('MeuBotao');
const inputReal = 
document.getElementById('valorReal');
const inputEuro = 
document.getElementById('valorEuro');

//Tornar o botão transparente quan o cursor passar em cima
botao.addEventListener('mouseover', () => {
    botao.style.opacity = '0.7';
});

//Para Retornar a opacidade ao normal quando o cursos sai de cima do botão
botao.addEventListener('mouseout',
() => {
    botao.style.opacity = '1';
});

//Converter os valores em Real para Euro (Utilizarei o valor 0.19 como refêrencia ao valor do Real)
botao.addEventListener('click', () => {
    const valorReal = parseFloat (inputReal.value);
    const valorEuro = valorReal * 0.19;

    inputEuro.value = valorEuro.toFixed(2);
});