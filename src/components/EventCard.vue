<template> </template>

<script>
export default {
  computed: {
    hasPrices: function() {
      return !!this.prices && prices.length > 0;
    },
  },
  props: {
    tag: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
    theme: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    prices: {
      type: Array,
    },
    cta: {
      type: Object,
    },
    status: {
      type: [String, Array],
    },
    ctaAsButton: {
      type: Boolean,
    },
    noShadow: {
      type: Boolean,
    },
    multiLine: {
      type: Boolean,
    },
    canSignup: {
      type: Boolean,
      default: true,
    },
    unableToSignupText: {
      type: String,
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
