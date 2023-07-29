// Array que irá armazenar os números adicionados pelo usuário
let numeros = [];
// let numeros = [3, 2, 5, 8, 9, 7, 1, 0];

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
            numeros = quickSort(numeros);
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
 * Função shuffle, com o objetivo de embaralhar os elementos de um vetor.
 * @param {Array} arr - O vetor a ser embaralhado.
 * @param {number} numSwaps - A quantidade de trocas a serem realizadas.
 */
const shuffleSort = (arr, numSwaps) => {
    console.log('função shuffleSort', arr);

    const n = arr.length;
    for (let i = 0; i < numSwaps; i++) {
        const index1 = Math.floor(Math.random() * n);
        const index2 = Math.floor(Math.random() * n);
        swap(arr, index1, index2);
    }
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
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the index of the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted array
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

/**
 * Função quick_sort, para ordenar um vetor de inteiros com o algoritmo Quick Sort, recursivo.
 * @param {Array} arr - O vetor de valores inteiros a ser ordenado.
 * @param {number} start - A posição inicial do vetor a ser considerada para ordenação.
 * @param {number} end - A posição final do vetor a ser considerada para ordenação.
 */
const quickSort = (arr) => {
    console.log('função quickSort', arr);

    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    let retorno = [...quickSort(left), pivot, ...quickSort(right)];
    console.log('retorno final', retorno)
    return [...quickSort(left), pivot, ...quickSort(right)];
};

/**
 * Helper function for Quick Sort to partition the array around a pivot element.
 * @param {Array} arr - The array to be partitioned.
 * @param {number} start - The start index of the subarray to be partitioned.
 * @param {number} end - The end index of the subarray to be partitioned.
 * @returns {number} - The index of the pivot element after partitioning.
 */
const partition = (arr, start, end) => {
    // Choose the last element as the pivot
    const pivot = arr[end];

    // Initialize the index for elements smaller than the pivot
    let partitionIndex = start;

    // Loop through the subarray and move elements smaller than the pivot to the left
    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }

    // Move the pivot element to its correct position
    swap(arr, partitionIndex, end);

    return partitionIndex;
};
/**
 * Mistura aleatoriamente os elementos da lista de números (algoritmo Fisher-Yates).
 * Embaralha os números no array "numeros" trocando elementos aleatórios repetidamente.
 * Após embaralhar a lista, chama a função "atualizarLista()" para exibir a lista reorganizada.
 */
const misturarLista = () => {
    const numSwaps = numeros.length * 2; // Adjust the number of swaps as desired
    shuffleSort(numeros, numSwaps);
    atualizarLista();
};
