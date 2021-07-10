<template>
  <nuxt-link :to="{name:'tags-tag',params:{tag:data.id}}">
    <span class="tags-item">
      <span class="text">{{data.tagName}}</span>
      <span class="count" v-if="data.count != undefined">{{data.count}}</span>
    </span>
  </nuxt-link>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "Tag",
    props: {
      data: Object
    },
  })
</script>

<style scoped>
  .tags-item {
    border-radius: 5px;
    padding: 5px 10px;
    border: 2px solid #2ea59c;
    cursor: pointer;
    transition: all .3s;
  }

  .tags-item:hover {
    background-color: #2ea59c;
  }

  .tags-item:hover .text, .tags-item:hover .count {
    color: #fff;
  }

  .tags-item .text {
    color: #2ea59c;
    font-weight: bold;
    font-size: 14px;
    transition: all .3s;
  }

  .tags-item .count {
    margin-left: 15px;
    color: #2ea59c;
    font-size: 14px;
    font-weight: bold;
    transition: all .3s;
  }
</style>
