<template>
  <div class="Input">
    <input class="Input__input" type="text" v-model="item" /><br>
    <button @click="addItem">ADD ITEM</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ItemController from "@/containers/Input/controller";

export default Vue.extend({
  data() {
    return {
      item: "",
    };
  },
  methods: {
    addItem() {
      const controller = new ItemController(this.item);
      controller.addItem();
    },
  },
});
</script>
