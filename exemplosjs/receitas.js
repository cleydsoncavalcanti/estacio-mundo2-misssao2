

// Função para criar os elementos HTML das receitas e adicioná-los ao container
function exibirReceitas() {
    let receitas = [
        {
            nome: "Bolo de Chocolate",
            ingredientes: [
                "2 xícaras de farinha de trigo",
                "1 xícara de cacau em pó",
                "1 colher de chá de fermento em pó",
                "1/2 colher de chá de sal",
                "1 xícara de manteiga",
                "1 e 1/2 xícaras de açúcar",
                "4 ovos",
                "1 colher de chá de essência de baunilha",
                "1 xícara de leite",
            ],
            imagem: "caminho-da-imagem/bolo-chocolate.jpg",
            modoDeFazer: "Preparo do bolo de chocolate...",
        },
        {
            nome: "Bolo de Cenoura",
            ingredientes: [
                "2 cenouras médias",
                "3 ovos",
                "1/2 xícara de óleo",
                "2 xícaras de açúcar",
                "2 e 1/2 xícaras de farinha de trigo",
                "1 colher de sopa de fermento em pó",
                "1 pitada de sal",
            ],
            imagem: "caminho-da-imagem/bolo-cenoura.jpg",
            modoDeFazer: "Preparo do bolo de cenoura...",
        },
        {
            nome: "Bolo de Fubá",
            ingredientes: [
                "3 ovos",
                "2 xícaras de açúcar",
                "3 xícaras de leite",
                "1 xícara de óleo",
                "2 xícaras de fubá",
                "1 xícara de farinha de trigo",
                "1 colher de sopa de fermento em pó",
            ],
            imagem: "caminho-da-imagem/bolo-fuba.jpg",
            modoDeFazer: "Preparo do bolo de fubá...",
        },
    ];
    const receitasDiv = document.getElementById("app");
    let html = "";
    receitas.forEach((receita) => {
        html += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.nome}">
            <div class="card-body">
              <h5 class="card-title">${receita.nome}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Ingredientes:</h6>
              <ul class="list-unstyled">
                ${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("")}
              </ul>
              <p class="card-text">Modo de fazer:</p>
              <p>${receita.modoDeFazer}</p>
            </div>
          </div>
        </div>`;
    });
    receitasDiv.innerHTML = html;
}

// Chamando a função para exibir as receitas na página
document.addEventListener('DOMContentLoaded', function () {
    exibirReceitas();
});