<template>
  <div style="height: 100%; overflow: hidden; position: relative">
    <IndexMenu
      :style="{ backgroundColor: $store.state.menuColor}"
    />
    <a-layout id="components-layout-demo-fixed">
      <a-layout-content style="background-color: #fff">
        <IndexBanner :data="[imgUrl, imgUrl2]" />
        <IndexContent />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center',background:'rgb(32,30,32)' }">
        <IndexFooter />
      </a-layout-footer>
    </a-layout>
    <MyScroll :boxDom="'.ant-layout'" :scrollColor="'#2ea59c'" :width="10" :box-height="boxHeight" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IndexMenu from "~/components/IndexMenu/index.vue";
import IndexBanner from "~/components/IndexBanner/index.vue";
import MyScroll from "~/components/MyScroll/index.vue";
import IndexContent from "~/components/IndexContent/index.vue";
import IndexFooter from "~/components/IndexFooter/index.vue";
export default Vue.extend({
  mounted() {
    let dom:HTMLElement | null = document.querySelector('.ant-layout')
    if(dom != null) {
      this.boxHeight = dom.clientHeight
    }
  },
  data() {
    return {
      imgUrl: require("~/static/img/2.jpg"),
      imgUrl2: require("~/static/img/3.jpg"),
      boxHeight:0
    };
  },
  methods: {
    add(): void {
      this.$store.commit("increment", "1");
      console.log(this.$store.state.counter);
    },
  },
  components: {
    IndexMenu,
    IndexBanner,
    MyScroll,
    IndexContent,
    IndexFooter
  },
});
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#__nuxt,
#__layout {
  height: 100% !important;
}
.ant-layout-footer {
  padding: 0 !important;
}
ul {
  list-style-type: none;
}
.ant-layout {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
