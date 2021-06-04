<template>
  <Select
    :placeholder="placeholder"
    :searchable="false"
    :clearable="clearable"
    :options="options"
    v-on:option:selected="$emit('menuChange', $event)"
  />
</template>

<script>
import Select from "./vue-select";
export default {
  components: {
    Select,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Vælg",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Object,
    },
  },
};
</script>

<style>
.v-select {
  position: relative;
  font-family: inherit;
}

.v-select,
.v-select * {
  box-sizing: border-box;
}

@-webkit-keyframes vSelectSpinner {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}

@keyframes vSelectSpinner {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}

.vs__fade-enter,
.vs__fade-leave-to {
  opacity: 0;
}

.vs--disabled .vs__clear,
.vs--disabled .vs__dropdown-toggle,
.vs--disabled .vs__open-indicator,
.vs--disabled .vs__search,
.vs--disabled .vs__selected {
  cursor: not-allowed;
  background-color: #f8f8f8;
}

.v-select[dir="rtl"] .vs__actions {
  padding: 0 24px 0 0;
}

.v-select[dir="rtl"] .vs__clear {
  margin-left: 6px;
  margin-right: 0;
}

.v-select[dir="rtl"] .vs__deselect {
  margin-left: 0;
  margin-right: 2px;
}

.v-select[dir="rtl"] .vs__dropdown-menu {
  text-align: right;
}

.vs__dropdown-toggle {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  background: none;
  border: 2px solid #2a18cc;
  border-radius: 0;
  white-space: normal;
  height: 56px;
}

.vs__selected-options {
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 2px;
  position: relative;
}

.vs__actions {
  display: flex;
  align-items: center;
  padding-right: 24px;
}

.vs--searchable .vs__dropdown-toggle {
  cursor: text;
}

.vs--unsearchable .vs__dropdown-toggle {
  cursor: pointer;
}

.vs--open .vs__dropdown-toggle {
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.vs__open-indicator {
  fill: #2a18cc;
  transform: scale(1);
  transition: transform 0.15s cubic-bezier(1, -0.115, 0.975, 0.855);
  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
}

.vs--open .vs__open-indicator {
  transform: rotate(180deg) scale(1);
}

.vs--loading .vs__open-indicator {
  opacity: 0;
}

.vs__clear {
  fill: #2a18cc;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 8px;
}

.vs__dropdown-menu {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  z-index: 1000;
  padding: 5px 0;
  margin: 0;
  width: 100%;
  max-height: 282px;
  min-width: 160px;
  overflow-y: auto;
  border: 2px solid #2a18cc;
  border-top-style: none;
  border-radius: 0;
  text-align: left;
  list-style: none;
  background: #fff;
}

.vs__no-options {
  text-align: center;
}

.vs__dropdown-option {
  padding-left: 24px;
  border-top: 2px solid #e6ebef;
  height: 56px;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #313841;
}

.vs__dropdown-option:hover {
  cursor: pointer;
}

.vs__dropdown-option--highlight {
  background: #e6ebef;
}

.vs__dropdown-option--disabled {
  background: inherit;
  color: rgba(60, 60, 60, 0.5);
}

.vs__dropdown-option--disabled:hover {
  cursor: inherit;
}

.vs__dropdown-option--selected {
  color: #2a18cc;
}

.vs__selected,
.vs__search::placeholder {
  display: flex;
  align-items: center;
  padding-left: 24px;
  color: #2a18cc;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.vs__deselect {
  display: inline-flex;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-left: 4px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: none;
  fill: rgba(60, 60, 60, 0.5);
  text-shadow: 0 1px 0 #fff;
}

.vs--single .vs__selected {
  background-color: transparent;
  border-color: transparent;
}

.vs--single.vs--searching .vs__selected {
  display: none;
}

.vs__search::-webkit-search-cancel-button {
  display: none;
}

.vs__search::-ms-clear,
.vs__search::-webkit-search-decoration,
.vs__search::-webkit-search-results-button,
.vs__search::-webkit-search-results-decoration {
  display: none;
}

.vs__search,
.vs__search:focus {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 1rem;
  border: 1px solid transparent;
  border-left: none;
  outline: none;
  background: none;
  box-shadow: none;
  width: 0;
  max-width: 100%;
  flex-grow: 1;
  z-index: 1;
}

.vs--unsearchable .vs__search {
  opacity: 1;
}

.vs--unsearchable:not(.vs--disabled) .vs__search:hover {
  cursor: pointer;
}

.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {
  opacity: 0.2;
}

.vs__spinner {
  align-self: center;
  opacity: 0;
  font-size: 5px;
  text-indent: -9999em;
  overflow: hidden;
  border: 0.9em solid hsla(0, 0%, 39.2%, 0.1);
  border-left-color: rgba(60, 60, 60, 0.45);
  transform: translateZ(0);
  -webkit-animation: vSelectSpinner 1.1s linear infinite;
  animation: vSelectSpinner 1.1s linear infinite;
  transition: opacity 0.1s;
}

.vs__spinner,
.vs__spinner:after {
  border-radius: 50%;
  width: 5em;
  height: 5em;
}

.vs--loading .vs__spinner {
  opacity: 1;
}
</style>
