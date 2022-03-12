
var messageApi = Vue.resource('/admin');

Vue.component('message-row',{
    props: ['message'],
    template:'<div><i>{{message.id }}</i></div>'
});

Vue.component('message-list', {
    props:['messages'],
    // data: function (){
    //     return{
    //         message:null
    //     }
    // },
    template: '<div>'+
        '<message-row v-for="message in messages" :key="message.id" :message="message">'+
        '</div>',
    created:function (){
        messageApi.get().then(result =>
            result.json().then(data =>
                data.forEach(message => this.messages.push(message)))
        )
    }
});

var app = new Vue({
    el: '#app',
    template:'<message-list :messages="messages">',
    data: {
        messages: []
    }
});