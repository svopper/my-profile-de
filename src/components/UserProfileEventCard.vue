<template>
  <div class="cards-style_item">
    <a :href="cta.href" class="card-style_anchor"
      ><article class="card-style_card card-style_base">
        <div class="card-style_themeBar" :style="`background: ${theme};`"></div>
        <header>
          <p class="tagline">{{ tag }}</p>
          <h3 class="card-style_title">
            {{ title }}
          </h3>
        </header>
        <p class="event-card-style_bodySmall">
          {{ body }}
        </p>
        <div class="event-card-style_field">
          <date-icon :fillColor="theme" width="18" />
          <span class="event-card-style_labelNoWrap event-card-style_label">{{
            date
          }}</span>
        </div>
        <div class="event-card-style_field">
          <location-icon :fillColor="theme" width="18" />
          <span class="event-card-style_labelNoWrap event-card-style_label">{{
            location
          }}</span>
        </div>
        <div class="event-card-style_footer_a26f"></div></article
    ></a>
  </div>
</template>

<script>
import DateIcon from "./DateIcon.vue";
import LocationIcon from "./LocationIcon.vue";
export default {
  components: { DateIcon, LocationIcon },
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
      default: "#FF4935",
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    cta: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.cards-style_item {
  margin: initial;
  width: auto;
  height: auto;
  max-width: none;
  min-width: 0;

  .card-style_anchor {
    color: #313841;
    text-align: left;
    text-align: initial;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: 100%;

    .card-style_base {
      -webkit-box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.05),
        0 10px 20px 0 rgba(0, 0, 0, 0.2);
      box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.05),
        0 10px 20px 0 rgba(0, 0, 0, 0.2);
      background: #fff;
      color: #313841;
      overflow: hidden;
    }

    .card-style_card {
      position: relative;
      -webkit-transition: background 0.1s linear;
      transition: background 0.1s linear;
      padding: 1.5rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      text-decoration: none;
      height: 100%;

      &:hover {
        background: #f2f5f7;

        .card-style_themeBar {
          -webkit-transform: scaleY(1.75);
          transform: scaleY(1.75);
        }
      }

      .card-style_themeBar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        pointer-events: none;
        height: 4px;
        -webkit-transform-origin: top;
        transform-origin: top;
        -webkit-transition: -webkit-transform 0.2s ease-out;
        transition: -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
        transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
      }

      .tagline {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 2px;
        line-height: 1.33;
        text-transform: uppercase;
        color: #a0a9ac;
      }

      .card-style_title {
        margin-top: 0;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1rem;
        word-wrap: break-word;
      }

      .event-card-style_bodySmall {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
        margin: 0 0 2rem;
        font-size: 0.825rem;
        line-height: 1.43;
      }

      .event-card-style_field {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-style: normal;
        margin-bottom: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        & > svg {
          margin-top: 1px;
          margin-right: 1rem;
          -webkit-box-flex: 0;
          -ms-flex: 0 0 18px;
          flex: 0 0 18px;
        }

        .event-card-style_labelNoWrap {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .event-card-style_label {
          width: 100%;
          line-height: 1.5;
          white-space: normal;
        }
      }
    }
  }
}
</style>
