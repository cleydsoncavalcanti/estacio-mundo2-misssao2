document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#pnlCatalogo',
        data: {
            receitas: [
                {
                    nome: 'Bolo rolo',
                    imagem: 'bolo_rolo.png',
                    preparo: 'fazer isso assim...',
                    ingredientes: [
                        'alface', 'cenoura', 'mamão'
                    ]
                }

            ],
            newTask: ''
        },
        methods: {
            addTask: function () {
                if (this.newTask.trim() !== '') {
                    this.tasks.push(this.newTask.trim());
                    this.newTask = '';
                }
            }
        }
    });
});
