<template>
  <div class="sort-tag-box">
    <div class="sort-header">
      <div class="sort-left">分类</div>
      <div class="sort-right">
        <nuxt-link :to="{name:'sort-tag',params:{tag:'all'}}">more ></nuxt-link>
      </div>
    </div>
    <div class="sort-body">
      <ul v-show="sortTagData.length>0">
        <li v-for="item in sortTagData" :key="item.tagName" >
            <SortTagItem :data="item" />
        </li>
      </ul>
      <div v-show="sortTagData.length===0" style="text-align: center;font-size: 18px;color: #7F828B">暂无分类</div>
    </div>
  </div>
</template>

<script>
  import SortTagItem from '~/components/SortTag/SortTagItem'

  export default {
    name: 'StortTagIndex',

    data() {
      return {
        sortTagData: []
      }
    },
    methods: {},
    components: {
      SortTagItem
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

  .sort-tag-box .sort-body {
    padding: 20px;
  }
  .sort-body ul {
    border: 2px solid #e4e4e4;
    border-bottom: none;
    border-radius: 5px;
  }
</style>
