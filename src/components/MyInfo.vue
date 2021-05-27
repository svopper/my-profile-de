<template>
  <div>
    <div class="layout__row">
      <div class="layout__column formColumn-style_formCol">
        <label class="inputContainer-style_wrapper"
          ><span
            class="inputContainer-style_label inputContainer-style_showLabel"
            aria-hidden="true"
            >Fornavn</span
          >
          <div class="inputContainer-style_inputWrapper">
            <input
              required=""
              type="text"
              placeholder="Fornavn"
              name="firstName"
              class="textfield-style_input textfield-style_base"
              value="Jan"
            />
          </div>
          <span class="textfield-style_errorMsg_c5bd"></span
        ></label>
      </div>
    </div>
    <div class="layout__row">
      <div class="layout__column formColumn-style_formCol">
        <label class="inputContainer-style_wrapper"
          ><span
            class="inputContainer-style_label inputContainer-style_showLabel"
            aria-hidden="true"
            >Efternavn</span
          >
          <div class="inputContainer-style_inputWrapper">
            <input
              required=""
              type="text"
              placeholder="Efternavn"
              name="lastName"
              class="textfield-style_input textfield-style_base"
              value="Hjort Mosegaard"
            />
          </div>
          <span class="textfield-style_errorMsg_c5bd"></span
        ></label>
      </div>
    </div>
    <div class="layout__row">
      <div class="layout__column formColumn-style_formCol">
        <label class="inputContainer-style_wrapper"
          ><span
            class="inputContainer-style_label inputContainer-style_showLabel"
            aria-hidden="true"
            >Email</span
          >
          <div class="inputContainer-style_inputWrapper">
            <input
              required=""
              disabled=""
              type="email"
              placeholder="Email"
              name="email"
              class="textfield-style_input textfield-style_base disabledInput"
              value="jan@danskerhverv.dk"
            />
          </div>
          <span class="textfield-style_errorMsg_c5bd"></span
        ></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/css/_mixins";
@import "../assets/css/_variables";
.layout__row {
  display: flex;
  flex-flow: column nowrap;

  @include tablet {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .formColumn-style_formCol {
    margin-bottom: 2rem;
    position: relative;
    @include tablet {
      position: relative;
      -webkit-box-flex: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
      width: 100%;
    }
  }
}

.textfield-style_input {
  box-sizing: border-box;
  -webkit-appearance: none;
  height: 56px;
  width: 100%;
  background: #fff;
  border: 2px solid #2a18cc;
  padding: 14px 1.5rem;
}

.disabledInput {
  background-color: $brand-color-light !important;
  border: 2px solid $brand-color-geyser-grey !important;
  color: $brand-color-grey !important;
}
</style>
