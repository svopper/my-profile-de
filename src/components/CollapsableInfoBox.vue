<template>
  <div class="col-box">
    <h3 class="title">{{ headline }}</h3>
    <ul class="list">
      <div v-if="visibleItems">
        <li v-for="(item, index) in visibleItems" :key="index" class="listItem">
          <div v-if="item.type !== 'bullet'">
            <dt class="label">{{ item.label }}</dt>
          </div>
          <div v-if="item.value">
            <dd class="value">
              <span class="valueText">{{ item.value }}</span>
            </dd>
          </div>
        </li>
      </div>
      <div v-if="hiddenItems && collapsed" class="fadeout" />
      <div v-if="hiddenItems && !collapsed">
        <li v-for="(item, index) in hiddenItems" :key="index" class="listItem">
          <div v-if="item.type !== 'bullet'">
            <dt class="label">{{ item.label }}</dt>
          </div>
          <div v-if="item.value">
            <dd class="value">
              <span class="valueText">{{ item.value }}</span>
            </dd>
          </div>
        </li>
      </div>
    </ul>
    <footer v-if="shouldShowFooter" class="footer">
      <show-more-button
        :onClick="handleToggleShowMore"
        :showMoreLabel="showMoreLabel"
        :showLessLabel="showLessLabel"
        :collapsed="collapsed"
      />
    </footer>
  </div>
</template>

<script>
import ShowMoreButton from "./ShowMoreButton.vue";
export default {
  components: { ShowMoreButton },
  name: "CollapsableInfoBox",
  props: {
    headline: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
    },
    collapsable: {
      type: Boolean,
    },
    showMoreLabel: {
      type: String,
      default: "Se alle",
    },
    showLessLabel: {
      type: String,
      default: "Se færre",
    },
    maxVisibleItems: {
      type: Number,
      default: 10,
    },
  },
  data: function() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleToggleShowMore: function() {
      this.collapsed = !this.collapsed;
    },
  },
  computed: {
    collapse: function() {
      return this.items.length > this.maxVisibleItems + 1;
    },
    visibleItems: function() {
      return this.collapsable && this.collapse
        ? this.items.slice(0, this.maxVisibleItems)
        : this.items;
    },
    hiddenItems: function() {
      return this.collapsable && this.collapse
        ? this.items.slice(this.maxVisibleItems)
        : null;
    },
    shouldShowFooter: function() {
      return (
        this.collapsable &&
        this.collapse &&
        ((this.collapsed && this.showMoreLabel) ||
          (!this.collapsed && this.showLessLabel))
      );
    },
  },
  beforeMount: function() {
    if (
      this.collapsable &&
      this.items &&
      this.items.length > this.maxVisibleItems + 1
    ) {
      this.collapsed = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_mixins.scss";
.col-box {
  margin: 1rem 0;
  @include tablet {
    flex: 1;
    margin: 0 calc(var(--gutter) / 2) calc(var(--gutter) * 2);
  }

  border: 2px solid var(--light);
  padding: 0 2rem 1rem;
}

:global .theme--light :local .box {
  background-color: var(--white);
}

.list {
  position: relative;
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
}

.listItem {
  margin: 1.5rem 0;
}

.title {
  word-wrap: break-word;
  font-size: 1.5rem;
}

.label {
  margin: 0;
  color: gray;
  font-size: 14px;
}

.value {
  margin: 0;
  display: flex;
  align-items: baseline;
}

.valueText {
  margin: 0;
  white-space: pre-line;
  word-break: break-word;
}

.bullet {
  color: red;
  margin-right: 1rem;
}

.footer {
  margin: 1.5rem 0;
  display: flex;
  justify-content: flex-start;
}

.fadeout {
  position: absolute;
  width: 100%;
  height: 25vh;
  max-height: 300px;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(
    -180deg,
    rgba(255, 255, 255, 0) 50%,
    #ffffff 100%
  );
}
</style>
