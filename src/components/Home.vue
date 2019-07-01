<template>
  <div id="app">
    <div class="container">
      <Employees v-bind:employees="employees" v-on:del-employee="deleteEmployee" />
    </div>
  </div>
</template>

<script>
import Employees from "../components/Employees.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Employees
  },
  data() {
    return {
      employees: [],
      apiURL: "https://localhost:5001/api/employees"
    };
  },
  methods: {
    deleteEmployee(id) {
      const url = `${this.apiURL}/${id}`;
      return axios
        .delete(url)
        .then(
          res =>
            (this.employees = this.employees.filter(
              employee => employee.id !== id
            ))
        )
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get(this.apiURL)
      .then(res => (this.employees = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
.btn {
  margin-top: 35px;
  background-color: white;
  border: 1px solid purple;
  line-height: 0;
  font-size: 17px;
  display: inline-block;
  box-sizing: border-box;
  padding: 20px 15px;
  border-radius: 60px;
  color: black;
  font-weight: 100;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 1;
}
.btn:hover,
.btn:focus {
  color: white;
  background-color: purple;
}
.container {
  position: relative;
  margin-right: auto;
  margin-left: auto;

  max-width: 960px;

  padding-right: 10px;
  padding-left: 10px;
}
</style>
