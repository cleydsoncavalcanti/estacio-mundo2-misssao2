

// Função para criar os elementos HTML das receitas e adicioná-los ao container
function getListaIngredientes() {
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
            imagem: "./img/chocolate.jpeg",
            modoDeFazer: [
                "Pré-aqueça o forno a 180°C (350°F). Unte uma forma redonda de bolo com manteiga e farinha ou forre com papel manteiga.",
                "Em uma tigela grande, peneire a farinha de trigo, o cacau em pó, o fermento em pó e o sal. Reserve.",
                "Em outra tigela, bata a manteiga amolecida com o açúcar até obter uma mistura cremosa e homogênea.",
                "Adicione os ovos, um de cada vez, batendo bem após cada adição. Acrescente a essência de baunilha e misture.",
                "Adicione os ingredientes secos peneirados à mistura de manteiga e ovos, alternando com o leite. Comece e termine com os ingredientes secos, misturando bem após cada adição.",
                "Despeje a massa na forma preparada e alise a superfície com uma espátula.",
                "Asse no forno preaquecido por aproximadamente 40 a 50 minutos, ou até que um palito inserido no centro do bolo saia limpo.",
                "Retire o bolo do forno e deixe esfriar na forma por alguns minutos antes de desenformar. Deixe esfriar completamente em uma grade antes de servir."
            ],
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
            imagem: "./img/cenoura.jpeg",
            modoDeFazer: [
                "Pré-aqueça o forno a 180°C (350°F). Unte uma forma retangular ou redonda com manteiga e farinha ou forre com papel manteiga.",
                "Descasque as cenouras, corte-as em pedaços e coloque-as no liquidificador junto com os ovos e o óleo. Bata até obter uma mistura homogênea.",
                "Em uma tigela grande, misture a farinha de trigo, o açúcar, o fermento em pó e a pitada de sal.",
                "Despeje a mistura líquida do liquidificador sobre os ingredientes secos e mexa bem até obter uma massa homogênea.",
                "Despeje a massa na forma preparada e alise a superfície com uma espátula.",
                "Asse no forno preaquecido por cerca de 30 a 40 minutos, ou até que um palito inserido no centro do bolo saia limpo.",
                "Retire o bolo do forno e deixe esfriar na forma por alguns minutos antes de desenformar. Deixe esfriar completamente em uma grade antes de servir."
            ],
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
            imagem: "./img/fuba.jpeg",
            modoDeFazer: [
                "Pré-aqueça o forno a 180°C (350°F). Unte uma forma retangular ou redonda com manteiga e farinha ou forre com papel manteiga.",
                "Em uma tigela, misture o fubá, a farinha de trigo e o fermento em pó. Reserve.",
                "No liquidificador, adicione os ovos, o açúcar, o leite e o óleo. Bata bem até obter uma mistura homogênea.",
                "Despeje a mistura líquida do liquidificador sobre os ingredientes secos e mexa bem até obter uma massa homogênea.",
                "Despeje a massa na forma preparada e alise a superfície com uma espátula.",
                "Asse no forno preaquecido por cerca de 40 a 50 minutos, ou até que um palito inserido no centro do bolo saia limpo.",
                "Retire o bolo do forno e deixe esfriar na forma por alguns minutos antes de desenformar. Deixe esfriar completamente em uma grade antes de servir."
            ],
        },
    ];
    const receitasDiv = document.getElementById("pnlCatalogo");
    let html = "";
    receitas.forEach((receita) => {
        html += getCard(receita);
    });
    receitasDiv.innerHTML = html;
}
// Função para criar o card da receita
function getCard(receita) {
    return `
        <div class="mb-4" style="min-width: 400px; max-width: 600px;">
            <div class="card">
                <img src="${receita.imagem}" class="card-img-top" alt="${receita.nome}">
                <div class="card-body">
                    <h5 class="card-title">${receita.nome}</h5>
                    <h6 class="card-subtitle mb-2 text-muted my-2">Ingredientes:</h6>
                    <ul class="list-unstyled">
                        ${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join("")}
                    </ul>
                    <p class="card-text">Modo de fazer:</p>
                    <ol class="">
                        ${receita.modoDeFazer.map(fazer => `<li class="text-justify">${fazer}</li>`).join("")}
                    </ol>
                </div>
            </div>
        </div>`;
}
// Chamando a função para exibir as receitas na página
document.addEventListener('DOMContentLoaded', function () {
    getListaIngredientes();
});