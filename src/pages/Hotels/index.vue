<template>
  <div id="hotels">
    <hotel-filters />
    <div class="hotels-content">
      <hotel-sortable
        :count="hotelCount"
      />
      <section class="hotels">
        <hotel-item
          v-for="(hotel, index) in hotels"
          :key="index + 100"
          :hotel="hotel"
        />
      </section>
    </div>
  </div>
</template>

<script>
import HotelFilters from './components/HotelFilters';
import HotelSortable from './components/HotelSortable';
import HotelItem from './components/HotelItem';

export default {
  name: 'Hotels',

  components: {
    HotelFilters,
    HotelSortable,
    HotelItem,
  },

  data() {
    return {
      hotels: [
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/amara.jpg'),
          title: 'Amara Resort & Spa',
          type: 'hotel',
          price: 4000,
          starCount: 4,
          rating: 8.5,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/desert.jpg'),
          title: 'DESERT QUAIL INN',
          type: 'motel',
          price: 3000,
          starCount: 3,
          rating: 8.9,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/amara.jpg'),
          title: 'Amara Resort & Spa',
          type: 'hotel',
          price: 4000,
          starCount: 4,
          rating: 8.5,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/desert.jpg'),
          title: 'DESERT QUAIL INN',
          type: 'motel',
          price: 3000,
          starCount: 3,
          rating: 8.9,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/amara.jpg'),
          title: 'Amara Resort & Spa',
          type: 'hotel',
          price: 4000,
          starCount: 4,
          rating: 8.5,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/desert.jpg'),
          title: 'DESERT QUAIL INN',
          type: 'motel',
          price: 3000,
          starCount: 3,
          rating: 8.9,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/amara.jpg'),
          title: 'Amara Resort & Spa',
          type: 'hotel',
          price: 4000,
          starCount: 4,
          rating: 8.5,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/desert.jpg'),
          title: 'DESERT QUAIL INN',
          type: 'motel',
          price: 3000,
          starCount: 3,
          rating: 8.9,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/amara.jpg'),
          title: 'Amara Resort & Spa',
          type: 'hotel',
          price: 4000,
          starCount: 4,
          rating: 8.5,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/desert.jpg'),
          title: 'DESERT QUAIL INN',
          type: 'motel',
          price: 3000,
          starCount: 3,
          rating: 8.9,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
        {
          // eslint-disable-next-line global-require
          imagePath: require('../../assets/img/villas.jpg'),
          title: 'VILLAS AT POCO DIABLO',
          type: 'apartments',
          price: 2000,
          starCount: 2,
          rating: 9.2,
        },
      ],
    };
  },

  computed: {
    hotelCount() {
      return this.hotels.length;
    },
  },

  methods: {
    starClasses(starCount) {
      switch (starCount) {
        case 1:
          return 'hotel-stars-one';
        case 2:
          return 'hotel-stars-second';
        case 3:
          return 'hotel-stars-three';
        case 4:
          return 'hotel-stars-four';
        default:
        case 5:
          return 'hotel-stars-five';
      }
    },
  },
};
</script>

<style lang="scss">
  .hotels-content {
    background-color: #fefefe;
  }
</style>
