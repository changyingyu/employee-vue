<template>
  <header class="header">
    <a href="#default" class="logo">Ezra</a>
    <div class="header-right">
      <router-link to="/" v-on:click.native="isActive('home')" v-bind:class="{'active':active}">Home</router-link>
      <router-link
        to="/add"
        v-on:click.native="isActive('add')"
        v-bind:class="{'active':!active}"
      >Add Employee</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      active: true
    };
  },
  methods: {
    isActive(page) {
      console.log(page);
      if (page == "add") {
        this.active = false;
      } else {
        this.active = true;
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #fff;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: black;
  color: white;
}

.header a.active {
  background-color: purple;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
</style>
