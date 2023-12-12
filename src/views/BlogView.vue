<script setup>
import {onBeforeMount, ref} from "vue";
import Post from "@/components/Article.vue";
import {getArticles} from '@/composable/api'

let articles = [];
const articlesFilter = ref([]);

onBeforeMount(() => {
  getArticles().then(articlesData => {
    articles = articlesData;
    articlesFilter.value = articlesData;
  })
})

const searchInput = ref("")

const search = () => {
  if (searchInput.value.length < 1) return articlesFilter.value = articles;
  articlesFilter.value = articles.filter(article => (
      article.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      article.content.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      article.User.username.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      article.User.name.toLowerCase().includes(searchInput.value.toLowerCase())
  ))
}
</script>

<template>
  <main>
    {{ articles.length }}
    <div class="pageBody">
      <div class="serversSearchContainer">
        <div class="serversSearchContent">
          <div class="serverSearchContainer">
            <input @input="search()" v-model="searchInput" type="text"
                   placeholder="Search for a title, content, author">
          </div>
        </div>
      </div>
      <div class="articleList">
        <div class="articlesContainer">
          <Post v-for="article in articlesFilter" :search="searchInput" :article="article"/>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
@import "../assets/home.css";
</style>