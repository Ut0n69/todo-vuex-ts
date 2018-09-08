<template>
  <InputContainers />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InputContainers from "@/containers/Input/index.vue";

@Component({
  components: {
    InputContainers,
  },
})
export default class Input extends Vue {}
</script>
