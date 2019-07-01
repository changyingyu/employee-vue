<template>
  <div>
    <div class="add-employee-wrap">
      <h1>Add Employee</h1>
      <form @submit="addEmployee">
        <div class="input-wrap">
          <input type="text" v-model="name" name="name" placeholder="name" required />
          <div class="error-hide">please enter valid name</div>
        </div>
        <div class="input-wrap">
          <input
            type="text"
            v-model="email"
            v-on:change="isEmailValid"
            name="email"
            placeholder="email"
            required
          />
          <div class="error-span">
            <div v-bind:class="{'error-hide':!emailError}">please enter valid email</div>
          </div>
        </div>
        <div class="input-wrap">
          <input
            type="text"
            v-model="phone"
            v-on:change="isPhoneValid"
            name="phone"
            placeholder="phone"
            required
          />
          <div class="error-span">
            <div v-bind:class="{'error-hide':!phoneError}">please enter valid phone</div>
          </div>
        </div>
        <div>
          <input type="submit" value="Submit" class="btn" :disabled="success == false" />
          <div class="success-span">
            <div v-bind:class="{'success':submit}">success!!</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import uuid from "uuid";

export default {
  name: "AddEmployee",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      emailRe: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      phoneRe: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      emailError: false,
      phoneError: false,
      success: false,
      submit: false
    };
  },
  methods: {
    addEmployee(e) {
      e.preventDefault();

      axios
        .post(
          `https://localhost:5001/api/employees?id=${uuid.v4()}name=${
            this.name
          }&email=${this.email}&phone=${this.phone}`
        )
        .then(resp => (this.submit = true))
        .catch(err => console.log(err));
    },
    isEmailValid() {
      if (this.emailRe.test(this.email)) {
        this.emailError = false;
        this.success = true;
      } else {
        this.emailError = true;
        this.success = false;
      }
    },
    isPhoneValid() {
      if (this.phoneRe.test(this.phone)) {
        this.phoneError = false;
        this.success = true;
      } else {
        this.phoneError = true;
        this.success = false;
      }
    },
    isDisabled() {
      this.success = !this.phoneError && !this.emailError;
      return false;
    }
  }
};
</script>

<style scoped>
.error-span {
  padding-left: 15px;
  color: red;
}
.error-hide {
  position: absolute;
  visibility: hidden;
}

.success-span {
  font-size: 20px;
  position: relative;
  text-align: right;
  top: -30px;
  color: green;
  visibility: hidden;
}
.success {
  visibility: visible;
}
form {
  position: relative;
  display: inline-block;
  max-width: 700px;
  min-width: 500px;
  box-sizing: border-box;
  padding: 30px 25px;
  background-color: white;

  border: 1px solid purple;
  border-radius: 40px;
  left: 50%;
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}
h1 {
  color: white;
  font-weight: 100;
  letter-spacing: 0.01em;
  margin-left: 15px;
  margin-bottom: 35px;
  text-transform: uppercase;
}

.input-wrap {
  position: relative;
  padding: 10px 0;
}

.input-wrap input[type="text"] {
  appearance: none;
  background-color: none;
  border: 1px solid purple;
  line-height: 0;
  font-size: 17px;
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 10px 15px;
  border-radius: 60px;
  color: black;
  font-weight: 100;
  letter-spacing: 0.01em;
  position: relative;
  z-index: 1;
}

.add-employee-wrap {
  position: relative;
}

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
</style>
