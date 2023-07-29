// document.addEventListener('DOMContentLoaded', function () {
    const app = new Vue({
        el: '#app',
        data: {
            users: [],
        },
        created() {
            this.fetchUsers();
        },
        methods: {
            fetchUsers() {
                console.log('funcao fetchUsers')
                const apiUrl = 'https://reqres.in/api/users?per_page=10';

                axios.get(apiUrl)
                    .then(response => {
                        this.users = response.data.data;
                        console.log('this.users', this.users)
                    })
                    .catch(error => {
                        console.error('Error fetching users:', error);
                    });
            },
        },
    });
// });
