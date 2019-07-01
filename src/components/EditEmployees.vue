<template>
  <div>
    <form @submit="editEmployee">
      <input type="text" v-model="name" name="name" placeholder="name" required />
      <input
        type="text"
        v-model="phone"
        name="phone"
        placeholder="phone"
        v-on:change="isPhoneValid"
        required
      />
      <input type="submit" value="Submit" class="btn" />
      <div class="error-span">
        <div v-bind:class="{'error-hide':!phoneError}">please enter valid phone</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditEmployees",
  props: ["employee"],
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      phoneRe: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      phoneError: false
    };
  },
  methods: {
    editEmployee(e) {
      e.preventDefault();
      const newEmployee = {
        name: this.name,
        phone: this.phone
      };
      this.$emit("edit-employee", newEmployee);
    },
    isPhoneValid() {
      if (this.phoneRe.test(this.phone)) {
        this.phoneError = false;
      } else {
        this.phoneError = true;
      }
    }
  }
};
</script>

<style scoped>
.error-span {
  padding-left: 15px;
  color: red;
}
form {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  background-color: white;
  left: 50%;
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
.error-hide {
  position: absolute;
  visibility: hidden;
}
.btn {
  padding: 10px 14px;
  font-size: 12px;
  border-radius: 0%;
}
</style>
