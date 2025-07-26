<template>
  <h3>{{ counter }}</h3>
  <h3>{{ message }}</h3>
  <button @click="addNum">Add</button>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.numbers.counter;
    },
    message() {
      return this.$store.state.numbers.message;
    }
  },
  methods: {
    addNum() {
      this.$store.commit('increment', {number: 5, user: 'Walid'});
    }
  }
}
</script>