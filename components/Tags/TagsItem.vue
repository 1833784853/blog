<template>
  <div class="tags-content">
    <ul>
      <li v-for="item in data" :key="item.tagName">
        <Tag :data="item" />
      </li>
    </ul>
  </div>
</template>

<script>
  import Tag from './Tag.vue'
  export default {
    name: "TagsItem",
    props: {
      data: Array,
    },
    data() {
      return {}
    },
    components: {
      Tag
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
    margin: 0.75em 0.5em;
  }


</style>
