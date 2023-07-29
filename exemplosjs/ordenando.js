// Array que irá armazenar os números adicionados pelo usuário
let numeros = [3, 2, 5, 8, 9, 7, 1, 0];

/**
 * Adiciona um número à lista de números.
 * Obtém o valor do campo de entrada com o ID "numInput", converte-o para um número inteiro,
 * e se for um número válido, adiciona-o ao array "numeros". Em seguida, limpa o campo de entrada
 * e dá foco novamente ao campo numérico para facilitar a entrada subsequente.
 * Após adicionar o número à lista, chama a função "atualizarLista()" para exibir os números atualizados.
 */
const adicionarNumero = () => {
    console.log('funcao adicionarNumero');
    const numInput = document.getElementById("numInput");
    const numero = parseInt(numInput.value);

    if (!isNaN(numero)) {
        numeros.push(numero);
        numInput.value = "";
        numInput.focus(); // Dar foco ao campo numérico após adicionar um número
        atualizarLista();
    }
};

/**
 * Adiciona um número à lista quando o usuário pressiona a tecla "Enter" no campo de entrada.
 * @param {Event} event - O objeto de evento gerado pelo pressionamento de tecla.
 */
const adicionarNumeroOnEnter = (event) => {
    console.log('funcao adicionarNumeroOnEnter');
    if (event.key === "Enter") {
        adicionarNumero();
    }
};

/**
 * Atualiza a exibição da lista de números.
 * Obtém o elemento com o ID "numList" (provavelmente uma lista <ul>) e limpa seu conteúdo.
 * Em seguida, cria um elemento <li> para cada número no array "numeros" e adiciona-o à lista.
 */
const atualizarLista = () => {
    console.log('funcao atualizarLista');
    const numList = document.getElementById("numList");
    numList.innerHTML = "";

    for (const numero of numeros) {
        const li = document.createElement("li");
        li.textContent = numero;
        numList.appendChild(li);
    }
};

/**
 * Ordena a lista de números usando o método selecionado pelo usuário.
 * Obtém o método de ordenação selecionado a partir do elemento com o ID "sortMethod"
 * (provavelmente um menu suspenso). Com base no método selecionado, chama a função correspondente
 * para realizar a ordenação.
 * Após a ordenação, chama a função "atualizarLista()" para exibir a lista reorganizada.
 * Se o método de ordenação selecionado não for reconhecido, exibe um alerta informando que é inválido.
 */
const ordenarLista = () => {
    console.log('funcao ordenarLista');
    const method = document.getElementById("sortMethod").value;

    switch (method) {
        case "shuffle":
            shuffleSort(numeros);
            break;
        case "bubble_sort":
            bubbleSort(numeros);
            break;
        case "selection_sort":
            selectionSort(numeros);
            break;
        case "quick_sort":
            quickSort(numeros);
            break;
        case "particionamento":
            particionamentoSort(numeros);
            break;
        default:
            alert("Método de ordenação inválido");
    }

    atualizarLista();
};

/**
 * Implementação do método de ordenação Swap.
 * [Implementação necessária]
 */
const swap = (arr, pos1, pos2) => {
    console.log('funcao swap', arr, pos1, pos2);
    // Verifica se as posições são válidas
    if (pos1 < 0 || pos1 >= arr.length || pos2 < 0 || pos2 >= arr.length) {
        throw new Error('Posições inválidas');
    }

    // Troca os valores nas posições fornecidas
    const temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
};

/**
 * Implementação do método de ordenação Shuffle.
 * [Implementação necessária]
 */
const shuffleSort = (arr) => {
    console.log('função shuffleSort', arr);
    // Implementação do método de ordenação Shuffle
};

/**
 * Implementação do método de ordenação Bubble Sort.
 * [Implementação necessária]
 */
const bubbleSort = (arr) => {
    console.log('função bubbleSort', arr);
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

/**
 * Implementação do método de ordenação Selection Sort.
 * [Implementação necessária]
 */
const selectionSort = (arr) => {
    console.log('função selectionSort', arr);
    // Implementação do método de ordenação Selection Sort
};

/**
 * Implementação do método de ordenação Quick Sort.
 * [Implementação necessária]
 */
const quickSort = (arr) => {
    console.log('função quickSort', arr);
    // Implementação do método de ordenação Quick Sort
};

/**
 * Implementação do método de ordenação Particionamento.
 * [Implementação necessária]
 */
const particionamentoSort = (arr) => {
    console.log('função particionamentoSort', arr);
    // Implementação do método de ordenação Particionamento
};

/**
 * Mistura aleatoriamente os elementos da lista de números (algoritmo Fisher-Yates).
 * Embaralha os números no array "numeros" trocando elementos aleatórios repetidamente.
 * Após embaralhar a lista, chama a função "atualizarLista()" para exibir a lista reorganizada.
 */
const misturarLista = () => {
    // console.log('funcao misturarLista',numeros)
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    atualizarLista();
};
