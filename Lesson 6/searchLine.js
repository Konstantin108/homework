Vue.component('user-search', {
    data() {
        return {
            userSearch: '',
            filtered: [],
        };
    },
    methods: {
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<div>    
                    <form action="#" class="search-form" @submit.prevent="filter">
                        <input type="text" class="search-field" @click="userSearch">
                        <button class="btn search" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
               </div>`  //не представляю как теперь должна выглядеть разметка чтобы что то заработало

})

