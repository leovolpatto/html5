function salvar() {
    var nome = $("#nome").val();
    var idade = $("#idade").val();
    var obs = $("#obs").val();

    inserirLinhaNaTabela(nome, idade, obs);
    gravar(nome, idade, obs);
}

function inserirLinhaNaTabela(nome, idade, obs) {
    $("#listagem tr:last")
            .after(
                    "<tr><td>" + nome +
                    "</td><td>" + idade +
                    "</td><td>" + obs +
                    "</td></tr>");
}

function carregarDados() {
    for (var i = 0; i < localStorage.length; i++) {
        var info = JSON.parse(localStorage.getItem(localStorage.key(i)));
        
        inserirLinhaNaTabela(info.nome, info.idade, info.obs);
    }
}

function excluirTudo(){
    localStorage.clear();
}

function gravar(nome, idade, obs) {
    var i = localStorage.valueOf().length;

    var dados = new Object();
    dados.nome = nome;
    dados.idade = idade;
    dados.obs = obs;

    localStorage.setItem(i, JSON.stringify(dados));
}

carregarDados();