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

<style lang="scss">
@import "./assets/css/_variables";
@import "./assets/css/_mixins";
#app {
  font-family: Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

h3 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 2rem 0 1rem;
}

.sidebar-img {
  color: #2a18cc;
}

a:visited {
  color: currentColor;
}
</style>
