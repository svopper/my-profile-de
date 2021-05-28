<template>
  <div>
    <h1>Velkommen til din profil hos Dansk Erhverv</h1>
    <br />

    <div class="box">
      <sidebar @menuChange="setActive" :currentActive="activeItem" />
      <div class="result-pane">
        <div class="tab-content">
          <div
            class="tab-pane-wrapper"
            :class="{ 'active show': isActive('profile') }"
            id="profile"
          >
            <h1>Mine oplysninger</h1>
            <div class="pane settings-pane">
              <section-title title="Dine personlige oplysninger" />
              <my-info />
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
            <h1>Mine kurser og events</h1>
            <div class="pane settings-pane">
              <section-title title="Kommende events" />
              <div class="event-wrapper">
                <user-profile-event-card
                  body="Kom på Dansk Erhvervs kursus og bliv opdateret på ansættelsesretten på en hurtig og effektiv måde."
                  title="Virksomhedsoverdragelse og medarbejdere"
                  date="1. juni 2021 10.00-11.25"
                  location="På månen"
                  :cta="{ href: '/#' }"
                  tag="Kursus"
                />
                <user-profile-event-card
                  body="Dette kursus klæder dig på til mange af de udfordringer, du vil opleve i din rolle som leder."
                  title="Grundlæggende ledelse"
                  date="9. september 2021 08.00-15.00"
                  location="Kolding"
                  :cta="{ href: '/#' }"
                  tag="Kursus"
                  theme="#4DC7FB"
                />
              </div>
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
            <h1>Mine interesser</h1>
            <div class="pane settings-pane">
              <section-title title="Interesser" />
            </div>
          </div>

          <div
            class="tab-pane-wrapper"
            :class="{ 'active show': isActive('newsletters') }"
            id="newsletters"
          >
            <h1>Mine nyhedsbreve</h1>
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
import UserProfileEventCard from "./UserProfileEventCard.vue";
import MyInfo from "./MyInfo";
import Sidebar from "./Sidebar";
export default {
  components: { Sidebar, UserProfileEventCard, MyInfo },
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

.tab-pane-wrapper > *:not(:last-child) {
  margin-bottom: 1.5rem;
}

.active {
  display: block;
}

@media screen and (min-width: 1025px) {
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

.event-wrapper {
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 2.5rem;
  }
}
</style>
