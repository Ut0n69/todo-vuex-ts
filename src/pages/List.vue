<template>
  <ListContainers />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListContainers from "@/containers/List/index.vue";

@Component({
  components: {
    ListContainers,
  },
})
export default class List extends Vue {}
</script>
