<script setup>

import ViewComponent from "./ViewComponent.vue";
import YoutubeButton from "./YoutubeButton.vue";

const props = defineProps({
  meals: Object
})
</script>

<template>
  <div class="grid md:grid-cols-5 gap-5 p-8">
    <div v-for="meal in meals" :key="meal.idMeal" class="p-8 border-b border-gray-200 bg-gray-300 shadow rounded-xl">
      <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img :src="meal.strMealThumb" :alt="strMeal">
      </router-link>
      <h3 class="py-3 font-bold">{{ meal.strMeal }}</h3>
      <div>
        <YoutubeButton :href="meal.strYoutube"/>
        <ViewComponent :href="meal.strSource"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>