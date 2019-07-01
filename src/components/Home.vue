<template>
  <div id="app">
    <Employees v-bind:employees="employees" v-on:del-employee="deleteEmployee" />
  </div>
</template>

<script>

import Employees from '../components/Employees.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Employees
  },
  data() {
    return {
      employees: [],
      apiURL: 'https://localhost:5001/api/employees',
    }
  },
  methods: {
    deleteEmployee(id) {
      const url = `${this.apiURL}/${id}`;
      return axios.delete(url).then(res => this.employees = this.employees.filter(employee => employee.id !== id))
      .catch(err => console.log(err));
    }
  },
  created() {
    axios.get(this.apiURL)
    .then(res => this.employees = res.data)
    .catch(err => console.log(err))
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetical, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
