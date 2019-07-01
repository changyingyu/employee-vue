<template>
  <div id="app">
    <Header />
     <img src="./assets/banner.jpg" class="image-banner">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Footer
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
  background-color:#fcf5fc;
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

.image-banner{
    position: absolute;
    left: 0px;
    right: 0px;
    width: 100%;
    z-index: -1;
}
</style>
