<template>
  <div id="app" class="app-container">
    <SignIn msg="" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignIn from "./components/SignIn.vue";

@Component({
  components: {
    SignIn,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0b0b0b;
  overflow: hidden; /* 画像のオーバーフローを制御 */
}

.app-container {
  background-image: url(~@/assets/background.png); /* require() を使用 */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center; /* 画像を中央に配置 */
  width: 100vw; /* 画面幅に合わせる */
  height: 100vh; /* 画面高さに合わせる */
  position: absolute; /* ページ全体を覆うように */
  top: 0;
  left: 0;
  z-index: -1; /* 背面に配置 */
}
</style>
