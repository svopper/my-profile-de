<template>
  <header ref="section_header" class="section__header" data-in-view="false">
    <span class="section__header__title">{{ title }}</span>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const header = this.$refs.section_header;
    if (header) {
      const observer = new IntersectionObserver(
        (changes) => {
          changes.forEach(({ isIntersecting, intersectionRatio, target }) => {
            if (isIntersecting && intersectionRatio >= 0) {
              target.setAttribute("data-in-view", true);
              observer.unobserve(target);
            }
          });
        },
        { threshold: 1 }
      );

      observer.observe(header);
    }
  },
};
</script>

<style lang="scss">
.section__header {
  position: relative;
  margin: 0 auto 2rem;
  max-width: var(--content-width);

  @media (--mq-mobile), print {
    margin: 1rem auto;
  }
}

.section__header__title {
  position: relative;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  // margin: 0 0 0 4rem;
  color: currentColor;
  transition: transform 0.5s, opacity 0.5s;

  @media (--mq-mobile), print {
    margin-left: 3rem;
  }
}

.section__header__title:before {
  content: "";
  position: absolute;
  background: currentColor;
  height: 2px;
  width: 80px;
  left: -100px;
  top: 8px;
  transition: transform 0.5s;
  transform-origin: left center;

  @media (--mq-mobile), print {
    width: 2.5rem;
    left: -3rem;
  }
}

.editorial__block--title .section__header {
  margin-left: 0;
  margin-right: 0;

  > .section__header__title {
    margin-left: 0;

    @media (--mq-mobile), print {
      &:before {
        width: 1.5rem;
        left: -2rem;
      }
    }
  }
}

.hero .section__header {
  > .section__header__title {
    margin-left: -2.5rem;

    @media (--mq-mobile), print {
      margin-left: 0;

      &:before {
        width: 1.5rem;
        left: -2rem;
      }
    }
  }
}

/* Handle the inview animation */
[data-in-view="false"].section__header {
  opacity: 0;

  .section__header__title {
    &:before {
      transform: scaleX(0);
      will-change: transform;
    }
    opacity: 0;
    transform: translateX(-40px);
    will-change: transform;
  }
}

[data-in-view="true"].section__header {
  .section__header__title {
    &:before {
      transition-delay: 0.25s;
    }
    transition-delay: 0.25s;
  }
}
</style>
