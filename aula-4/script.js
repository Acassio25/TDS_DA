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

    //Aplicamos o elemento li dentro do elemento ul
    lista.appendChild(li);

    //Limpa o campo
    campo.value = "";
}