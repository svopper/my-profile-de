<template>
  <div id="app">
    <my-profile />
  </div>
</template>

<script>
import MyProfile from "./components/MyProfile.vue";

export default {
  name: "App",
  components: {
    MyProfile,
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.sidebar-img {
  color: #2a18cc;
}

a:visited {
  color: currentColor;
}
</style>
