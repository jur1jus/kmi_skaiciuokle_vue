const config = {
    data() {
        return {
            svoris: null,
            ugis: null,
            ivertinimas: '-',
            vertinimai: [
                { nuo: 0, iki: 18.4, vertinimas: 'Per mazas svoris'},
                { nuo: 18.5, iki: 24.99, vertinimas: 'Normalus svoris'},
                { nuo: 25, iki: 29.99, vertinimas: 'Virssvoris'},
                { nuo: 30, iki: 34.99, vertinimas: 'I laipsnio nutukimas'},
                { nuo: 35, iki: 39.99, vertinimas: 'II laipsnio nutukimas'},
                { nuo: 40, iki: 999999, vertinimas: 'III laipsnio nutukimas'},
            ]
        };
    },
    watch: {
        kmi(newValue) {
            var vertinimasResult = this.vertinimai.filter(vertinimasValue => newValue >= vertinimasValue.nuo && newValue <= vertinimasValue.iki);

            if(vertinimasResult[0] === undefined) {
                this.ivertinimas = '-';
                return;
            };
            this.ivertinimas = vertinimasResult[0].vertinimas;
        }
    },
    computed: {
        kmi() {
            if(this.svoris <= 0 || this.ugis <= 0) {
                return "-"
            };

            return (this.svoris / Math.pow((this.ugis / 100), 2)).toFixed(2);
        }
    }
}

const app = Vue.createApp(config);

app.mount('#app');