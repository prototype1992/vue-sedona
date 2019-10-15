<template>
  <section class="services">
    <div class="service-item house">
      <h4>Жильё</h4>
      <p>Рекомендуем пожить в настоящем мотеле, всё как в кино!</p>
    </div>
    <div class="service-item food">
      <h4>Еда</h4>
      <p>Всегда заказывайте фирменный бургер, вы не разочаруетесь!</p>
    </div>
    <div class="service-item souvenir">
      <h4>Сувениры</h4>
      <p>Не только китайского, но и местного производства!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppServices',
};
</script>

<style lang="scss" scoped>
  .services {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;

    .service-item {
      width: 400px;
      min-height: 324px;
      margin: 0;
      padding: 0;
      text-align: center;
      background: #fff;
    }

    .service-item.house {
      background-image: url(./img/icon-1.svg);
      background-repeat: no-repeat;
      background-position: center 54px;
    }

    .service-item.food {
      background-image: url(./img/icon-3.svg);
      background-repeat: no-repeat;
      background-position: center 55px;
    }

    .service-item.souvenir {
      background-image: url(./img/icon-2.svg);
      background-repeat: no-repeat;
      background-position: center 50px;
    }

    .service-item h4 {
      font-size: 21px;
      margin: 0;
      padding: 156px 0 23px;
      color: #000;
    }

    .service-item p {
      margin: 0;
      padding: 0 58px 0;
    }
  }
</style>
