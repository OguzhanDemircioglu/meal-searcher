<template>
  <div>
<pre>{{meals}}</pre>
  </div>
</template>

<script setup>
import {computed} from "vue";
import store from "../store/index.js";
import states1 from "../store/state.js";

export default {}

const meals = computed(() => states1.meals)
</script>

<style lang="scss" scoped>

</style>