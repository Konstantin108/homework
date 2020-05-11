const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {},
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error); //как сделать чтобы еррор появлялся при ошибке
                })
        },
    },
    mounted() {
        console.log(this);
    }
});