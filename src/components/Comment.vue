<script setup>
import router from "@/router";

defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="reaction">
    <div class="reactionInfos">
      <div class="reactionInfosText">
        <div class="reactionInfosTextUp">
          <span class="reactionUserName">{{ name }}</span>
        </div>
        <div class="reactionDate lightText" @click="router.push({name: 'user', params: {userId: id}})">
          @{{ username }}
        </div>
      </div>
    </div>
    <div class="reactionContent regularText" v-html="body"></div>
  </div>
</template>

<style scoped>

.reaction {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 40px 0
}

.reaction .regularText {
  text-align: inherit !important
}

.reactionInfos {
  display: flex;
  flex-direction: row;
  height: 60px
}

.reactionInfosText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10px
}

.reactionInfosTextUp {
  display: flex;
  flex-direction: row
}

.reactionUserName {
  font-size: 18px;
  font-weight: bolder;
  color: #e6e6e6
}

.reactionEmojiContainer {
  display: flex;
  position: relative;
  margin-left: 5px
}

.reactionEmoji {
  display: flex;
  justify-content: center;
  align-items: center
}

.reactionEmoji img {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, .3);
  cursor: pointer;
  filter: grayscale(1);
  opacity: .3;
  transition: all ease-in-out .1s
}

.reactionEmoji img:hover {
  opacity: 1
}

.selected img {
  filter: grayscale(0);
  opacity: 1
}

.reactionDate {
  font-size: 12px;
  color: rgb(136, 150, 160);
}
.reactionDate:hover {
  cursor: pointer;
}

.reactionContent {
  display: flex;
  margin-left: 54px
}

.reactionOptions {
  display: none;
  position: absolute;
  top: 15px;
  right: 5%;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.reactionOptions img {
  width: 100%;
  height: 100%;
  filter: brightness(.8);
}

.reactionOptions:hover img {
  filter: brightness(1);
}

.reaction:hover .reactionOptions {
  display: flex
}
</style>