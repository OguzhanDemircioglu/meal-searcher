<script setup>

import ViewComponent from "./ViewComponent.vue";
import YoutubeButton from "./YoutubeButton.vue";
import * as $filters from "../filter/index.js";

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
      <h3 class="py-3 mb-3 font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-3" v-if="meal.strInstructions">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}...
      </p>
      <div class="justify-center flex">
        <YoutubeButton :href="meal.strYoutube"/>
        <ViewComponent :href="meal.strSource"/>
      </div>
    </div>
  </div>
  <div v-if="!meals.length"
       class="flex justify-center text-gray-500">
    <p>No Meals</p>
  </div>
</template>

<style scoped lang="scss">

</style>