//9- FUP que calcule a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a 7, a mensagem "Recuperação", caso a média se igual ou superior a 5 e inferior a 7, ou a mensagem “Reprovado”, caso a média seja inferior a 5.

let nota1, nota2, nota3, media, situacao

media = (nota1+ nota2+ nota3)/3

console.log(abc3)

if (media >= 7 && media <= 10){
  situacao = 'Aprovado'
} else if (media >= 5) {
  situacao = 'Recuperação'
} else if (media < 5 && media >= 0) {
  situacao = 'Reprovado'
} else {
  situacao = 'Valor inválido inserido!'
}