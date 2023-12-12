<script setup>

import router from "@/router";
</script>

<template>
  <div class="navBar">
    <a @click="router.push({name: 'blog'})">
      <div class="navBarLogoContainer">
        <span class="regularText">CAVILLE </span>
        <span class="coloredText">MAXIME</span>
      </div>
    </a>
  </div>
</template>

<style scoped>

</style>