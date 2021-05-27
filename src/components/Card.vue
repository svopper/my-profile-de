<template> </template>

<script>
export default {
  props: {
    tag: {
      type: [String, Array],
    },
    title: {
      type: String,
    },
    unbalancedTitle: {
      type: Boolean,
    },
    theme: {
      type: String,
    },
    image: {
      type: Object,
    },
    cta: {
      type: Object,
    },
    className: {
      type: String,
    },
    onClick: {
      type: Function,
    },
    cardType: {
      type: String,
      validator: function(value) {
        // The value must match one of these strings
        return ["event", "fact", "profile", "tweet"].indexOf(value) !== -1;
      },
    },
    noShadow: {
      type: Boolean,
    },
    clearTitleMargin: {
      type: Boolean,
    },
    showFavoriteButton: {
      type: Boolean,
    },
    favoriteIconHighlighted: {
      type: Boolean,
    },
    pageId: {
      type: [String, Number],
    },
    addFavoriteApi: {
      type: String,
    },
    removeFavoriteApi: {
      type: String,
    },
    isLoggedIn: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
