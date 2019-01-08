<template>
  <div class="main-poster">
    <img
      class="main-poster-image"
      src="./img/title-intro.png"
      alt="Welcome Sedona"
      height="352"
      width="458"
    >
  </div>
</template>

<script>
    export default {
        name: "AppPoster"
    }
</script>

<style lang="scss" scoped>
  .main-poster {
    position: relative;
    z-index: 1;

    width: 1200px;
    height: 433px;
    margin-bottom: 63px;
    padding-top: 74px;

    text-align: center;

    background-color: #81b3d2;
    background-image: url(./img/intro.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;

      height: 57px;

      background-image: url(./img/intro-after.png);
      background-repeat: no-repeat;
      background-position: center bottom;
    }
  }
</style>
