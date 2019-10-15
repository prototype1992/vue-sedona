<template>
  <div>
    <app-poster/>

    <app-intro/>

    <app-town/>

    <app-services/>

    <section class="bridge">
      <div class="bridge-left">
        <img
          src="../../assets/img/sedona-bridge.png"
          alt="Мост дьявола"
          height="256"
          width="800"
        >
      </div>
      <div class="bridge-right advantages-item">
        <h3>Там есть<br> Мост дьявола</h3>
        <p>— №2 —</p>
        <p>Да, по нему можно пройти! Если конечно вы осмелитесь</p>
      </div>
    </section>
    <section class="more-advantages">
      <div class="advantages-item">
        <h3>Небольшая площадь</h3>
        <p>— №3 —</p>
        <p>Все достопримечательности находятся очень близко</p>
      </div>
      <div class="advantages-item">
        <h3>Красивая дорога</h3>
        <p>— №4 —</p>
        <p>Ехать в Седону из Лас-Вегаса совсем не скучно!</p>
      </div>
      <div class="advantages-item advantages-item-tourist">
        <h3>Мало туристов</h3>
        <p>— №5 —</p>
        <p>Большинство едет в гранд каньон и толпится там</p>
      </div>
    </section>

    <app-search-hotel/>

    <app-map/>
  </div>
</template>

<script>
import AppPoster from './components/AppPoster';
import AppIntro from './components/AppIntro';
import AppServices from './components/AppServices';
import AppTown from './components/AppTown';
import AppSearchHotel from './components/AppSearchHotel';
import AppMap from './components/AppMap';

export default {
  name: 'indexPage',
  components: {
    AppPoster,
    AppIntro,
    AppServices,
    AppTown,
    AppSearchHotel,
    AppMap,
  },
};
</script>

<style lang="scss">
  @import "../../assets/styles/colors";

  .bridge-right {
    p {
      &:last-child {
        padding: 0 40px;
      }
    }
  }

  .bridge {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 256px;
  }

  .more-advantages {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;

    .advantages-item {
      color: #333;
      background-color: #eee;
    }

    h3 {
      color: $color-black;
    }
  }

  .advantages-item-tourist p:nth-of-type(2) {
    padding: 0 75px;
  }
</style>
