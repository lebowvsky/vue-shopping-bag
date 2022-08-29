<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/basket">Shopping Bag({{ productsInBag.length }})</router-link>
  </nav>
  <router-view />
</template>
<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("loadProducts");
  },
  computed: mapState(["productsInBag"]),
};
</script>

<style lang="scss">
#app {
}
</style>
