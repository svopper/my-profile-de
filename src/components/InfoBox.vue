<template>
  <div class="box">
    <ul class="list">
      <li class="listItem">
        <dt class="label">For- og efternavn</dt>
        <dd class="value">
          <span class="valueText">Jan Hjort Mosegaard </span>
        </dd>
      </li>
      <li class="listItem">
        <dt class="label">Email</dt>
        <dd class="value">
          <span class="valueText">Jan@danskerhverv.dk</span>
        </dd>
      </li>
      <li class="listItem">
        <dt class="label">Adgangskode</dt>
        <dd class="value">
          <span class="valueText">Skjult</span>
        </dd>
      </li>
      <li class="listItem">
        <dt class="label">Telefonnummer</dt>
        <dd class="value">
          <span class="valueText">20 20 20 20</span>
        </dd>
      </li>
      <li class="listItem">
        <dt class="label">Titel</dt>
        <dd class="value">
          <span class="valueText">Forretningsudvikler</span>
        </dd>
      </li>
      <li class="listItem">
        <dt class="label">Fagområde</dt>
        <dd class="value">
          <span class="valueText">IT og Digitalisering</span>
        </dd>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/_mixins";
@import "../assets/css/_variables";
.box {
  @include tablet {
    flex: 1;
  }

  .list {
    position: relative;
    list-style: none;
    padding: 0;

    .listItem {
      margin: 1.5rem 0;

      .label {
        margin: 0;
        color: #a0a9ac;
        font-size: 14px;
      }

      .value {
        margin: 0;
        display: flex;
        align-items: baseline;

        .valueText {
          margin: 0;
          white-space: pre-line;
          word-break: break-word;
        }
      }
    }
  }
}
</style>
