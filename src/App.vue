<template>
  <div id="app">
    <my-profile />
    <sidebar-item />
  </div>
</template>

<script>
import MyProfile from "./components/MyProfile.vue";
import SidebarItem from "./components/SidebarItem.vue";

export default {
  name: "App",
  components: {
    MyProfile,
    SidebarItem,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
