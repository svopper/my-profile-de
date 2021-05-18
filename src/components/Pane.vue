<template>
  <div class="pane">
    <header class="section__header" data-in-view="true">
      <h4 class="section__header__title">Kommende kurser of events</h4>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
.pane {
  /* width: calc(100% - 432px); */
  margin-left: 12px;
  background: #e6ebef;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  min-height: auto;
  margin-bottom: 24px;
  padding: 37px 32px 32px;
}

.section__header {
  position: relative;
  margin: 0 auto 2rem;
  max-width: 1200px;
}

.section__header__title {
  position: relative;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 0 4rem;
  color: currentColor;
  -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: transform 0.5s, opacity 0.5s;
  transition: transform 0.5s, opacity 0.5s, -webkit-transform 0.5s;
}

.section__header__title:before {
  content: "";
  position: absolute;
  background: currentColor;
  height: 2px;
  width: 80px;
  left: -100px;
  top: 8px;
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  -webkit-transform-origin: left center;
  transform-origin: left center;
}
</style>
