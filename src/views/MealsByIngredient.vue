<template>
  <h1 class="px-8 pt-5 text-4xl font-bold">{{ ingredient }} Ingredients</h1>

  <MealItem :meals="meals"/>

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
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);
const ingredient = route.params.ingredient;

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
})

</script>

<style lang="scss" scoped>

</style>