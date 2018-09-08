<template>
  <div class="Header">
    <header>
      <h1 class="Header__title">
        <a href="/">TODO Sample With Vuex</a>
      </h1>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
.Header {
  width: 100%;
  height: 50px;
  & .Header__title {
    margin: 15px;
    line-height: 50px;
    font-size: 35px;
    & a {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>
