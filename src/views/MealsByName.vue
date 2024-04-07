<template>
  <div class="p-8">
    <input class="round border-2 border-gray-200 w-full"
           placeholder="Search for meals"
           v-model="keyword"
    @change="searchMeals"/>
  </div>
</template>

<script setup>

let keyword = $ref('');

function searchMeals() {

}

</script>

<style lang="scss" scoped>

</style>