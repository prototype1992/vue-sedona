<template>
  <div class="page-wrap">
    <h1 class="page-wrap__title">Карта штата</h1>
    <div class="page-wrap__content">
      <google-map/>
    </div>
  </div>
</template>

<script>
  import GoogleMap from '@/components/GoogleMap';

  export default {
    name: "InfoPage",
    components: {
      GoogleMap,
    },
  };
</script>
