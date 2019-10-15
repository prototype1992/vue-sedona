<template>
  <div class="container">
    <the-header/>

    <main class="main">

      <router-view/>

    </main>

    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
  @import "./assets/styles/colors";
  @import "./assets/styles/base";
  @import "./assets/styles/animations";

  .advantages-item {
    width: 400px;
    min-height: 256px;
    text-align: center;
    color: $color-white;
    background-color: $color-blue-light;

    h3 {
      font-size: 21px;
      font-weight: bold;
      margin: 0;
      padding: 48px 125px 25px;
    }

    p {
      margin: 0;
      padding: 0 0 21px;

      &:last-child {
        padding: 0 60px;
      }
    }
  }

  .modal-window {
    font-family: inherit;
    font-weight: bold;
    line-height: 26px;
    position: absolute;
    left: 50%;
    display: none;
    padding: 55px;
    transition: .5s transform linear;
    transform: translateX(-50%);
    background-color: $color-white;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
</style>
