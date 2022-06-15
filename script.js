// Explicação do programa
alert(`
Seja bem vindo(a)!
Nesse desafio VOCÊ vai inserir os dados de 3 alunos sendo:
1) Nome
2) 1a nota
3) 2a nota
 O programa irá calcular a média dos mesmos e informar se estão aprovados ou não!
`)

let list = [
    {
        name: "a",
        gradeOne: 0,
        gradeTwo: 0,
    }, 
    {
        name: "",
        gradeOne: 0,
        gradeTwo: 0,
    },
    {
        name: "",
        gradeOne: 0,
        gradeTwo: 0,
    }
]

for (let item = 0; item < list.length; item++) {
    list[item].name = prompt(`Nome do ${(item + 1)}o aluno:`)
    list[item].gradeOne = Number(prompt("Primeira nota:"))
    list[item].gradeTwo = Number(prompt("Segunda nota:"))
}

function average(x, y) {
    let result = (x + y) / 2
    return result
}

for (let result of list) {
    let averageResult
    if (average(result.gradeOne, result.gradeTwo) >= 7) {
        alert(`
        A media de ${result.name} foi ${average(result.gradeOne, result.gradeTwo)}
        Parabéns, ${result.name}! Você foi aprovado!
        `)
    } else {
        alert(`
        A media de ${result.name} foi ${average(result.gradeOne, result.gradeTwo)}
        Não foi dessa vez, ${result.name}! Tente novamente!
        `)
    }
}