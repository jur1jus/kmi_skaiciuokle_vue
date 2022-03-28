const config = {
    data() {
        return {
            svoris: null,
            ugis: null,
            ivertinimas: '-',
            spalva: '',
            vertinimai: [
                { nuo: 0, iki: 18.4, vertinimas: 'Per mazas svoris', spalva: '#80ff00' },
                { nuo: 18.5, iki: 24.99, vertinimas: 'Normalus svoris', spalva: '#1773e3' },
                { nuo: 25, iki: 29.99, vertinimas: 'Virssvoris', spalva: '#f2ff00' },
                { nuo: 30, iki: 34.99, vertinimas: 'I laipsnio nutukimas', spalva: '#ffc800' },
                { nuo: 35, iki: 39.99, vertinimas: 'II laipsnio nutukimas', spalva: '#d97d0d' },
                { nuo: 40, iki: 999999, vertinimas: 'III laipsnio nutukimas', spalva: '#ff1900' }
            ]
        };
    },
    watch: {
        kmi(newValue) {
            var vertinimasResult = this.vertinimai.filter(vertinimasValue => newValue >= vertinimasValue.nuo && newValue <= vertinimasValue.iki);

            if(vertinimasResult[0] === undefined) {
                this.ivertinimas = '-';
                this.spalva = ''
                return;
            };
            this.ivertinimas = vertinimasResult[0].vertinimas;
            this.spalva = vertinimasResult[0].spalva;
        }
    },
    computed: {
        kmi() {
            if(this.svoris <= 0 || this.ugis <= 0) {
                return "-"
            };

            return (this.svoris / Math.pow((this.ugis / 100), 2)).toFixed(2);
        },
        vertinimasBorderColor() {
            return { borderColor: this.spalva !== '' ? this.spalva : '#ced4da' }
        }
    }
}

const app = Vue.createApp(config);

app.mount('#app');