<template>
  <div>
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
          label: 'Mine nyhedsbreve',
          href: '#newsletters',
        },
        {
          label: 'Mine interesser',
          href: '#interests',
        },
      ]"
    />
    <div>
      <div>
        <nav class="input-pane pane">
          <sidebar-item-alt
            id="profile"
            title="Mine oplsyninger"
            @click="$emit('menuChange', 'profile')"
            :is-active="isActive('profile')"
            iconName="user-alt-solid"
          ></sidebar-item-alt>
          <sidebar-item-alt
            id="events"
            title="Mine kurser og events"
            @click="$emit('menuChange', 'events')"
            :is-active="isActive('events')"
            iconName="calendar-alt-solid"
          ></sidebar-item-alt>
          <sidebar-item-alt
            id="newsletters"
            title="Mine nyhedsbreve"
            @click="$emit('menuChange', 'newsletters')"
            :is-active="isActive('newsletters')"
            iconName="star-solid"
          ></sidebar-item-alt>
          <sidebar-item-alt
            id="interests"
            title="Mine interesser"
            @click="$emit('menuChange', 'interests')"
            :is-active="isActive('interests')"
            iconName="star-solid"
          ></sidebar-item-alt>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Select/Dropdown";
export default {
  components: {
    Dropdown,
  },
  props: {
    currentActive: {
      type: String,
    },
  },
  methods: {
    handleOnSelect: function(event) {
      this.setActive(event.href.substring(1));
    },
    isActive: function(menuItem) {
      this.$emit("click", menuItem);
      return this.currentActive === menuItem;
    },
  },
};
</script>

<style scoped>
.menu-select {
  margin-bottom: 1.5rem;
}

.input-pane {
  display: none;
  flex-direction: column;
  padding: 1.5rem;
  min-height: auto;
}

.input-pane > *:not(:last-child) {
  margin-bottom: 1.5rem;
}

.pane {
  background: #e6ebef;
  border: 2px solid #d3d9e0;
}

@media screen and (min-width: 1025px) {
  .menu-select {
    display: none;
  }

  .input-pane {
    display: flex;
  }
}
</style>
