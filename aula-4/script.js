function add() {
    //Carregando o elemento ul que tem o ID "Itens"
    var lista = document.getElementById('itens');
    //Carrega o elemento input que tem o ID "campo"
    var campo = document.getElementById('campo');
    //Cria um elemento li 
    var li = document.createElement('li');
    
    //Insere o valor digitado dentro do input campo usando a propriedade "value"
    //para nosso elemento li
    li.innerHTML = campo.value;
    var btn = document.createElement('button');
    btn.innerHTML = "Excluir"
    li.appendChild(btn);
    btn.addEventListener('click', function() {
        // 'this.parentNode' é o <li> (o item que queremos apagar)
        // 'lista' é o <ul> (o pai do <li>)
        console.log(this.parentNode);
        lista.removeChild(this.parentNode);
    });
    
    // 7. Anexa o botão (btn) ao item da lista (li). 
    // AGORA o botão é mantido porque ele é anexado APÓS o texto ser definido.
    li.appendChild(btn);

    // 8. Aplicamos o elemento li dentro do elemento ul
    lista.appendChild(li);

    // 9. Limpa o campo
    campo.value = "";

    //Aplicamos o elemento li dentro do elemento ul
    // lista.appendChild(li);

    //Limpa o campo
    campo.value = "";
}