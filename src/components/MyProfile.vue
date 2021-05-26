<template>
  <div>
    <h1>Velkommen til din profil hos Dansk Erhverv</h1>
    <br />
    <dropdown
      class="menu-select"
      :onSelect="handleOnSelect"
      :options="[
        {
          label: 'Mine oplysninger',
          href: '#profile',
        },
        {
          label: 'Mine kurser og events',
          href: '#events',
        },
        {
          label: 'Mine interesser',
          href: '#interests',
        },
        {
          label: 'Mine nyhedsbreve',
          href: '#newsletters',
        },
      ]"
    />

    <div class="box">
      <div class="sidebar">
        <div class="sidebar-content">
          <nav class="input-pane pane">
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
            <sidebar-item-alt
              id="newsletters"
              title="Mine nyhedsbreve"
              @click="setActive('newsletters')"
              :is-active="isActive('newsletters')"
              iconName="star-solid"
            ></sidebar-item-alt>
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
                <div class="receiptText">
                  <checkmark-icon class="check" />
                  <span>Dine ændringer er gemt</span>
                </div>

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
            <div class="pane settings-pane">
              <section-title title="Interesser" />
            </div>
          </div>

          <div
            class="tab-pane-wrapper"
            :class="{ 'active show': isActive('newsletters') }"
            id="newsletters"
          >
            <div class="pane settings-pane">
              <section-title title="Tilmeldinger til nyhedsbreve" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckmarkIcon from "./CheckmarkIcon.vue";
import Dropdown from "./Select/Dropdown";
export default {
  components: { CheckmarkIcon, Dropdown },
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

.input-pane {
  display: none;
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
}

.tab-pane-wrapper > *:not(:last-child) {
  margin-bottom: 1.5rem;
}

.active {
  display: block;
}

.menu-select {
  margin-bottom: 1.5rem;
}

@media screen and (min-width: 1025px) {
  .menu-select {
    display: none;
  }

  .input-pane {
    display: flex;
  }

  .box {
    flex-direction: row;
  }

  .tab-pane-wrapper {
    margin-left: 7rem;
  }

  .tab-pane-wrapper > *:not(:last-child) {
    margin-bottom: 5rem;
  }

  .settings-pane {
    padding: 3rem 4rem;
  }
}
</style>
