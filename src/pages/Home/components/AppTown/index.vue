<template>
  <section class="town">
    <div class="town-left">
      <h3>Настоящий городок</h3>
      <p>— №1 —</p>
      <p>Седона — не аттракцион для туристов, там течёт своя жизнь</p>
    </div>
    <div>
      <img
        src="./img/sedona-town.png"
        alt="Городок Седона"
        height="256"
        width="800"
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppTown',
};
</script>

<style lang="scss" scoped>
  .town {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    min-height: 256px;
    margin: 0;
    padding: 0;

    .town-left {
      width: 400px;
      min-height: 256px;

      text-align: center;

      color: #fff;
      background: #81b3d2;

      h3 {
        font-size: 21px;
        font-weight: bold;

        margin: 0;
        padding: 48px 125px 25px;
      }

      p {
        margin: 0;
        padding: 0 0 21px;
      }

      p:last-child {
        padding: 0 60px;
      }
    }
  }
</style>
