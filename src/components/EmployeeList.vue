<template>
    <div class="employee-item" v-bind:class="{'is-complete':employee.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{employee.name}}
             {{employee.email}}
             {{employee.phone}}
            <EditEmployees v-on:edit-employee="editEmployee" v-bind:id="employee.id"/>
            <button @click="$emit('del-employee', employee.id)" class="del"> X</button>
            
        </p>
    </div>
</template>


<script>
import EditEmployees from './EditEmployees.vue';
import axios from 'axios';

export default {
    name: "EmployeeList",
    props: ["employee"],
    components: {
        EditEmployees
    },
    methods: {
        markComplete() {
            this.employee.completed = !this.employee.completed;
        },
        editEmployee(editList) {
            const {id, name, email, phone } = editList;
            
            axios.put(`https://localhost:5001/api/employees/${id}?name=${name}&email=${email}&phone=${phone}`)
            .then(res => this.employees = [...this.employees, res.data])
            .catch(err => console.log(err));
        }

    }
}
</script>

<style scoped>
    .employee-item {
        background: #f4f4f4;
        padding: 10px;
        /*border-bottom:  1pc #ccc dotted;*/
    }

    .is-complete {
        text-decoration: line-through;
    }

    .del {
        background: #ff0000;
        color: #ffffff;
        border:  none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>
