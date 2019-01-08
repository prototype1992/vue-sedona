<template>
  <div class="container">
    <app-header/>

    <main class="main">

      <router-view/>

    </main>

    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  import AppFooter from "@/components/AppFooter";

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter
    },
  }
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

  .modal-window-container {
    overflow: hidden;
    width: 568px;
    min-height: 395px;
    background-color: $color-white;
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

  .modal-show {
    display: block;
    animation: open .6s;
  }

  .field-container {
    position: relative;
    display: flex;
    width: 458px;
    height: 38px;
    margin: 0 0 30px;
    padding: 0;
    justify-content: space-between;
    align-items: baseline;
  }

  .modal-window-field {
    font-family: inherit;
    font-size: 14px;
    font-weight: bold;
    line-height: 26px;
    text-transform: inherit;
  }

  .date-field {
    width: 295px;
    height: 37px;
    margin: 0 38px 0 0;
    padding: 1px 0 0 13px;
    border: none;
    background-color: #f2f2f2;
  }

  .number-field {
    width: 38px;
    height: 38px;
    margin: 0 38px;
    padding: 0;
    text-align: center;
    border: none;
    background-color: #f2f2f2;
  }

  .modal-window-field:hover {
    outline: 0;
    background-color: #ebebeb;
  }

  .date-field:focus {
    outline: 0;
    height: 33px;
    background-color: $color-white;
    border: 2px solid #e5e5e5;
    border-right: none;
  }

  .number-field:focus {
    outline: 0;
    height: 34px;
    background-color: $color-white;
    border-top: 2px solid #e5e5e5;
    border-bottom: 2px solid #e5e5e5;
  }

  .modal-window-field:hover + .field-button {
    background-color: #ebebeb;
  }

  .date-field:focus + .field-button {
    background-color: $color-white;
    border: 2px solid #e5e5e5;
    border-left: none;
  }

  .number-field-adults:focus ~ .adults-button-minus {
    background-color: $color-white;
    border: 2px solid #e5e5e5;
    border-right: none;
  }

  .number-field-adults:focus ~ .adults-button-plus {
    background-color: $color-white;
    border: 2px solid #e5e5e5;
    border-left: none;
  }

  .number-field-children:focus ~ .children-button-minus {
    background-color: $color-white;
    border: 2px solid #e5e5e5;
    border-right: none;
  }

  .number-field-children:focus ~ .children-button-plus {
    background-color: $color-white;
    border: 2px solid #e5e5e5;
    border-left: none;
  }

  .number-field-adults:hover ~ .adults-button-plus,
  .number-field-children:hover ~ .children-button-plus {
    background-color: #ebebeb;
  }

  .number-field-adults:focus ~ .adults-button-plus,
  .number-field-children:focus ~ .children-button-plus {
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

  .field-button {
    position: absolute;
    display: flex;
    width: 38px;
    height: 38px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: #f2f2f2;
    justify-content: center;
    align-items: center;
  }

  .date-button {
    top: 0;
    right: 0;
  }

  .adults-button-minus {
    top: 0;
    right: 308px;
  }

  .adults-button-plus {
    top: 0;
    right: 233px;
  }

  .children-button-minus {
    top: 0;
    right: 76px;
  }

  .children-button-plus {
    top: 0;
    right: 0;
  }

  .field-button path {
    fill: #cacaca;
  }

  .field-button:focus {
    outline: 0;
  }

  .field-button:hover path,
  .field-button:focus path,
  .field-button:hover rect,
  .field-button:focus rect {
    fill: $color-black;
  }

  .field-button:active path,
  .field-button:active rect {
    fill: $color-blue-light;
  }

  .modal-window-button {
    font-family: inherit;
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;
    width: 458px;
    height: 58px;
    margin-top: 24px;
    text-transform: inherit;
    color: $color-white;
    background-color: $color-blue-light;
    border: none;
  }

  .field-container label:nth-of-type(2) {
    margin-left: 25px;
  }

  .number-field-adults {
    margin-left: 50px;
  }

  .blue-btn:hover,
  .blue-btn:focus {
    background-color: $color-blue-light;
  }

  .blue-btn:active {
    color: #88b6d1;
    background-color: $color-blue-light;
  }

  .filter-container {
    display: flex;
    align-items: flex-start;
    min-height: 217px;
    padding: 0 72px;
    color: $color-white;
    background-color: $color-blue-middle;
    background-image: url(./assets/img/filter-background.jpg);
    background-repeat: no-repeat;
    background-position: 0 -56px;
    justify-content: flex-start;
  }

  .filter-title {
    font-size: 16px;
    line-height: 21px;
    margin: 0;
    padding: 28px 0 23px;
  }

  .filter-checkbox ul {
    overflow: hidden;
    width: 255px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .filter-checkbox li {
    position: relative;
    margin: 0 0 25px 37px;
    padding: 0;
  }

  .filter-checkbox-item input[type='checkbox']:checked + .checkbox-indicator::before {
    position: absolute;
    bottom: -1px;
    left: 14px;
    width: 5px;
    height: 22px;
    content: '';
    transform: rotate(45grad);
    border: .5px solid $color-blue-middle;
    border-bottom: 0;
    border-radius: 2px;
    background-color: $color-white;
  }

  .filter-checkbox-item input[type='checkbox']:checked + .checkbox-indicator::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 4px;
    width: 4.5px;
    height: 12.5px;
    transform: rotate(-50grad);
    border: 0 solid $color-blue-middle;
    border-left: .5px solid $color-blue-middle;
    border-radius: 2px;
    background-color: $color-white;
  }

  .filter-checkbox-item input[type='checkbox'] + .checkbox-indicator {
    position: absolute;
    left: -37px;
    width: 18px;
    height: 18px;
    border: 3px solid $color-white;
    border-radius: 4px;
  }

  .filter-checkbox-item input[type='checkbox']:disabled + .checkbox-indicator {
    border-color: #6a6a6a;
  }

  .filter-checkbox-item input[type='checkbox']:disabled + .checkbox-indicator::before,
  .filter-checkbox-item input[type='checkbox']:disabled + .checkbox-indicator::after {
    background-color: #6a6a6a;
  }

  .filter-range {
    width: 317px;
    margin-left: 228px;
  }

  .filter-range .filter-title {
    margin-bottom: -13px;
  }

  .price-controls {
    font-size: 0;
    position: relative;
    height: 32px;
    margin-bottom: 20px;
    border: 2px solid $color-white;
    border-radius: 2px;
  }

  .price-controls::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 22px;
    transform: translate(-50%, -50%);
    background-color: $color-white;
  }

  .price-controls label {
    font-family: inherit;
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: middle;
    margin-top: 5px;
    cursor: pointer;
  }

  .price-controls label:last-child {
    margin-left: -10px;
  }

  .price-controls .min-price,
  .price-controls .max-price {
    width: 90px;
    padding-left: 65px;
  }

  .price-controls input {
    font: inherit;
    width: 50px;
    margin: 0;
    color: inherit;
    border: none;
    background: none;
  }

  .range-controls {
    position: relative;
    margin-bottom: 32px;
  }

  .range-controls .scale {
    height: 2px;
    background-color: rgba(255, 255, 255, .3);
  }

  .range-controls .bar {
    width: 80%;
    height: 2px;
    background-color: $color-white;
  }

  .range-toggle {
    position: absolute;
    top: -9px;
    width: 4px;
    height: 4px;
    cursor: pointer;
    border: 8px solid $color-white;
    border-radius: 50%;
    background-color: #ababab;
    box-shadow: 0 2px 1px 0 rgba(0, 1, 1, .2);
  }

  .range-toggle:hover {
    background-color: $color-blue-bold;
  }

  .range-toggle-min {
    left: 0;
  }

  .range-toggle-max {
    left: 80%;
  }

  .btn-transparent {
    font-family: inherit;
    font-size: 14px;
    line-height: 20px;
    display: block;
    margin: 0 154px;
    padding: 6px 34px;
    cursor: pointer;
    transform: translateX(-50%);
    text-transform: inherit;
    color: $color-white;
    border: 2px solid $color-white;
    border-radius: 2px;
    background-color: transparent;
  }

  .btn-transparent:hover {
    color: $color-black;
    background-color: $color-white;
  }

  .hotels-content {
    background-color: #fefefe;
  }

  .hotels-content ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sortable {
    font-size: 12px;
    line-height: 18px;
    display: flex;
    height: 86px;
    padding: 0 72px;
    border-bottom: 1px solid #e5e5e5;
    align-items: center;
  }

  .sortable-list {
    display: flex;
  }

  .sortable-item a {
    color: #c7c7c7;
    border-bottom: 1px dotted $color-blue-light;
  }

  .sortable-item a:hover {
    color: $color-blue-light;
  }

  .sortable-item a:focus {
    color: $color-blue-light;
    border: none;
  }

  .sortable a:active {
    color: $color-black;
    border: none;
  }

  .sortable span {
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;

    margin: 0 47px 0 0;
  }

  .sortable h3 {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-right: 38px;
  }

  .sortable li {
    margin: 2px 32px 0 0;
    padding: 0;
  }

  .sort-btn-container {
    font-family: inherit;
    font-size: 0;
    margin-left: auto;
    display: flex;
    width: 35px;
    height: 13px;
    margin-top: 2px;
    justify-content: flex-end;
  }

  .sort-btn-container svg {
    padding-left: 15px;
  }

  .hotel {
    display: flex;
    width: 1056px;
    min-height: 92px;
    padding: 29px 72px;
    border-bottom: 1px solid #e5e5e5;
    justify-content: space-between;
  }

  .hotel-left {
    display: flex;
    flex-wrap: wrap;
  }

  .hotel-image {
    max-height: 90px;
    max-width: 135px;
    margin-right: 31px;
  }

  .hotel-image img {
    width: 100%;
    height: auto;
  }

  .hotel-content h3 {
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;
    max-width: 650px;
    margin: -4px 0 6px;
    padding: 0;
  }

  .hotel-content p {
    font: inherit;
    margin: 0 0 14px;
    padding: 0;
  }

  .hotel-type {
    display: flex;
    width: 181px;
    justify-content: space-between;
  }

  .hotel-content button {
    font-family: inherit;
    font-size: 14px;
    font-weight: bold;
    line-height: 21px;
    padding: 3px 17px;
    text-transform: inherit;
    color: $color-white;
    border: none;
  }

  .btn-left {
    background-color: $color-blue-light;
  }

  .btn-right {
    background-color: #766357;
  }

  .hotel-link {
    color: $color-black;
  }

  .hotel-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .hotel-stars {
    width: 112px;
    height: 16px;
    margin-right: -3px;
    background-image: url(./assets/img/star.svg);
    background-repeat: repeat-x;
    background-position: center right;
  }

  .hotel-stars-one {
    width: 20%;
  }

  .hotel-stars-second {
    width: 40%;
  }

  .hotel-stars-three {
    width: 60%;
  }

  .hotel-stars-four {
    width: 80%;
  }

  .hotel-stars-five {
    width: 100%;
  }

  .hotel-rating {
    font-size: 14px;
    line-height: 21px;
    width: 83px;
    height: 21px;
    padding: 3px 15px 3px 16px;
    color: #666;
    background-color: #f2f2f2;
  }

  .link-sort-btn:hover path {
    fill: $color-black;
  }

  .link-sort-btn:active path,
  .link-sort-btn:focus path {
    fill: $color-blue-light;
  }

  a.current-link,
  .current-link path {
    color: $color-blue-light;
    border: none;
    fill: $color-blue-light;
  }

</style>
