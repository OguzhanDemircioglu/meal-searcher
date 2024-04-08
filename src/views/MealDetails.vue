<script setup>

import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axiosClient from "../axiosClient.js";

const meal = ref({});
const route = useRoute();

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
      .then(({data}) => {
        meal.value = data.meals[0]
      })
})

</script>

<template>
  <div class="bg-gray-500 dark:bg-gray-500 py-8 mx-auto">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
            <img class="w-full h-full object-cover"
                 :src="meal.strMealThumb" :alt="meal.strMealThumb">
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-1/2 px-2">
              <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4
                  rounded-full font-bold dark:hover:bg-gray-600 hover:bg-red-500 hover:text-red-500 transition-colors border-red-600">
                <a :href="meal.strSource">
                  Orginal Site
                </a>
              </button>
            </div>
            <div class="w-1/2 px-2">
              <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4
                  rounded-full font-bold dark:hover:bg-gray-600 hover:bg-red-500 hover:text-red-500 transition-colors border-red-600">
                <a :href="meal.strYoutube">
                  Watch MakingOf
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="md:flex-2 px-4">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{{ meal.strMeal }}</h2>

          <div class="flex">
            <span class="font-bold text-gray-700 dark:text-gray-300">Category:</span>
            <span class="text-gray-600 dark:text-gray-300">{{ meal.strCategory }}</span>
          </div>

          <div class="flex">
            <span class="font-bold text-gray-700 dark:text-gray-300">Area:</span>
            <span class="text-gray-600 dark:text-gray-300">{{ meal.strArea }}</span>
          </div>

          <div class="flex">
            <span class="font-bold text-gray-700 dark:text-gray-300">Tags:</span>
            <span class="text-gray-600 dark:text-gray-300">{{ meal.strTags }}</span>
          </div>

          <div class="flex">
            <span class="font-bold text-gray-700 dark:text-gray-300">Area:</span>
            <span class="text-gray-600 dark:text-gray-300">{{ meal.strArea }}</span>
          </div>

          <div class="text-white mb-3">
            <b>Ingredients and Measures</b>
            <ul>
              <template v-for="(el,index) of new Array(20)">
                <li v-if="meal[`strIngredient${index+1}`]">
                  {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }} - {{ meal[`strMeasure${index + 1}`] }}
                </li>
              </template>
            </ul>
          </div>

        </div>

        <div class="md:flex-1">
          <span class="font-bold text-gray-700 dark:text-gray-300">Instructions:</span>
          <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
            {{ meal.strInstructions }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>