<template>
  <div class="signin-container">
    <h1 class="gradient-text">ハイクヨミ</h1>
    <div class="center">
      <div class="subtitle">H a i k u - y o m i</div>
    </div>
    <br />
    <div class="name-label">名前</div>
    <div class="center">
      <input class="input" v-model="name" placeholder="" />
      <button class="button-css" @click="submit">闘技場へ</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SignIn extends Vue {
  private name = ""; // テキストボックスの値を保持するデータ

  // ボタンがクリックされたときの処理
  private submit(): void {
    if (this.name) {
      // ここにボタンがクリックされたときの処理を書く
      console.log("名前:", this.name);
    } else {
      console.log("名前を入力してください");
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Mincho"; /* フォント名を指定 */
  src: url(~@/assets/fonts/SawarabiMincho-Regular.ttf); /* フォントファイルへのパスを指定 */
}

/* h1のグラデーション */
.gradient-text {
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
    rgba(34, 34, 34, 0)
  );
}

h1 {
  font-size: 4rem;
  margin: 10px 0 0;
  margin-top: 0;
  text-align: center;
  margin-bottom: 2rem;
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
}

.input {
  text-align: justify;
  text-justify: auto;
  display: block;
  width: 100%;
  padding: 1rem 0;
  border-width: 1.4px;
  background-color: #d6d5d5;
}

.subtitle {
  font-size: 1rem;
  letter-spacing: 0.6rem;
}

.name-label {
  font-size: 2rem;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signin-container {
  font-family: "Mincho", sans-serif;
  margin: 5rem auto;
  padding: 2rem;
  max-width: 1000px;
}
</style>
