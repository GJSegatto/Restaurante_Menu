const app = Vue.createApp({
    data() {
        return {
            data: '',
        }
    }, 

    template: `
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
            </div>
        </div>
        <div class="book">
            <p>Hello</p>
            <div class="cover">
                <p>Hover Me</p>
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
                console.log(this.bebidas[0].imagem);
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