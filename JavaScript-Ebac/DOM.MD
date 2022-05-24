# DOM
- Documento Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML ou XML
- Não é uma uma linguagem de programação
- É essencial para o JS entender o modelo de pagina web

# Para que serve?
- Alterar a estrutura do HTML
- Alterar o estilo do CSS
- Alterar o conteúdo

## Como? 
- Disponibilizando API (Application Programming Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos (nós / nodes)- 

## Exemplo HTML
<html>
    <heade>
    <html>
</html>

## Exemplo Objeto
objeto = {
    html : {
        header :{},
        body : {
            h1 : {

            }
        }
    }
}

## DOM x JS 
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar JavaScript

- Código é executado por navegadores
- Tornar as páginas dinâmicas
- Evitar Requisições desnecessárias (performance)
- SPA (Single Page Applications) -- Não precisa recarregar para exibir uma nova informação
- Reagir rapidamente a ações dos usuários

### Desvantagens de usar o JavaScript

- Código é executado por navegadores
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no- documento

### Exemplos

### Seleciona o objeto e diposinibiliza (métodos / funçõe).callback
objeto.callback

- document.getElementById(id)
- document.getElementsByTagName('div')[1].innerText = "Lorem ipsun"
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name') - Insere o atributo
- element.getAttribute('name') - busca o atributo
- element.addEventListener() - quando acessado o elemento, executa uma ação.
- window.location - para saber a URL de uma pagina
- window.location.reload - reinicia a pagina(da um F5)
- window.onload - carrega uma função quando o windows e carregado
- console.log()
- window.scrollTo(x, y) - vai para uma localização com o Scroll da pagina

### Seletores

- Tipos de seletores: Tag, ID, Class, Name, Query
- Callback
- getElementById('app')
- getElementsByTagName('div').[40]
    
    let formEmail = document.getElementsByTagName('form')[0]

- getElementsByName('name')
    
    let campoNome = document.getElementsByClassName('name')[0]

    campoNome.value = "Thiago";

    document.getElementsByName('email')[0].value = "raspainha@gmail.com"

- getElementsByClassName('h1')[0].style.color = "#f00"
 
    getElementsByClassName('h1')[0].style.innerText = "Os melhores cursos são de front end"

- querySelectorAll() // #id | .class

    document.querySelectorAll('#app')

    document.querySelectorAll('.main-logo')
    

### Formulários

- Precisamos evitar que o usuário passe dados incorretos
- Ou seja, para direcionar melhor o uso do nosso sistema
- Proteger a injeção de código malicioso
- Evitar erros de processamento
- Formatar dados para facilitar o processamento
- Filtro para o back-end
- Regex (expressões regulares)

### Referências

- DOM: https://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o
- Expressões Regulares: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
