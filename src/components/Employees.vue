<template>
    <div class="employee-wrap">
       <div v-for="employee in employees" v-bind:key="employee.id" class="item-wrap">
           <EmployeeList v-bind:employee="employee" v-on:del-employee="$emit('del-employee', employee.id)" />
       </div>
    </div>
</template>

<script>
import EmployeeList from './EmployeeList.vue'

export default {
    name: "Employees",
    components: {
        EmployeeList
    },
    props: ["employees"],
}
</script>

<style scoped>
    .employee-wrap{
        
        position: relative;
        margin-top: 90px;
        display: inline-block;
        max-width: 800px;
        min-width: 800px;
        box-sizing: border-box;
        padding: 30px 25px;
        /*padding-top: 180px; */
        background-color: white;
        border: 1px solid purple;
        border-radius: 40px;
        left: 50%;
        -moz-transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
    }
    .item-wrap {
        border-bottom: 1px solid purple;
    }
</style>

