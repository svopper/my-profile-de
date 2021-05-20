<template>
  <div class="sidebar-item-wrapper">
    <a
      @click="$emit('click')"
      class="sidebar-item-link"
      :href="`#${id}`"
      :title="title"
    >
      <div class="sidebar-item-image">
        <img
          class="sidebar-img"
          :src="require(`../assets/${iconName}.svg`)"
          width="30"
          alt="icon"
        />
      </div>
      <div>
        <span class="sidebar-item-link-text">{{ title }}</span>
        <span class="underline" :class="{ active: isActive }"></span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "isActive", "iconName"],
};
</script>

<style scoped>
.sidebar-item-wrapper {
  display: flex;
  align-items: center;
}

.sidebar-item-link {
  display: inline-flex;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: #2a18cc;
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

.sidebar-item-link:hover {
  color: #1cd6ac;
}

.sidebar-item-link:hover .underline {
  background: #1cd6ac;
}

.underline {
  position: absolute;
  background: #2a18cc;
  height: 2px;
  left: 1rem;
  right: 1rem;
  bottom: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}

.underline.active {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
