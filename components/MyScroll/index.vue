<template>
  <div
    class="scrollBox"
    :style="{
      height: scrollBoxHieght + 'px',
      width: width + 'px',
      position: 'absolute',
      right: 0,
      zIndex: 99998,
    }"
    @mouseover="scrollOver"
    @mouseleave="scrollLeave"
  >
    <div
      class="scrollItem"
      v-show="scrollShow"
      :style="{
        borderRadius: width / 2 + 'px',
        backgroundColor: scrollColor,
        width: width + 'px',
        height: scrollHeight + 'px',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    boxHeight: Number,
    width: Number,
    scrollColor: String,
    boxDom: String,
  },
  mounted() {
    this.scrollBoxHieght = document.body.clientHeight;
    if (
      this.boxHeight == "" ||
      this.boxHeight == null ||
      typeof this.boxHeight == "undefined"
    ) {
      this.boxHeight = document.querySelector(this.boxDom).clientHeight;
    }
    if (
      this.width == "" ||
      this.width == null ||
      typeof this.width == "undefined"
    ) {
      this.width = 10;
    }
    if (
      this.scrollColor == "" ||
      this.scrollColor == null ||
      typeof this.scrollColor == "undefined"
    ) {
      this.scrollColor = "#2ea59c";
    }
    this.scrollHeight =
      (this.scrollBoxHieght * this.scrollBoxHieght) / this.boxHeight;
    this.wheel();
  },
  watch: {
    scrollHeight: {
      handler(val) {
        if (val >= this.scrollBoxHieght) {
          this.scrollShow = false;
        } else {
          this.scrollShow = true;
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      scrollBoxHieght: 0,
      scrollHeight: 0,
      scrollShow: false,
      move: 0,
      flag: false,
      speed: 12,
    };
  },
  methods: {
    scrollOver(e) {
      var that = this;
      document.querySelector(this.boxDom).style.transition = "none";
      document
        .querySelector(".scrollItem")
        .addEventListener("mousedown", function (event) {
          that.scrollBoxHieght = document.body.clientHeight;
          that.scrollHeight =
            (that.scrollBoxHieght * that.scrollBoxHieght) / that.boxHeight;
          let dom = event.target;
          dom.style.opacity = 1;
          let y1 = event.clientY;
          let setTop = dom.offsetTop;
          document.onmousemove = function (ev) {
            //获取鼠标移动时的坐标
            let y2 = ev.clientY;
            that.move = y2 - y1 + setTop;
            if (y2 > y1) {
              // 往下移动
              if (that.move >= that.scrollBoxHieght - that.scrollHeight) {
                dom.style.top = that.scrollBoxHieght - that.scrollHeight + "px";
                that.DomBoxMove(that.scrollBoxHieght - that.scrollHeight);
              } else {
                dom.style.top = that.move + "px";
                that.DomBoxMove(that.move);
              }
            } else if (y2 < y1) {
              // 往上移动
              if (that.move <= 0) {
                dom.style.top = 0 + "px";
                that.DomBoxMove(0);
              } else {
                dom.style.top = that.move + "px";
                that.DomBoxMove(that.move);
              }
            }
          };
        });
      document.onmouseup = function (ev) {
        document.querySelector(".scrollItem").style.cursor = "pointer";
        document.querySelector(".scrollItem").style.opacity = 0.3;

        that.$store.commit("setScrollMoveSpace", that.move);
        document.onmousemove = null;
      };
    },
    scrollLeave(e) {
      let that = this;
      that.$store.commit("setScrollMoveSpace", that.move);
      console.log(that.scrollColor);
      document.querySelector(".scrollItem").style.cursor = "pointer";
      document.querySelector(".scrollItem").style.opacity = 0.3;

      document.onmousemove = null;
    },
    DomBoxMove(move) {
      let dom = document.querySelector(".scrollItem");
      let box = document.querySelector(this.boxDom);

      document.querySelector(this.boxDom).style.top =
        (-dom.offsetTop / (this.scrollBoxHieght - dom.offsetHeight)) *
          (box.offsetHeight - this.scrollBoxHieght) +
        "px";
    },
    wheel() {
      let that = this;

      that.scrollBoxHieght = document.body.clientHeight;
      that.scrollHeight =
        (that.scrollBoxHieght * that.scrollBoxHieght) / that.boxHeight;
      document.body.onmousewheel = function (e) {
        if (e.wheelDelta > 0) {
          that.up(e);
        } else if (e.wheelDelta < 0) {
          that.down(e);
        }
      };
    },
    up(e) {
      let dom = document.querySelector(".scrollItem");
      dom.style.opacity = 1;
      let box = document.querySelector(this.boxDom);
      box.style.transition = "top .3s";
      this.move = dom.offsetTop - this.speed;
      if (this.move <= 0) {
        dom.style.top = 0 + "px";
        box.style.top = 0 + "px";
      } else {
        dom.style.top = this.move + "px";
        box.style.top =
          (-dom.offsetTop / (this.scrollBoxHieght - dom.offsetHeight)) *
            (box.offsetHeight - this.scrollBoxHieght) +
          "px";
      }
      this.$store.commit("setScrollMoveSpace", this.move);
    },
    down(e) {
      let dom = document.querySelector(".scrollItem");
      dom.style.opacity = 1;
      let box = document.querySelector(this.boxDom);
      box.style.transition = "top 0.3s";
      this.move = dom.offsetTop + this.speed;

      if (dom.offsetTop >= this.scrollBoxHieght - dom.offsetHeight) {
        dom.style.top = this.scrollBoxHieght - dom.offsetHeight + "px";
        box.style.top =
          (-dom.offsetTop / (this.scrollBoxHieght - dom.offsetHeight)) *
            (box.offsetHeight - this.scrollBoxHieght) +
          "px";
      } else {
        dom.style.top = this.move + "px";
        box.style.top =
          (-dom.offsetTop / (this.scrollBoxHieght - dom.offsetHeight)) *
            (box.offsetHeight - this.scrollBoxHieght) +
          "px";
      }
      this.$store.commit("setScrollMoveSpace", this.move);
    },
  },
};
</script>

<style>
.scrollBox {
}
.scrollBox .scrollItem {
  position: absolute;
  top: 0;
  z-index: 999999;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 0.3;
}
</style>