<template>
  <div class="item-box">
    <div class="item-left">
      <nuxt-link :to="{name:'sort-tag',params:{tag:data.tagName}}"><span>{{data.tagName}}</span></nuxt-link>
    </div>
    <div class="item-right">
      <span>{{data.countNum}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array
    },
    name: "SortTagItem",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .item-box {
    border-bottom: 2px solid #e4e4e4;
    padding: 10px;
    overflow: hidden;
    transition: all .5s;
  }

  .item-box:hover {
    background-color: #eee;
    cursor: pointer;
  }
  .item-box:hover .item-left span {
    color: #2ea59c;
    text-decoration: underline;
  }
  .item-box .item-left {
    float: left;
  }

  .item-box .item-left span {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    transition: all .3s;
  }

  .item-box .item-right {
    float: right;
  }

  .item-box .item-right span {
    padding: 1px 10px;
    border: 2px solid #2ea59c;
    font-size: 12px;
    border-radius: 5px;
    color: #2ea59c;
    font-weight: bold;

  }
</style>
