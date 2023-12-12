<script setup>
defineProps(['article'])
import router from "@/router";
</script>

<template>
  <div :tooltip="article.title" class="server">
    <a @click="router.push({name: 'article', params: {id: article.id}})">
      <img :src="article.icon" :alt="article.title">
    </a>
  </div>
</template>

<style scoped>

.server {
  display: flex;
  width: 60px;
  height: 60px;
  margin: 5px 5px;
  border: 3px solid transparent;
  -webkit-transition: all .2s;
  -moz-transition: all .2s;
  transition: all .2s;
  border-radius: 50%;
  align-items: center;
  justify-content: center
}

.server:hover {
  border: 3px solid rgba(255, 255, 255, .8)
}

.server img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer
}

.server a {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center
}
</style>