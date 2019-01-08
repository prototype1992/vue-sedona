<template>
  <section class="search-hotel">
    <h2 class="search-hotel__title">Заинтересовались?</h2>
    <p class="search-hotel__description">
      Укажите предполагаемые даты поездки,<br>
      и мы покажем вам лучшие предложения гостиниц в седоне
    </p>
    <div class="search-hotel-form">
      <a href="#" class="search-hotels-btn brown-btn" @click="toggleForm">
        Поиск гостиницы в Седоне
      </a>
    </div>
  </section>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    name: "AppSearchHotel",
    computed: {
      ...mapGetters({
        getOpenForm: 'getOpenForm',
      }),
    },
    methods: {
      ...mapMutations({
        setOpenForm: 'setOpenForm',
      }),
      toggleForm(event) {
        event.preventDefault();
        this.setOpenForm(!this.getOpenForm);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .search-hotel {
    min-height: 291px;
    text-align: center;
    background: #fff;

    .search-hotel__title {
      font-size: 30px;
      font-weight: bold;
      line-height: 36px;
      margin: 0;
      padding: 53px 0 25px;
      color: #000;
    }

    .search-hotel__description {
      line-height: 24px;
      margin: 0;
      padding: 0 380px 44px;
    }
  }
  .search-hotel-form {
    position: relative;
    z-index: 1;

    width: 568px;
    margin: 0 auto;
  }

  .search-hotels-btn {
    font-family: inherit;
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;

    display: block;
    width: 568px;
    min-height: 26px;
    margin: 0;
    padding: 30px 0;

    text-transform: inherit;

    color: #cfcac7;
    border: none;
    background-color: #766357;
    box-shadow: 0 10px 20px 0 rgba(118, 99, 87, .25);
  }
</style>
