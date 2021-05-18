<template>
  <div class="profile-page">
    <h1>Min Profil</h1>
    <div class="tab">
      <sidebar />
      <div>
        <pane />
        <pane />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Pane from "./Pane.vue";
export default {
  components: {
    Sidebar,
    Pane,
  },
};
</script>

<style>
.tab {
  display: flex;
  flex-flow: row wrap;
}
</style>
