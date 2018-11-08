var app = new Vue({
    el: ".app",
    data() {
        return {
            time: {
                hours: "",
                minutes: "",
                seconds: "",
            }
        }
    },

    methods: {
        change() {
            setInterval(() => {
                this.time.hours = new Date().getHours()
                this.time.minutes = new Date().getMinutes()
                this.time.seconds = new Date().getSeconds()
            }, 1000)
        },
    },

    created() {
        this.change()
    }

})