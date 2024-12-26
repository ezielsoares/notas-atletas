let atletas = [
{
    nome: "Rebeka Andreoli",
    notas: [10, 9.8, 9.5, 10, 9.9]
},
{
    nome: "Flávia Sorella",
    notas: [9.4, 10, 7, 9, 8.6]
},
{
    nome: "Lorraine Oliver",
    notas: [10, 9.7, 10, 9.5, 8.5]
},
{
    nome: "Júlia Soeira",
    notas: [9.7, 10, 8.8, 9.5, 9]
}
];

for (let i = 0; i < atletas.length; i++) {
    let notas = atletas[i].notas.sort((a, b) => a - b);
    let notasComputadas = notas.slice(1,4);

    let soma = 0;
    let mediaNotas = 0;
    notasComputadas.forEach(function(nota) {
        soma += nota;
        mediaNotas = soma / notasComputadas.length;
    });
    
    console.log(`Atleta: ${atletas[i].nome}`);
    console.log(`Notas Obtidas: ${atletas[i].notas}`);
    console.log(`Média Válida: ${mediaNotas}`);
    console.log();
};



