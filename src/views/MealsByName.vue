<script setup>
import {computed} from '@vue/reactivity';
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import store from "../store";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    //store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})

</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
        type="text"
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-1/3"
        placeholder="Search for Meals"
        @change="searchMeals"
    />
  </div>

  <div class="grid md:grid-cols-5 gap-5 p-8">
    <div v-for="meal in meals" :key="meal.idMeal" class="p-8 border-b border-gray-200 bg-gray-300 shadow rounded-xl">
      <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
        <img :src="meal.strMealThumb" :alt="strMeal">
      </router-link>
      <h3 class="py-3 font-bold">{{ meal.strMeal }}</h3>
      <div>
        <a class="py-2 rounded-border-2 border-red-600 hover:bg-red-500 hover:text-red-100 transition-colors"
           :href="meal.strYoutube">Youtube</a>
        <router-link
            class="mx-3 py-2 rounded-border-2 border-red-600 hover:bg-orange-500 hover:text-red-100 transition-colors"
            to="/">
          View
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>