<template>
  <div class="map-wrap">
    <form
      class="modal-window-container"
      action="#"
      method="post"
    >
      <div :class="formClasses">
        <div class="field-container">
          <label for="date-arrival">Дата заезда:</label>
          <input
            class="modal-window-field date-field"
            id="date-arrival"
            name="arrival"
            type="text"
            value="24 АПРЕЛЯ 2017"
            required
          >
          <button class="date-button field-button" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
              <path
                d="M19.251 2.025h-2.845V.648c0-.381-.294-.689-.656-.689-.363 0-.656.308-.656.689v1.377h-3.938V.648c0-.381-.294-.689-.655-.689-.363 0-.657.308-.657.689v1.377H5.906V.648c0-.381-.294-.689-.656-.689-.363 0-.657.308-.657.689v1.377H1.75C.784 2.025 0 2.847 0 3.862v16.302C0 21.179.784 22 1.75 22h17.501c.966 0 1.749-.821 1.749-1.836V3.862c0-1.015-.783-1.837-1.749-1.837zm.437 18.139a.448.448 0 0 1-.437.459H1.75a.45.45 0 0 1-.438-.459V3.862a.45.45 0 0 1 .438-.459h2.844v1.378c0 .381.294.689.657.689.362 0 .656-.308.656-.689V3.403h3.938v1.378c0 .381.294.689.657.689.361 0 .655-.308.655-.689V3.403h3.938v1.378c0 .381.293.689.656.689.362 0 .656-.308.656-.689V3.403h2.845c.241 0 .437.206.437.459v16.302z"
              ></path>
              <path
                d="M4.594 8.225h2.625v2.066H4.594zM4.594 11.668h2.625v2.067H4.594zM4.594 15.112h2.625v2.066H4.594zM9.188 15.112h2.625v2.066H9.188zM9.188 11.668h2.625v2.067H9.188zM9.188 8.225h2.625v2.066H9.188zM13.781 15.112h2.625v2.066h-2.625zM13.781 11.668h2.625v2.067h-2.625zM13.781 8.225h2.625v2.066h-2.625z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="field-container">
          <label for="date-departure">Дата выезда:</label>
          <input
            class="modal-window-field date-field"
            id="date-departure"
            name="departure"
            type="text"
            value="4 ИЮЛЯ 2017"
          >
          <button class="date-button field-button" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22">
              <path
                d="M19.251 2.025h-2.845V.648c0-.381-.294-.689-.656-.689-.363 0-.656.308-.656.689v1.377h-3.938V.648c0-.381-.294-.689-.655-.689-.363 0-.657.308-.657.689v1.377H5.906V.648c0-.381-.294-.689-.656-.689-.363 0-.657.308-.657.689v1.377H1.75C.784 2.025 0 2.847 0 3.862v16.302C0 21.179.784 22 1.75 22h17.501c.966 0 1.749-.821 1.749-1.836V3.862c0-1.015-.783-1.837-1.749-1.837zm.437 18.139a.448.448 0 0 1-.437.459H1.75a.45.45 0 0 1-.438-.459V3.862a.45.45 0 0 1 .438-.459h2.844v1.378c0 .381.294.689.657.689.362 0 .656-.308.656-.689V3.403h3.938v1.378c0 .381.294.689.657.689.361 0 .655-.308.655-.689V3.403h3.938v1.378c0 .381.293.689.656.689.362 0 .656-.308.656-.689V3.403h2.845c.241 0 .437.206.437.459v16.302z"
              ></path>
              <path
                d="M4.594 8.225h2.625v2.066H4.594zM4.594 11.668h2.625v2.067H4.594zM4.594 15.112h2.625v2.066H4.594zM9.188 15.112h2.625v2.066H9.188zM9.188 11.668h2.625v2.067H9.188zM9.188 8.225h2.625v2.066H9.188zM13.781 15.112h2.625v2.066h-2.625zM13.781 11.668h2.625v2.067h-2.625zM13.781 8.225h2.625v2.066h-2.625z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="field-container">
          <label for="adults">Взрослые:</label>
          <input
            class="modal-window-field number-field number-field-adults"
            id="adults"
            name="number"
            type="number"
            value="2"
            min="1"
          >
          <button class="adults-button-minus field-button" type="button">
            <svg>
              <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"></rect>
            </svg>
          </button>
          <button class="adults-button-plus field-button" type="button">
            <svg>
              <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"></rect>
              <rect fill="#a9a9a9" height="12" width="3" x="17.5" y="12.5"></rect>
            </svg>
          </button>
          <label for="children">Дети:</label>
          <input
            class="modal-window-field number-field number-field-children"
            id="children"
            name="number"
            type="number"
            value="0"
            min="0"
          >
          <button class="children-button-minus field-button" type="button">
            <svg>
              <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"></rect>
            </svg>
          </button>
          <button class="children-button-plus field-button children" type="button">
            <svg>
              <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"></rect>
              <rect fill="#a9a9a9" height="12" width="3" x="17.5" y="12.5"></rect>
            </svg>
          </button>
        </div>
        <button
          class="modal-window-button blue-btn"
          name="search"
          type="submit"
        >
          Найти
        </button>
      </div>
    </form>
    <google-map/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import GoogleMap from '@/components/GoogleMap';

export default {
  name: 'AppMap',

  components: {
    GoogleMap,
  },

  computed: {
    ...mapGetters({
      getOpenForm: 'getOpenForm',
    }),

    formClasses() {
      return {
        'modal-window': true,
        'modal-show': this.getOpenForm,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/colors";

.map-wrap {
  position: relative;
}

.modal-window-container {
  width: 568px;
  min-height: 395px;
  background-color: $color-white;
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

.field-container label:nth-of-type(2) {
  margin-left: 25px;
}

.modal-window-field {
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  line-height: 26px;
  text-transform: inherit;
}

.modal-window-field:hover {
  outline: 0;
  background-color: #ebebeb;
}

.modal-window-field:hover + .field-button {
  background-color: #ebebeb;
}

.date-field {
  width: 295px;
  height: 37px;
  margin: 0 38px 0 0;
  padding: 1px 0 0 13px;
  border: none;
  background-color: #f2f2f2;
}

.date-field:focus {
  outline: 0;
  height: 33px;
  background-color: $color-white;
  border: 2px solid #e5e5e5;
  border-right: none;
}

.date-field:focus + .field-button {
  background-color: $color-white;
  border: 2px solid #e5e5e5;
  border-left: none;
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

.number-field:focus {
  outline: 0;
  height: 34px;
  background-color: $color-white;
  border-top: 2px solid #e5e5e5;
  border-bottom: 2px solid #e5e5e5;
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

.modal-show {
  display: block;
  animation: open .6s;
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
</style>
