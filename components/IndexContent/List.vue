<template>
  <div class="item-container">
    <div class="content-header">
      <span>今日推荐</span>
    </div>
    <div class="content-body">
      <ul>
        <li v-for="item in datas" :key="item.key">
            <Item :data="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  props: {
    datas: Array,
  },
  data() {
    return {
        
    };
  },
  components:{
      Item
  }
};
</script>

<style>
@media screen and (min-width: 220px)  {

}
@media screen and (min-width: 768px)  {

}
@media screen and (min-width: 1400px) {
  .item-container {
    border: 2px solid #e4e4e4;
    padding: 10px 20px;
    border-radius: 5px;
  }
  .item-container .content-header {
      border-bottom: 2px solid #e4e4e4;
      padding-bottom: 10px;
  }
  .item-container .content-header span {
    color: #2ea59c;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>