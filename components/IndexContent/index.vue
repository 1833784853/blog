<template>
  <div class="blog-container">
    <a-row>
      <a-col :xl="17">
        <List :datas="listData" />
      </a-col>
      <a-col :xl="7">
        <ul>
          <li></li>
        </ul>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import List from "./List.vue";

export default {
  data() {
    return {
      listData: [
        {
          id: 1,
          title: "Python数据分析库pandas高级接口dt的使用",
          imgUrl: require("~/static/img/2.jpg"),
          describe:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum dsadasdasdsadsad asdasdasds adadasdsadsadsa dsa sslaoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. dsadsadasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadd",
          user: {
            avatar: require("~/static/img/2.jpg"),
            userName: "zie",
          },
          content_time: "2021-07-12",
          good: 100,
          bad: 200,
          see: 100,
          comment: 60,
        },
        {
          id: 2,
          title: "Python数据分析库pandas高级接口dt的使用",
          imgUrl: require("~/static/img/2.jpg"),
          describe:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. dsadsadasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadd",
          user: {
            avatar: "",
            userName: "zie",
          },
          content_time: "2021-07-12",
          good: 100,
          bad: 200,
          see: 100,
          comment: 60,
        },
        {
          id: 3,
          title: "Python数据分析库pandas高级接口dt的使用",
          imgUrl: "",
          describe:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. dsadsadasdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadd",
          user: {
            avatar: "",
            userName: "zie",
          },
          content_time: "2021-07-12",
          good: 100,
          bad: 200,
          see: 100,
          comment: 60,
        },
      ],
    };
  },
  components: {
    List,
  },
};
</script>

<style>
@media screen and (min-width: 1400px) {
  .blog-container {
    width: 1400px;
    margin: 20px auto 0;
  }
}
</style>