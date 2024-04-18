const app = Vue.createApp({
    data() {
        return {
            title: 'Cardápio dos Guri',
            principais: ' ',
            entradas: ' ',
            porcoes: ' ',
            bebidas: ' ',
            sobremesas: ' '
        }
    }, 

    template: `
    <div id="app" v-cloak>
        <h1>{{ title }}</h1>
        
        <div v-if="menu_entrada" class="box">
            <ul>
                <li v-for="item in entradas">{{ item }}</li>
            </ul>
        </div>
        <div v-if="menu_principal" class="box two">
            <ul>
                <li v-for="item in principais">{{ item }}</li>
            </ul>
        </div>    
        <div v-if="menu_porcao" class="box three">
            <ul>
                <li v-for="item in porcoes">{{ item }}</li>
            </ul>
        </div>   
        <div v-if="menu_bebida" class="box four">
            <ul>
                <li v-for="item in bebidas">{{ item }}</li>
            </ul>
        </div>   
        <div v-if="menu_sobremesa" class="box five">
            <ul>
                <li v-for="item in sobremesas">{{ item }}</li>
            </ul>
        </div>   
    </div>
    `,

    methods: {
        menu_entrada() {
            axios.get('http://localhost:4000/entradas')
            .then(resp => {
                this.entradas = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        menu_principal() {
            axios.get('http://localhost:4000/principais')
            .then(resp => {
                this.principais = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        menu_porcao() {
            axios.get('http://localhost:4000/porcoes')
            .then(resp => {
                this.porcoes = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        menu_bebida() {
            axios.get('http://localhost:4000/bebidas')
            .then(resp => {
                this.bebidas = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        menu_sobremesa() {
            axios.get('http://localhost:4000/sobremesas')
            .then(resp => {
                this.sobremesas = resp.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}).mount('#app');