let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let userC = Vue.extend({
    template: `<div>
        <div>{{name}}</div>
        <div>{{age}}</div>
        <div>{{status}}</div>
    </div>
        `,
    props: ['name', 'age', 'status'],
});
Vue.component('user', userC);
let vue = new Vue({
    el: '#app',
    data: function () {
        return {
            users
        }
    }, methods: {
        change: function () {
            this.users = this.users.map(value => {
                value.status = !value.status;
                return value;
            });
        }
    }
});

