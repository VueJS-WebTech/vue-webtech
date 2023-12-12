<script setup>
import {useRoute} from "vue-router";
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import ArticleUser from "@/components/ArticleUser.vue";
import Loader from "@/components/Loader.vue";
import {getUser} from "@/composable/api";

const user = ref({})

onBeforeMount(() => {
  const route = useRoute()
  setTimeout(() => {
    getUser(route.params.userId).then(userData => {
      user.value = userData;
    })
  }, 500)
})
</script>

<template>
  <div class="pageBody" v-if="user.user">
    <div class="profileContainer">
      <div class="profilePicture">
        <img src="https://picsum.photos/200" :alt="user.user.username">
      </div>
      <div class="profileCreatedAt">
        <span class="regularText">@{{ user.user.username }}</span>
      </div>
      <div class="profileBody">
        <div class="profileRow">
          <div class="profileOwner">
            <h2 class="regularText">{{user.user.name}}</h2>
          </div>
        </div>
        <hr>
        <div class="section" v-show="user.articles.length > 0">
          <h4 class="lightText">Articles Added </h4>
          <div class="serverList">
            <ArticleUser v-for="article in user.articles" :article="article" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loader v-else/>
</template>

<style scoped>
@import "../assets/user.css";
</style>