<template>
  <div>
    <div class="box">
      <sidebar @menuChange="setActive" :currentActive="activeItem" />
      <div class="result-pane">
        <div
          class="tab-pane-wrapper"
          :class="{ 'active show': isActive('profile') }"
          id="profile"
        >
          <my-info-wrapper />
        </div>
        <div
          class="tab-pane-wrapper"
          :class="{ 'active show': isActive('events') }"
          id="events"
        >
          <my-events-wrapper :events="events" />
        </div>
        <div
          class="tab-pane-wrapper"
          :class="{ 'active show': isActive('interests') }"
          id="interests"
        >
          <my-interests-wrapper />
        </div>

        <div
          class="tab-pane-wrapper"
          :class="{ 'active show': isActive('newsletters') }"
          id="newsletters"
        >
          <my-newsletters-wrapper />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import MyInfoWrapper from "./Views/MyInfoWrapper.vue";
import MyEventsWrapper from "./Views/MyEventsWrapper.vue";
import MyInterestsWrapper from "./Views/MyInterestsWrapper.vue";
import MyNewslettersWrapper from "./Views/MyNewslettersWrapper.vue";
export default {
  components: {
    Sidebar,
    MyInfoWrapper,
    MyEventsWrapper,
    MyInterestsWrapper,
    MyNewslettersWrapper,
  },
  props: {
    events: {
      type: Array,
    },
  },
  data() {
    return {
      activeItem: "profile",
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
    handleOnSelect(event) {
      this.setActive(event.href.substring(1));
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/_variables.scss";
.box {
  display: flex;
  flex-direction: column;
}

.receiptText {
  display: flex;
  align-items: center;
  margin: 0 0 1rem 0;
}

.check {
  fill: $brand-color-green;
  margin-right: 1rem;
}

.pane {
  background: #e6ebef;
  border: 2px solid #d3d9e0;
}

.settings-pane {
  padding: 1.5rem;
}

.sidebar {
  flex-basis: calc(100% / 3);
}

.result-pane {
  flex-basis: calc(100% / 1);
}

.tab {
  display: flex;
  flex-flow: row wrap;
}

.tab-pane-wrapper {
  display: none;
}

.settings-pane:not(:last-child) {
  margin-bottom: 1.5rem;
}

.active {
  display: block !important; // override default display: none
}

@media screen and (min-width: 1025px) {
  .box {
    flex-direction: row;
  }

  .tab-pane-wrapper {
    margin-left: 7rem;
  }

  .settings-pane:not(:last-child) {
    margin-bottom: 5rem;
  }

  .settings-pane {
    padding: 3rem 4rem;
  }
}
</style>
