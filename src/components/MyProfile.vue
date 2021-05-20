<template>
  <div>
    <h1>Velkommen til din profil hos Dansk Erhverv</h1>
    <br />

    <div class="box">
      <div class="input-pane">
        <sidebar-item-alt
          id="profile"
          title="Mine oplsyninger"
          @click="setActive('profile')"
          :is-active="isActive('profile')"
          iconName="user-alt-solid"
        ></sidebar-item-alt>
        <sidebar-item-alt
          id="events"
          title="Mine kurser og events"
          @click="setActive('events')"
          :is-active="isActive('events')"
          iconName="calendar-alt-solid"
        ></sidebar-item-alt>
        <sidebar-item-alt
          id="interests"
          title="Mine interesser"
          @click="setActive('interests')"
          :is-active="isActive('interests')"
          iconName="star-solid"
        ></sidebar-item-alt>
      </div>
      <div class="result-pane">
        <div class="tab-content py-3" id="myTabContent">
          <div
            class="tab-pane fade"
            :class="{ 'active show': isActive('profile') }"
            id="profile"
          >
            <h2>Profile content</h2>
          </div>
          <div
            class="tab-pane fade"
            :class="{ 'active show': isActive('events') }"
            id="events"
          >
            <h2>Event content</h2>
          </div>
          <div
            class="tab-pane fade"
            :class="{ 'active show': isActive('interests') }"
            id="interests"
          >
            <h2>Interest content</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SidebarItem from "./SidebarItem.vue";
import SidebarItemAlt from "./SidebarItemAlt.vue";
export default {
  components: {
    // SidebarItem,
    SidebarItemAlt,
  },
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
.box {
  display: flex;
  flex-direction: row;
}

.input-pane {
  display: flex;
  flex-direction: column;
  background: #e6ebef;
  border: 2px solid #d3d9e0;
  padding: 1.5rem;
  flex-basis: calc(100% / 3);
}

.result-pane {
  flex-basis: calc(100% / 1);
}

.input-pane > *:not(:last-child) {
  margin-bottom: 1.5rem;
}

.tab {
  display: flex;
  flex-flow: row wrap;
}

.tab-pane {
  display: none;
  text-align: center;
}

.active {
  display: block;
}
</style>
