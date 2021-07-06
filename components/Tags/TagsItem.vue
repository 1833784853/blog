<template>
  <div class="tags-content">
    <ul>
      <li v-for="item in data" :key="item.tagName">
        <nuxt-link :to="{name:'tags-tag',params:{tag:item.id}}">
          <div class="tags-item">
            <span class="text">{{item.tagName}}</span>
            <span class="count">{{item.count}}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TagsItem",
    props: {
      data: Array,
    },
    data() {
      return {}
    }

  }
</script>

<style scoped>
  .tags-content {
    padding: 10px;
  }

  .tags-content ul {
    overflow: hidden;
  }

  .tags-content li {
    float: left;
  }

  .tags-content li .tags-item {
    border-radius: 5px;
    padding: 5px 10px;
    border: 2px solid #2ea59c;
    cursor: pointer;
    transition: all .3s;
  }

  .tags-content li .tags-item:hover {
    background-color: #2ea59c;
  }

  .tags-content li .tags-item:hover .text, .tags-content .tags-item:hover .count {
    color: #fff;
  }

  .tags-content .tags-item .text {
    color: #2ea59c;
    font-weight: bold;
    font-size: 14px;
    transition: all .3s;
  }

  .tags-content .tags-item .count {
    margin-left: 15px;
    color: #2ea59c;
    font-size: 14px;
    font-weight: bold;
    transition: all .3s;
  }
</style>
