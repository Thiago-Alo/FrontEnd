## Cálculo média aluno
var nota1 = 10;
let nota2 = 8;
const nota3 = 9;
var media = (nota1 + nota2 + nota3) / 3
if(media >= 8){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}

## Laços de repetição
## While( condição ){
#    execucao   }

var contador = 0;
while(contador < 10){
    contador++;
}

var hora = 24;
while( hora > 0){
    hora--;
    console.log(hora);
}
## DO {
#    EXECUÇÃO
# } while(condição);
---------------------
## for(expressãoInicial ; condição ; incremento){
  ## Execução  }

//Fazer a revisão do carro aos 10km
let km;
let revisao = 10;

for(km = 0;km < revisao;km++>){
    console.log("apenas "+km+"kms então pode rodar")
}

### Cálculo de média de aluno
var nota = 0;

var alunos =[
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [8 ,8 ,8 ,8]
]

for(var i = 0; i < alunos.length; i++){

    nota = 0;
    notasAluno = alunos[i];
    console.log("Aluno: "+i+1);
    console.log("Notas: "+ notasAluno);

    for(c = 0; c < notasAluno.length;c++){
        nota += notasAluno[c];
    }
    media = nota / 4
    if(media >= 7){
        resultado = "Aprovado";
    }else{
        resultado = "Reprovado";
    }
    console.log("Média: "+media+" - "+resultado);
}

## FUNÇÕES

function calcularMedia( notas ) {

    let soma = 0;
    for ( c = 0; c < notas.length; c++){
        soma += notas[c];
    }
    media = soma / notas.length;

    return media;
}

function aprovacao( notas ){
	
  let media = calcularMedia( notas ); //escopo local
  
  let condicao  = media >= 7 ? "Aprovado" : "Reprovado";
  
  return "Média: "+media + " - " +condicao;
}

/*console.log("Média = "+calcularMedia([4, 8]))
console.log( aprovacao( calcularMedia([8, 5])))

console.log("Média = "+calcularMedia([8, 8, 10, 20, 40, 5]))
console.log( aprovacao( calcularMedia([8, 8, 10, 20, 40, 5])))*/

console.log(aprovacao([8, 8, 7, 10, 3, 2, 9]))

console.log(aprovacao([3, 10, 6]))