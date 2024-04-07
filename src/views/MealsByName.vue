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
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <div>
    <div v-for="meal in meals" :key="meal.idMeal" class="p-8 border-b border-gray-200">
      <img :src="meal.strMealThumb" :alt="strMeal">
      <h3>{{ meal.strMeal }}</h3>
      <div>
        <a :href="meal.strYoutube" target="_blank">Youtube</a>
        <!--        <router-link to="/">
                  View
                </router-link>-->
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>