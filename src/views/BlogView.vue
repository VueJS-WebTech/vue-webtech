<script setup>
import {ref} from "vue";
import {getArticles} from '@/composable/api'
import Loader from "@/components/Loader.vue";
import Article from "@/components/Article.vue";

const {articles,articlesFilter} = getArticles();

const searchInput = ref("")

const search = () => {
  if (searchInput.value.length < 1) return articlesFilter.value = articles.value;
  articlesFilter.value = articles.value.filter(article => (
      article.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      article.content.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      article.User.username.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      article.User.name.toLowerCase().includes(searchInput.value.toLowerCase())
  ))
}
</script>

<template>
  <main>
    <div class="pageBody">
      <div class="serversSearchContainer">
        <div class="serversSearchContent">
          <div class="serverSearchContainer">
            <input @input="search()" v-model="searchInput" type="text"
                   placeholder="Search for a title, content, author">
          </div>
        </div>
      </div>
      <div class="articleList" v-if="articles">
        <div class="articlesContainer">
          <Article v-for="article in articlesFilter" :search="searchInput" :article="article"/>
        </div>
      </div>
      <Loader v-else />
    </div>
  </main>
</template>


<style scoped>
@import "../assets/home.css";
</style>