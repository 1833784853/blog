<template>
    <div class="sort-container" style="height: 100%; overflow: hidden; position: relative">
    <IndexMenu
      :style="{ backgroundColor: 'rgba(24,26,28,1)'}"
    />
    <a-layout id="components-layout-demo-fixed">
      <a-layout-content style="background-color: #fff">
        <SortContent />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center',background:'rgb(32,30,32)' }">
        <IndexFooter />
      </a-layout-footer>
    </a-layout>
    <MyScroll :boxDom="'.ant-layout'" :scrollColor="'#2ea59c'" :width="10" :box-height="boxHeight" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import IndexMenu from '~/components/IndexMenu/index.vue';
import MyScroll from '~/components/MyScroll/index.vue';
import IndexFooter from '~/components/IndexFooter/index.vue';
    export default Vue.extend({
        name: "_tag",
        data():Object {
            return {
                
            }
        },
        methods: {

        },
        components: {
            IndexMenu,
            IndexFooter,
            MyScroll,
        }
    })
</script>

<style scoped>

</style>
