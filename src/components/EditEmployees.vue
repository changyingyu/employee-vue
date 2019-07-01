<template>
    <div>
        <form @submit="editEmployee">
            <input type="text" v-model="name" name="name" placeholder="name">
            <input type="text" v-model="email" name="email" placeholder="email">
            <input type="text" v-model="phone" name="phone" placeholder="phone">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>

export default {
    name: "EditEmployees",
    data(){
        return {
            name: '',
            email: '',
            phone: ''
        }
    },
    methods: {
        editEmployee(e){
            e.preventDefault();
            const newEmployee = {
                name: this.name,
                email: this.email,
                phone: this.phone,
            }
            this.$emit('edit-employee', newEmployee);
            this.name = '';
            this.email = '';
            this.phone = '';
        }
    }
}
</script>

<style scoped>
    form {
        display:flex;
    }

    input[type="text"]{
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }
</style>
