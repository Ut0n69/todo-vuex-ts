<template>
  <div class="List">
    <ul>
      <li v-for="value of item" :key="value">
        {{ value }}
      </li>
    </ul>
  </div>  
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import store from "@/store";

export default Vue.extend({
  data() {
    return {
      item: this.$store.state.item.data.list,
    };
  },
});
</script>

