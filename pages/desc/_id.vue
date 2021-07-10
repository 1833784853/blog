<template>
  <div
    class="desc-container"
    style="height: 100%; overflow: hidden; position: relative"
  >
    <IndexMenu :style="{ backgroundColor: 'rgba(24,26,28,1)' }" />
    <a-layout id="components-layout-demo-fixed">
      <a-layout-content style="background-color: #fff">
        <DescContent />
      </a-layout-content>
      <a-layout-footer
        :style="{ textAlign: 'center', background: 'rgb(32,30,32)' }"
      >
        <IndexFooter />
      </a-layout-footer>
    </a-layout>
    <MyScroll
      :boxDom="'.ant-layout'"
      :scrollColor="'#2ea59c'"
      :width="10"
      :box-height="boxHeight"
    />
  </div>
</template>

<script lang="ts">
import vue from "vue";
import IndexMenu from "~/components/IndexMenu/index.vue";
import MyScroll from "~/components/MyScroll/index.vue";
import IndexFooter from "~/components/IndexFooter/index.vue";
import DescContent from "~/components/DescContent/index.vue";
export default vue.extend({
  name: "desc_id",
  mounted() {
    let dom:HTMLElement | null = document.querySelector('.ant-layout')
    if(dom != null) {
      this.boxHeight = dom.clientHeight
    }
  },
  data() {
    return {
      boxHeight:0
    }
  },
  components: {
    IndexMenu,
    MyScroll,
    IndexFooter,
    DescContent,
  },
});
</script>

<style scoped>
</style>
