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

    console.log("Média = "+calcularMedia([4, 8]))
    console.log( aprovacao( calcularMedia([8, 5])))

    console.log("Média = "+calcularMedia([8, 8, 10, 20, 40, 5]))
    console.log( aprovacao( calcularMedia([8, 8, 10, 20, 40, 5])))

    console.log(aprovacao([8, 8, 7, 10, 3, 2, 9]))

    console.log(aprovacao([3, 10, 6]))

//Função recursiva

function contagemRegressiva(numero){
    console.log(numero);
    numero--;
    if(numero > 0){
        contagemRegressiva(numero);
    }
}
    contagemRegressiva(10);

    /*
        Formulario envio de dados para calculo da media
    */
   const formulario1 = document.getElementById('formulario-01')
   if(formulario1)
    formulario1.addEventListener("submit", function(evento){
        //Impede o envio do formulario
        evento.preventDefault();
        evento.stopPropagation();

        if(this.getAttribute('class').match(/erro/)){
            return false;
        }

        //Este metodo FormData() captura os dados do formulario
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()){   

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;//converte para um numero
            
            if(!isNaN(numero)){ //verifica o tipo se e numero
                notas.push(numero)
            }
            
            

            //.push adiciona itens no array
        }
        console.log(notas)
        texto = aprovacao(notas)   
        
        document.getElementById('resultado').innerHTML = texto;   
    });



    
function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else{
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    })
}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/,"") : this.value;

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            //checa condições se esta vazio, se o numero esta entre 0 e 9, se o valor e >= 0 e se o valor e <= 10
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
            
        }
    })
}

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

        if(this.value.match(emailValido)){
            //checa condições se esta vazio, se o numero esta entre 0 e 9, se o valor e >= 0 e se o valor e <= 10
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
            
        }
    });
}

//VALID UF - LIMITA CAMPOS INSERIDOS
const inputUF = document.querySelector("input.uf"),
 countUF = document.querySelector("input.uf"),
 maxLengthUf = input.getAttribute('maxlength');

input.onkeyup = ()=>{
    countUF.innerText = maxLengthUf - input.value.length;
}



let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUF = document.querySelectorAll('input.uf');

for(let emFoco of camposObrigatorios){
    validaCampo(emFoco)
}
for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco)
}
for(let emFoco of camposEmail){
    validaCampoNumerico(emFoco)
}
for(let emFoco of camposUF){
    validaCampoNumerico(emFoco)
}

