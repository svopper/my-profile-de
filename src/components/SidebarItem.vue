<template>
  <div class="sidebar-item">
    <a class="sidebar-item-link" href="#profile" title="Profil">
      <article class="sidebar-item-content">
        <div class="sidebar-item-image">
          <img
            class="sidebar-img"
            src="../assets/icon-arbejdsmarked.svg"
            width="60"
            alt="icon"
          />
        </div>
        <span class="sidebar-item-text">Profil</span>
        <div class="_1BpLWC _3nyFHS">
          <svg width="30" height="10" viewBox="0 0 30 10" class="arrow-svg">
            <path stroke="none" d="M30 5l-8 5 1.898-5L22 0l8 5"></path>
            <path fill="none" d="M0 5h25"></path>
          </svg>
        </div>
      </article>
    </a>
    <a href="#yeet">teey</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar-item {
  margin: initial;
  width: auto;
  height: auto;
  max-width: none;
  min-width: 0;
}
.sidebar-item-link {
  text-decoration: none;
}
.sidebar-item-content {
  background: #f2f5f7;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1.25rem 1.5rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-shadow: 0 3px 10px 0 hsl(0deg 0% 73% / 50%),
    0 3px 3px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 3px 10px 0 hsl(0deg 0% 73% / 50%), 0 3px 3px 0 rgb(0 0 0 / 10%);
  overflow: hidden;
  max-height: 100px;
  position: relative;
}

.sidebar-item-content:hover {
  background: #1cd6ac;
  color: #fff;
}

.sidebar-item-image {
  width: 60px;
  height: 60px;
  margin-right: 1.5rem;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 60px;
  flex: 0 0 60px;
}

.sidebar-item-image > img {
  max-width: 100%;
  height: auto;
}

.sidebar-item-text {
  font-weight: 500;
  font-size: 1.25rem;
}

._3UtAYJ:hover ._3nyFHS {
  color: #fff;
}

._1BpLWC {
  line-height: 0;
  height: 10px;
  width: 30px;
  overflow: hidden;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
}

._3nyFHS {
  position: absolute;
  right: 1.5rem;
  bottom: 1.25rem;
  color: #2a18cc;
}

.sidebar-item-link:hover svg {
  -webkit-animation: wrap 0.4s ease 0s;
  animation: wrap 0.4s ease 0s;
}

.sidebar-item-link:hover ._3nyFHS {
  color: #fff;
}

.arrow-svg {
  stroke: currentColor;
  fill: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
@keyframes wrap {
  0% {
    transform: translateX(0);
  }
  49.99999% {
    transform: translateX(110%);
  }
  50% {
    transform: translateX(-110%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>