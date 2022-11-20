let counting = 0
let option
let students = []
let firstGrades = []
let secondGrades = []
let thirdGrades = []
let averageScores = []

while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um estudante e suas notas na lista
    2. Mostrar alunos(as) cadastrados(as)
    3. Sair do programa
  `))

  switch(option) {
    case 1:
      let student = prompt("Digite o nome do(a) estudante")
      students.push(student)

      let firstGrade = prompt("Digite sua primeira nota: ")
      while (firstGrade > 10 || firstGrade < 0) {
        alert("Valor inválido! Somente valores entre 0 e 10 são aceitos!")
        firstGrade = prompt("Digite sua primeira nota: ")
      }
      firstGrades.push(firstGrade)

      let secondGrade = prompt("Digite sua segunda nota: ")
      while (secondGrade > 10 || secondGrade < 0) {
        alert("Valor inválido! Somente valores entre 0 e 10 são aceitos!")
        secondGrade = prompt("Digite sua segunda nota: ")
      }
      secondGrades.push(secondGrade)

      let thirdGrade = prompt("Digite sua terceira nota: ")
      while (thirdGrade > 10 || thirdGrade < 0) {
        alert("Valor inválido! Somente valores entre 0 e 10 são aceitos!")
        thirdGrade = prompt("Digite sua terceira nota: ")
      }
      thirdGrades.push(thirdGrade)

      let averageScore = ((Number(firstGrade) + Number(secondGrade) + Number(thirdGrade))/3).toFixed(2) 
      averageScores.push(averageScore)

      counting++
      break
    case 2:
      if(students.length == 0) {
        alert("Não existem alunos(as) cadastrados(as)")
      } else {
        for(i = 0; i < counting; i++) {
          if (averageScores[i] == 10) {
            alert(`A média do(a) aluno(a) ${students[i]} é ${averageScores[i]}!\nParabéns, ${students[i]}! Você foi aprovado(a) no concurso com nota máxima!`)
          } else if (averageScores[i] >= 7 && averageScores[i] < 10) {
            alert (`A média do(a) aluno(a) ${students[i]} é ${averageScores[i]}!\nParabéns, ${students[i]}! Você foi aprovado(a) no concurso!`)
          } else {
            alert(`A média do(a) aluno(a) ${students[i]} é ${averageScores[i]}!\nNão foi dessa vez, ${students[i]}! Tente novamente!`)
          }       
        }
      }
      break
    case 3: 
      alert("Que comece a seleção!")
      break
    default:
      alert("Opção inválida. Tente novamente")
  }
}