<template>
  <div>
    <h1>Mine kurser og events</h1>
    <div class="pane settings-pane">
      <section-title title="Kommende events" />
      <div class="event-wrapper">
        <user-profile-event-card
          v-for="event in events"
          :key="event.title"
          :body="event.body"
          :title="event.title"
          :date="event.date"
          :location="event.location"
          :cta="event.cta"
          :tag="event.tag"
          :theme="event.theme"
        />
      </div>
    </div>
    <div class="pane settings-pane">
      <section-title title="Tidligere events" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.event-wrapper {
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 2.5rem;
  }
}
</style>
