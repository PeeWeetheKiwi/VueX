<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    TheHeader
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'removeFromCart']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>