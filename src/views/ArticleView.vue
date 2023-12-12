<script setup>
import {useRoute} from "vue-router";
import Comment from "@/components/Comment.vue";
import router from "@/router";
import Loader from "@/components/Loader.vue";
import {getArticle} from "@/composable/api";

const route = useRoute()
const {article} = getArticle(route.params.id)
</script>

<template>
  <main>
    <div class="serverInfosContainer" v-if="article">
      <div class="serverInfosBackground">
        <div class="serverInfosName">{{ article.title }}</div>
        <div class="serverInfosBackgroundImg"
             :style="`background-image: url(${article.banner})`"></div>
      </div>
      <div class="serverInfosIcon">
        <img
            :src="article.icon"
            alt="{{ article.title }}">
      </div>
      <div class="serverInfos">
        <div class="serverInfosRow">
          <a @click="router.push({name: 'user', params: {userId: article.User.id}})">
            <div class="serverInfosItem" tooltip="Créateur">
              {{ article.User.name }}
            </div>
          </a>
        </div>
      </div>
      <div class="serverInfosContent">
        <div class="serverInfosPart">
          <div class="serverInfosPartDrop regularText uppercase h2" data-toggle-id="content">
            <span>Contenu</span>
          </div>
          <div class="serverDescriptionContent" id="content">
            <p v-html="article.content"></p>
          </div>
        </div>
        <hr>
        <div class="serverInfosPart">
          <div class="serverInfosPartDrop regularText uppercase h2" data-toggle-id="reaction">
            <span>Reactions</span>
          </div>
          <div id="reaction" v-show="article.Comments.length > 0">
            <div class="reactionsContainer">

              <Comment v-for="comment in article.Comments" :id="comment.User.id" :name="comment.User.name" :username="comment.User.username"
                       :body="comment.content" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-else/>
  </main>
</template>

<style scoped>
@import "../assets/article.css";
</style>