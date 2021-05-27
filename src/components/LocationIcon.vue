<template>
  <svg width="15" height="20" viewBox="0 0 15 20">
    <path
      :fill="fillColor"
      fillRule="evenodd"
      d="M1.504 12.006a7.5 7.5 0
    1 1 11.99 0L8.75 19.128a1.5 1.5 0 0 1-2.496 0l-4.748-7.122zM7.5 11a3.5 3.5 0
    1 0 0-7 3.5 3.5 0 0 0 0 7z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    fillColor: {
      type: String,
      default: "#FF4935",
    },
  },
};
</script>
