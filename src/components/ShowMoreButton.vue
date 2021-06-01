<template>
  <button
    @click="onClick"
    class="button"
    type="button"
    :aria-expanded="!collapsed"
  >
    <span class="inner">
      <show-more-icon :class="iconClass" />
      <span class="label">{{ collapsed ? showMoreLabel : showLessLabel }}</span>
    </span>
  </button>
</template>

<script>
import ShowMoreIcon from "./ShowMoreIcon.vue";
export default {
  components: {
    ShowMoreIcon,
  },
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
    collapsed: {
      type: Boolean,
      default: true,
    },
    showMoreLabel: {
      type: String,
    },
    showLessLabel: {
      type: String,
    },
  },
  computed: {
    iconClass: function() {
      return this.collapsed ? "iconCollapsed" : "icon";
    },
  },
};
</script>

<style scoped>
.button {
  color: #2a18cc;
  cursor: pointer;
  padding: 0;
}

.inner {
  display: flex;
  align-items: center;
}

.iconCollapsed {
  transform-origin: center;
  transition: transform 0.3s;
}

.icon {
  composes: iconCollapsed;
  transform: rotateX(180deg);
}

.label {
  margin-left: 14px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
</style>
