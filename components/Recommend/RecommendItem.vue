<template>
  <div class="recommend-list-box">
    <ul>
      <li v-for="item in data" :key="item.id">
        <nuxt-link class="recommend-item" :to="{name:'recommend-id',params:{id:item.id}}">{{item.recommendTitle}}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "RecommendItem",
    props: {
      data: Array
    },
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .recommend-list-box li {
    padding: 15px 25px;
    margin: 0;
    border-bottom: 2px solid #e4e4e4;
  }

  .recommend-list-box li:last-child {
    border-bottom: none;
  }

  .recommend-list-box li .recommend-item {
    color: #333333;
    font-size: 16px;
    font-weight: bold;
    transition: all .5s;
  }

  .recommend-list-box li .recommend-item:hover {
    color: #2ea59c;
  }
</style>
