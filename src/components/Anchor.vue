<template>
  <a
    :href="href"
    :target="!!target ? target : undefined"
    :title="title"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
    },
  },
};
</script>

<style></style>
