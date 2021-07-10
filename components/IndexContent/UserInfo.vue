<template>
  <div class="text-info">
    <a-space :size="20">
      <a-avatar icon="user"/>
      <span class="user-name">{{ data.user.userName }}</span>
      <span class="desc-time">
        <a-icon type="calendar" />
        {{ data.content_time }}
      </span>
      <span>
            <a-icon class="ic" type="eye"/>
            <span style="color: #0099ff">{{ data.see }}</span>
          </span>
      <span>
            <a-icon class="ic" type="message"/>
            <span style="color: #0099ff">{{ data.comment }}</span>
          </span>
    </a-space>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "UserInfo",
    props: {
      data: Object
    },
    data() {
      return {

      }
    }
  })
</script>

<style scoped>
  @media screen and (min-width: 1400px) {
    .text-info .ic {
      transition: all 0.5s;
    }

    .text-info .ic:hover {
      color: #0099ff;
      cursor: pointer;
    }

    .text-info .user-name {
      font-size: 16px;
      font-weight: bold;
      color: #2ea59c;
    }
  }

</style>
