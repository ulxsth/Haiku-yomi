<template>
  <div class="contents-container">
    <form>
      <div class="matchup">マッチング中...</div>
      <div class="button-input">
        <button class="button-input" @click="goBack">戻る</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MatchingPage extends Vue {
  // ボタンがクリックされたときの処理
  private goBack(): void {
    // 戻る処理をここに追加
  }
}
</script>

<style scoped>
.contents-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mincho", sans-serif;
  margin: 0 auto;
  padding: 2rem;
  max-width: 1000px;
  height: 100vh;
}

.matchup {
  font-size: 4rem;
  margin-bottom: 1rem;
  background-color: #d6d5d5;
  padding: 3rem 3rem 3rem 5rem;
  border-radius: 100px;
  margin-bottom: 6rem;
}

.button-input {
  display: flex;
  justify-content: center;
}

.button-input button {
  background: #89aca0;
  border: none;
  font-size: 2.4rem;
  padding: 1rem 4rem;
  text-align: center;
  cursor: pointer;
}

@font-face {
  font-family: "Mincho";
  src: url(~@/assets/fonts/SawarabiMincho-Regular.ttf);
}
</style>
