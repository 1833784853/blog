<template>
  <div class="text-item-box">
    <a-skeleton
      :loading="loading"
      active
      :avatar="{
        shape: 'square',
      }"
      title
      :paragraph="{ rows: 4 }"
    >
      <a-row>
        <a-col :xl="17">
          <nuxt-link class="text-desc-title" :to="{name:'desc-id',params:{id:data.id}}">{{
            data.title
          }}</nuxt-link>
          <div class="text-desc-box">{{ data.describe }}</div>
        </a-col>
        <a-col :xl="7">
          <div class="text-img-box">
            <img :src="data.imgUrl" />
          </div>
        </a-col>
      </a-row>
      <UserInfo :data="data"/>
    </a-skeleton>
  </div>
</template>

<script>
  import UserInfo from "~/components/IndexContent/UserInfo";
export default {
  props: {
    data: Object,
  },
  mounted() {
    this.loading = false;
  },
  data() {
    return {
      loading: true,
    };
  },
  components: {
    UserInfo
  }
};
</script>

<style>
@media screen and (min-width: 224px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 1400px) {
  .text-item-box {
    padding: 10px 20px;
    border-bottom: 2px solid #e4e4e4;
  }
  .text-desc-box {
    height: 110px;
    font-size: 14px;
    width: 500px;
    color: #333;
    margin: 10px 0 0 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
  .text-item-box .text-desc-title {
    color: #000;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s;
  }
  .text-item-box .text-desc-title:hover {
    color: #0099ff;
    text-decoration: underline;
  }
  .text-img-box {
    width: 265px;
    height: 150px;
    border-radius: 5px;
    overflow: hidden;
  }
  .text-img-box img {
    display: block;
    width: 100%;
    height: 100%;
  }

}
</style>
