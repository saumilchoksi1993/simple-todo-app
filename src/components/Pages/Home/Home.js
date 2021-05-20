export default {
    data() {
        return {
        }
    },
    methods: {
        goToManageTodos() {
            this.$router.push({
                name: "Todos List"
            });
        }
    }
}