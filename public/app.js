const app = Vue.createApp({
    data() {
        return {
            data: ' ',
        }
    }, 

    template: `            
        <div v-for="item in data">
            <div class="book">
                <div class="content">
                    <p class="descricao">{{ item.descricao }}</p>
                    <div v-if="item.ingredientes">
                        <p class="ingredients">Ingredientes:</p>
                            <ul v-for="ing in item.ingredientes">
                                <li>{{ ing }}</li>
                            </ul>
                    </div>
                    <p class="valor">R$ {{ item.valor }}</p>
                </div>
                <div class="cover">
                    <img :src="item.imagem"/>
                    <p>{{ item.nome }}</p>
                </div>
            </div>
        </div>   

    `,

    methods: {
        menu_entrada() {
            axios.get('http://localhost:4000/entradas')
            .then(resp => {
                this.data = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        menu_principal() {
            axios.get('http://localhost:4000/principais')
            .then(resp => {
                this.data = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        menu_porcao() {
            axios.get('http://localhost:4000/porcoes')
            .then(resp => {
                this.data = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        menu_bebida() {
            axios.get('http://localhost:4000/bebidas')
            .then(resp => {
                this.data = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        menu_sobremesa() {
            axios.get('http://localhost:4000/sobremesas')
            .then(resp => {
                this.data = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}).mount('#app'); 