<template>
  <div>
    <h1>Mine oplysninger</h1>
    <div class="pane settings-pane">
      <section-title title="Dine personlige oplysninger" />
      <my-info />
    </div>

    <div class="pane settings-pane">
      <section-title title="Virksomhedsoplysninger" />
      <collapsable-info-box headline="asd" />
      <dl>
        <dt>Virksomhed</dt>
        <dd>Dansk Erhverv</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import CollapsableInfoBox from "../CollapsableInfoBox.vue";
import MyInfo from "../MyInfo.vue";
import SectionTitle from "../SectionTitle.vue";
export default {
  components: { CollapsableInfoBox, SectionTitle, MyInfo },
  props: {
    personalInfo: {
      type: Object,
    },
  },
};
CollapsableInfoBox;
</script>

<style></style>
