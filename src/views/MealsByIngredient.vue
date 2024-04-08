<template>
  <h1 class="px-8 pt-5 text-4xl font-bold">{{ ingredient }} Ingredients</h1>
  <div class="grid md:grid-cols-5 gap-5 p-8">
    <div v-for="meal in meals" :key="meal.idMeal"
         class="p-8 border-b border-gray-200 bg-gray-300 shadow rounded-xl">
      <img :src="meal.strMealThumb" :alt="strMeal">
      <h3 class="py-3 font-bold">{{ meal.strMeal }}</h3>
    </div>
  </div>

  <div v-if="!meals.length"
       class="flex justify-center text-gray-500">
    <p>No Meals</p>
  </div>
</template>

<script setup>
import {computed} from "@vue/reactivity";
import store from "../store/index.js";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);
const ingredient = route.params.ingredient;

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
})

</script>

<style lang="scss" scoped>

</style>