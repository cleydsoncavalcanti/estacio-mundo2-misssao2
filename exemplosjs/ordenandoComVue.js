document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            tasks: ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'],
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
