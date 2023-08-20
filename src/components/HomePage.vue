<template>
  <div class="HomePage-container">
    <button class="button-css" @click="submit">
      <div class="title">俳諧の間<br /></div>
      <div class="subtitle">ランダムなプレイヤーと俳句を競います</div>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomePage extends Vue {
  // ここに必要な処理を追加することができます
}
</script>

<style scoped>
.HomePage-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mincho", sans-serif;
  margin: 0 auto; /* マージンを調整することで中央に配置 */
  padding: 2rem;
  max-width: 1000px;
  height: 100vh; /* 画面全体の高さに合わせる */
}

.button-css {
  margin-top: 5.5rem;
  background: #89aca0;
  border: none;
  font-size: 2.4rem;
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  padding: 1rem 4rem;
  text-align: center;
  box-shadow: 2.5px 2.5px #336140;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

@font-face {
  font-family: "Mincho"; /* フォント名を指定 */
  src: url(~@/assets/fonts/SawarabiMincho-Regular.ttf); /* フォントファイルへのパスを指定 */
}

/* titleのグラデーション */
.title {
  font-family: "Mincho", sans-serif;
  font-size: 4.5rem;
  margin-top: 10px;
  margin: 10px 0 0;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to bottom,
    rgb(0, 0, 0),
    rgba(106, 106, 106, 0)
  );
}

.subtitle {
  font-size: 1.3rem;
}
</style>
