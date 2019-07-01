<template>
    <div>
        <form @submit="addEmployee">
            <input type="text" v-model="name" name="name" placeholder="name">
            <input type="text" v-model="email" name="email" placeholder="email">
            <input type="text" v-model="phone" name="phone" placeholder="phone">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "AddEmployee",
    data(){
        return {
            name: '',
            email: '',
            phone: ''
        }
    },
    methods: {
        addEmployee(e){
          e.preventDefault();
          const newEmployee = {
            name: this.name,
            email: this.email,
            phone: this.phone,
        }
        axios.post(`https://localhost:5001/api/employees?name=${this.name}&email=${this.email}&phone=${this.phone}`)
          .then()
          .catch(err => console.log(err));  
            /*this.name = '';
            this.email = '';
            this.phone = '';*/
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
