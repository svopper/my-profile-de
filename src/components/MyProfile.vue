<template>
  <div>
    <h1>Velkommen til din profil hos Dansk Erhverv</h1>
    <label for="compact">Kompakt menu?</label>
    <input v-model="compact" type="checkbox" name="compact" id="compact" />
    <label for="compact">(debug)</label>
    <br />

    <div class="box">
      <nav class="input-pane pane" v-if="compact">
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
      </nav>
      <nav class="input-pane pane" v-else>
        <sidebar-item
          id="profile"
          title="Mine oplsyninger"
          @click="setActive('profile')"
          :is-active="isActive('profile')"
          iconName="user-alt-solid"
        ></sidebar-item>
        <sidebar-item
          id="events"
          title="Mine kurser og events"
          @click="setActive('events')"
          :is-active="isActive('events')"
          iconName="calendar-alt-solid"
        ></sidebar-item>
        <sidebar-item
          id="interests"
          title="Mine interesser"
          @click="setActive('interests')"
          :is-active="isActive('interests')"
          iconName="star-solid"
        ></sidebar-item>
      </nav>
      <div class="result-pane">
        <div class="tab-content py-3" id="myTabContent">
          <div
            class="tab-pane-wrapper"
            :class="{ 'active show': isActive('profile') }"
            id="profile"
          >
            <div class="pane">
              <h2>Personlige oplysninger</h2>
              <dl>
                <dt>Fornavn</dt>
                <dd>Kasper</dd>

                <dt>Efternavn</dt>
                <dd>Olsen</dd>

                <dt>E-mail</dt>
                <dd>kols@danskerhverv.dk</dd>
              </dl>
            </div>

            <div class="pane">
              <h2>Virksomhedsoplysninger</h2>
              <dl>
                <dt>Virksomhed</dt>
                <dd>Dansk Erhverv</dd>
              </dl>
            </div>
          </div>
          <div
            class="tab-pane-wrapper"
            :class="{ 'active show': isActive('events') }"
            id="events"
          >
            <div class="pane">
              <h2>Kommende events</h2>
            </div>
            <div class="pane">
              <h2>Tidligere events</h2>
            </div>
          </div>
          <div
            class="tab-pane-wrapper"
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
import SidebarItem from "./SidebarItem.vue";
import SidebarItemAlt from "./SidebarItemAlt.vue";
export default {
  components: {
    SidebarItem,
    SidebarItemAlt,
  },
  data() {
    return {
      activeItem: "profile",
      compact: false,
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

.pane {
  background: #e6ebef;
  border: 2px solid #d3d9e0;
  padding: 1.5rem;
}

.input-pane {
  display: flex;
  flex-direction: column;
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

.tab-pane-wrapper {
  display: none;
  margin-left: 7rem;
}

.tab-pane-wrapper > *:not(:last-child) {
  margin-bottom: 5rem;
}

.active {
  display: block;
}
</style>
