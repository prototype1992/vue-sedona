<template>
  <div class="intro">
    <h1 class="intro-title">
      Седона — небольшой городок в Аризоне, заслуживающий большего!
    </h1>
    <h2 class="intro-sub-title">
      Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!
    </h2>
  </div>
</template>

<script>
export default {
  name: 'AppIntro',
};
</script>

<style lang="scss" scoped>
  .intro {
    padding: 0 340px;
    text-align: center;
    background: #fff;

    h1 {
      font-size: 21px;
      font-weight: bold;
      line-height: 26px;

      margin: 10px 0 25px;

      color: #000;
    }

    h2 {
      font-size: 14px;
      line-height: 26px;
      margin: 0 0 51px;
      color: #333;
    }
  }
</style>
