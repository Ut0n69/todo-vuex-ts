<template>
  <div id="app">
    <Header />
    <Menu />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Modules/Header.vue";
import Menu from "@/components/Modules/Menu.vue";

export default Vue.extend({
  components: {
    Header,
    Menu,
  },
});
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
