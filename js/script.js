let input = document.querySelector('input[name=tarefa]'); // referenciar o input 
let btn = document.querySelector('#botao'); // referenciando o button 
let list = document.querySelector('#lista'); // referenciando a lista 

let tarefas = []


function renderizarTarefas(){
    // limpar a listagem dos itens antes de renderizar novamente na tela
    list.innerHTML=''; 
    for(tarefa of tarefas){
        // criar o item da lista
        let itemList = document.createElement('li');

        // add classes no item list
        itemList.setAttribute('class', 'list-group-item list-group-item-action');

        //add texto 
        let itemText = document.createTextNode(tarefa);

        // add o texto no item da lista
        itemList.appendChild(itemText);

        // add o item da lista na lista
        list.appendChild(itemList);
    } 
}

//executando função para renderizar as tarefas
renderizarTarefas();

// "escutando o click no botano"
btn.onclick = function(){
    // capturar o valor digitado pelo usuário 
    let novaTarefa = input.value;

    // validando entrada de dados
    if(novaTarefa !== ''){
        // add o novo valor no array
        tarefas.push(novaTarefa);

        // renderizando a tela novamente 
        renderizarTarefas();

        // limpar input 
        input.value = '';

        //remover mensagens de erro (spans)
        removeSpans();
    }else{
        removeSpans();
        let card = document.querySelector('.card'); 
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        // add texto a span
        let msg = document.createTextNode('Você precisa informar a tarefa a ser realizada')

        // add a msg como filho de span 
        span.appendChild(msg);

        // add span ao card 
        card.appendChild(span);
    }
}

function removeSpans(){
    let spans = document.querySelectorAll('span'); 

    let card = document.querySelector('.card')

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}