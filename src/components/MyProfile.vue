<template>
  <div>
    <h2>Tabs in Vue.js:</h2>
    <br />

    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a
          class="nav-link"
          @click="setActive('home')"
          :class="{ active: isActive('home') }"
          href="#home"
          >Home</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click="setActive('profile')"
          :class="{ active: isActive('profile') }"
          href="#profile"
          >Profile</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click="setActive('contact')"
          :class="{ active: isActive('contact') }"
          href="#contact"
          >Contact</a
        >
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('home') }"
        id="home"
      >
        Home content
      </div>
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('profile') }"
        id="profile"
      >
        Profile content
      </div>
      <div
        class="tab-pane fade"
        :class="{ 'active show': isActive('contact') }"
        id="contact"
      >
        Contact content
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: "home",
    };
  },
  mounted() {
    if (location.hash) {
      this.setActive(location.hash.substring(1));
    }
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  flex-flow: row wrap;
}

.tab-pane {
  display: none;
}

.active {
  background: red;
  display: block;
}
</style>
