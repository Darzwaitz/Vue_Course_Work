const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredValue: '',
            taskListIsVisible: true
        };
    },
    methods: {
        showTask(){
            this.tasks.push(this.enteredValue);
        },
        toggleTaskList(){
            // set taskListIsVisible to true or false
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    },
    computed: {
        buttonCaption(){
            return this.taskListIsVisible ? 'Hide list' : 'Show list';
        }
    }
});

app.mount('#assignment');