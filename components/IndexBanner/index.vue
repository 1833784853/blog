<template>
  <div class="banner-box">
    <ul>
      <li
        v-for="(item, index) in data"
        :key="index"
        :class="index == itemIndex ? 'active' : ''"
      >
        <img :src="item" />
      </li>
    </ul>
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div
          class="wave waveTop"
          :style="{ backgroundImage: 'url(' + topWave + ')' }"
        ></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div
          class="wave waveMiddle"
          :style="{ backgroundImage: 'url(' + midWave + ')' }"
        ></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div
          class="wave waveBottom"
          :style="{ backgroundImage: 'url(' + botWave + ')' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      itemIndex: 0,
      topWave: require("~/static/img/wave-top.png"),
      midWave: require("~/static/img/wave-mid.png"),
      botWave: require("~/static/img/wave-bot.png"),
    };
  },
  methods: {
    init() {
      setInterval(() => {
        if (this.itemIndex >= this.data.length - 1) {
          this.itemIndex = 0;
        } else {
          this.itemIndex += 1;
        }
      }, 3000);
    },
  },
};
</script>

<style>
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 1400px) {
  .banner-box {
    position: relative;
    height: 800px;
  }
  .banner-box ul {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  .banner-box li {
    position: absolute;
    height: 100%;
  }

  .banner-box img {
    display: block;
    width: 100%;
    height: 100%;
    transform: scale(1);
  }
  .banner-box .active {
    z-index: 3;
  }
  .banner-box .active img {
    animation-name: bannerAnimate;
    animation-duration: 3s;
    animation-timing-function: linear;
  }
  @keyframes bannerAnimate {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
}

@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
.waveWrapper {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
}
.bgTop {
  z-index: 15;
  opacity: 0.5;
}
.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}
.bgBottom {
  z-index: 5;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.waveTop {
  background-size: 50% 100px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.waveMiddle {
  background-size: 50% 120px;
}
.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}
.waveBottom {
  background-size: 50% 100px;
}
.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}
</style>