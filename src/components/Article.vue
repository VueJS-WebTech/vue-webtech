<script setup>
defineProps(['article', 'search'])
import router from "@/router";

const searchSpan = (content, search) => {
  return search.length < 1 ? content : content.replace(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), match => `<span class='coloredText'>${match}</span>`);
}
</script>

<template>
  <div class="articleCard">
    <div class="articleHeaderContainer">
      <div class="articleActions">
        <a @click="router.push({name: 'article', params: {id: article.id}})">
          <img alt="ArticleIcon"
               :src="article.icon"
               draggable="false">
        </a>
        <a @click="router.push({name: 'article', params: {id: article.id}})" class="articleButtonContainer">
          <div class="articleOpenButton">
            Regarder l'article
          </div>
        </a>
      </div>
      <div class="articleBackgroundImage" style="filter: blur(0px);">
        <img
            :src="article.banner"
            alt="articleBackground" draggable="false">
      </div>
    </div>
    <div class="content">
      <div class="articleTitle">
        <h3 v-html="searchSpan(article.title, search)"></h3>
      </div>
      <div class="articleDescription">
        <p v-html="searchSpan(article.content, search)"></p>
      </div>
      <div class="serverStatus">
        <div class="reactionsResume">
          <p tooltip="Auteur" class="lightText reactionTotalCount" @click="router.push({name: 'user', params: {userId: article.User.id}})"
             v-html="searchSpan(article.User.name, search)"></p>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

.articleCard {
  position: relative;
  margin: 20px 8px 8px;
  height: 415px;
  width: 340px;
  background-color: #292b2f;
  border-radius: 7.5px;
  border: 2px solid rgba(255, 255, 255, .1)
}

.articleCard:hover > .articleHeaderContainer .serverInformationButtonContainer {
  opacity: 1
}

.articleCard .content {
  height: 205px;
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
}

.articleCard:hover > .serverHeaderContainer .serverInformationButtonContainer {
  opacity: 1
}

.articleCard:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, .8)
}

.articleHeaderContainer {
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  width: 100%;
  overflow: hidden;
  position: relative
}

.articleCreated {
  position: absolute;
  height: 40px;
  right: 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(32, 32, 32, .7);
  border-bottom-left-radius: 7.5px;
  border-top-right-radius: 5px
}

.articleCreated h4 {
  padding-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: all .2s
}

.articleCreated h4:hover {
  color: #e6e6e6
}

.articleActions {
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2
}

.articleActions img {
  height: 60px;
  width: 60px;
  border-radius: 7.5px;
  margin-left: 15px;
  background-color: #36393f
}

.articleButtonContainer {
  margin-right: 15px;
  height: 40px
}

.articleOpenButton {
  background-color: #5764f1;
  padding: 10px 15px;
  border-radius: 7.5px;
  transition: ease-in-out .2s;
  color: #e6e6e6;
  position: relative
}

.articleOpenButton:hover {
  cursor: pointer;
  background-color: #7487ff
}

.articleBackgroundImage {
  height: 175px;
  width: 100%;
  position: relative;
  opacity: .75;
  filter: blur(10px)
}

.articleBackgroundImage:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 100px;
  bottom: 0;
  background-image: linear-gradient(to top, #202224, rgba(256, 256, 256, 0))
}

.articleBackgroundImage img {
  height: 100%;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px
}

.articleDescription {
  color: #a9a9a9;
  width: 90%;
  height: 191px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #2b2d31;
  border-radius: 5px;
  padding: 3px;
  margin-left: auto;
  margin-right: auto
}

.articleDescription::-webkit-scrollbar {
  width: 5px
}

.articleDescription::-webkit-scrollbar-track {
  background: 0 0
}

.articleDescription::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, .1);
  border-radius: 7.5px
}

.articleDescription img {
  width: 100%;
  border-radius: 7.5px
}

.articleTitle {
  display: flex;
  align-items: center;
  color: #e6e6e6;
  width: 100%;
  padding-top: 5px;
  padding-left: 15px;
}

.articleTitle h3 {
  width: 230px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.serverStatus {
  background-color: #292b2f;
  width: 100%;
  position: absolute;
  bottom: -10px;
  left: -1.5px;
  padding-top: 5px;
  padding-bottom: 8px;
  display: flex;
  color: #cbd6d6;
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-bottom: 2px solid rgba(255, 255, 255, .1);
  border-right: 2px solid rgba(255, 255, 255, .1);
  border-left: 2px solid rgba(255, 255, 255, .1);
}

.reactionsResume {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1 auto;
}

.reactionsContent {
  display: flex;
  flex-direction: row;
  margin-right: 3px;
}

.reactionBubbleItem {
  display: flex;
  margin-left: -10px;
  width: 25px;
  height: 25px;
  border: 3px solid #202224;
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
}

.reactionBubbleItem img {
  width: 100%;
  height: 100%;
}

.reactionTotalCount {
  background-color: rgba(0, 0, 0, .3);
  border-radius: 7.5px;
  border: solid rgba(255, 255, 255, .3) 1px;
  padding: 0 5px;
  align-items: center;
  margin-right: 10px;
  font-weight: bolder;
  cursor: pointer;
}
</style>