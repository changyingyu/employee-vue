<template>
    <div>
       <div v-for="employee in employees" v-bind:key="employee.name">
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

</style>

