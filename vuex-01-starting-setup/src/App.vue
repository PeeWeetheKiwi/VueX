<template>
  <base-container v-if="isLoggedIn" title="VueX">
    <the-counter></the-counter>
  </base-container>
  <base-container>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';
import {mapState} from "vuex";

export default {
  components: {
    BaseContainer,
    TheCounter,
    UserAuth
  },
  computed: {
    ...mapState(['isLoggedIn'])
  }
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