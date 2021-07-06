<template>
  <div class="sort-tag-box">
    <div class="sort-header">
      <div class="sort-left">最新推荐</div>
      <div class="sort-right">
        <nuxt-link :to="{name:'recommend-tag',params:{tag:'all'}}">more ></nuxt-link>
      </div>
    </div>
    <div class="sort-body">
      <RecommendItem :data="recommendData" v-show="recommendData.length>0"/>
      <div v-show="recommendData.length===0" style="text-align: center;font-size: 18px;color: #7F828B">暂无推荐</div>
    </div>
  </div>
</template>

<script>
  import RecommendItem from './RecommendItem.vue'

  export default {
    name: "RecommendIndex",
    data() {
      return {
        recommendData: [
          {
            id: 1,
            recommendTitle: "用户故事"
          }, {
            id: 2,
            recommendTitle: "你真正理解什么是“财富自由”吗？"
          }, {
            id: 3,
            recommendTitle: "神经网络入门"
          },
        ]
      }
    },
    components: {
      RecommendItem
    }
  }
</script>

<style scoped>
  .sort-tag-box {
    border-radius: 5px;
    border: 2px solid #e4e4e4;
  }

  .sort-tag-box .sort-header {
    padding: 10px 15px;
    overflow: hidden;
    background-color: #F2F2F4;
    border-bottom: 2px solid #e4e4e4;
  }

  .sort-tag-box .sort-header .sort-left {
    float: left;
    font-size: 16px;
    font-weight: bold;
  }

  .sort-tag-box .sort-header .sort-right {
    float: right;
  }
  .sort-body ul {
    border: 2px solid #e4e4e4;
    border-bottom: none;
    border-radius: 5px;
  }
</style>
