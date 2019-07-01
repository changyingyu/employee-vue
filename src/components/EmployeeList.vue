<template>
  <div class="employee-item">
    <div>{{employee.email}}</div>
    <div>
      <span>{{employee.name}}</span>
      <span>{{employee.phone}}</span>
    </div>
    <button @click="$emit('del-employee', employee.id)" class="item-btn">delete</button>
    <button v-on:click="onChangeEdit" class="item-btn">edit</button>
    <EditEmployees
      v-on:edit-employee="editEmployee"
      v-bind:employee="employee"
      v-bind:class="{'edit-pannel':hideEdit}"
    />
  </div>
</template>


<script>
import EditEmployees from "./EditEmployees.vue";
import axios from "axios";

export default {
  name: "EmployeeList",
  data() {
    return {
      hideEdit: true
    };
  },
  props: ["employee"],
  components: {
    EditEmployees
  },
  methods: {
    editEmployee(editList) {
      //update employee info
      const { name, phone } = editList;
      axios
        .put(
          `https://localhost:5001/api/employees/${this.employee.id}?name=${name}&phone=${phone}`
        )
        .then(res => {
          // update latest changed name and phone
          this.employee.name = name;
          this.employee.phone = phone;
          this.hideEdit = true;
          //hide edit form 
        })
        .catch(err => console.log(err));
    },
    onChangeEdit() {
      this.hideEdit = false;
      //show edit
    }
  }
};
</script>

<style scoped>
.employee-item {
  background: white;
  padding: 15px;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #ffffff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
.edit-pannel {
  position: absolute;
  visibility: hidden;
}
.item-btn {
  position: relative;
  float: right;
  background-color: purple;
  border: none;
  color: white;
  padding: 8px 11px;
  font-size: 10px;
  cursor: pointer;
  margin-right: 5px;
  top: -33px;
}

.item-btn:hover {
  background-color: DodgerBlue;
}
</style>
