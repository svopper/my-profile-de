<template>
  <div>
    <h1>Velkommen til din profil hos Dansk Erhverv</h1>
    <label for="compact">Kompakt menu?</label>
    <input v-model="compact" type="checkbox" name="compact" id="compact" />
    <label for="compact">(debug)</label>
    <br />

    <div class="box">
      <div class="sidebar">
        <div class="sidebar-content">
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
        </div>
      </div>
      <div class="result-pane">
        <div class="tab-content py-3" id="myTabContent">
          <div
            class="tab-pane-wrapper"
            :class="{ 'active show': isActive('profile') }"
            id="profile"
          >
            <div class="pane settings-pane">
              <section-title title="Personlige oplysninger" />
              <dl>
                <dt>Fornavn</dt>
                <dd>Kasper</dd>

                <dt>Efternavn</dt>
                <dd>Olsen</dd>

                <dt>E-mail</dt>
                <dd>kols@danskerhverv.dk</dd>
              </dl>
            </div>

            <div class="pane settings-pane">
              <section-title title="Virksomhedsoplysninger" />
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
            <div class="pane settings-pane">
              <section-title title="Kommende events" />
            </div>
            <div class="pane settings-pane">
              <section-title title="Tidligere events" />
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
export default {
  data() {
    return {
      activeItem: "profile",
      compact: true,
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
}

.settings-pane {
  padding: 3rem 4rem;
}

.sidebar {
  flex-basis: calc(100% / 3);
}

.input-pane {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  min-height: auto;
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
