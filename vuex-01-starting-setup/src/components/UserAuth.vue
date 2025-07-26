<template>
  <button v-if="!isLoggedIn" @click="loginUser">Login</button>
  <button v-else @click="logoutUser">Logout</button>
</template>

import { mapActions } from 'vuex';

<script>
import {mapActions, mapGetters, mapState} from "vuex";


export default {
  methods: {
    ...mapActions(['loginUser', 'logoutUser']),
  },
  computed: {
    ...mapGetters(['userIsLoggedIn']),
    ...mapState(['isLoggedIn'])
  }
}
</script>