<template>
  <svg width="18" height="17" viewBox="0 0 18 17">
    <g fill="none" fillRule="evenodd">
      <rect
        width="16"
        height="13"
        x="1"
        y="3"
        :stroke="fillColor"
        strokeWidth="2"
        rx="2"
      />
      <path :fill="fillColor" d="M1 7h16v2H1z" />
      <rect width="1" height="5" x="4.5" y=".5" :stroke="fillColor" rx=".5" />
      <rect width="1" height="5" x="12.5" y=".5" :stroke="fillColor" rx=".5" />
    </g>
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
