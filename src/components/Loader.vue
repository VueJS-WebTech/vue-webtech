<template>
  <div class="loader hiddenLoader">
    <div class="loaderTitle ">
      <span class="regularText">CAVILLE 󠇰󠇰</span>
      <span class="coloredText">MAXIME</span>
    </div>
    <br>
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  z-index: 9999;
  top: 75px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2f3136;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}

.loaderTitle {
  display: flex;
  position: relative;
  top: 15px;
  font-size: 30px;
  font-weight: 700
}

.loaderTitleFirefox {
  display: flex;
  position: relative;
  top: 1px;
  font-size: 30px;
  font-weight: 700
}

.hiddenLoader {
  animation: fadeOut 1s;
  animation-fill-mode: forwards
}

@keyframes fadeOut {
  100% {
    opacity: 0;
    visibility: hidden
  }
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px
}

.lds-ellipsis div {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #e6e6e6;
  animation-timing-function: cubic-bezier(0, 1, 1, 0)
}

.lds-ellipsis div:first-child {
  left: 6px;
  animation: lds-ellipsis1 .6s infinite
}

.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 .6s infinite
}

.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 .6s infinite
}

.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 .6s infinite
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(0)
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0)
  }
  100% {
    transform: translate(19px, 0)
  }
}
</style>