<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <div class="px-8">
    <input
        type="text"
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-1/3"
        placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
      <a href="#"
         @click.prevent="openIngredient(ingredient)"
         v-for="ingredient of computedIngredients"
         :key="ingredient.idIngredient"
         class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <p>{{ingredient.strDescription}}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import axiosClient from "../axiosClient.js";
import {onMounted, ref} from "vue";
import {computed} from "@vue/reactivity";
import {useRouter} from "vue-router";
import store from "../store/index.js";

const router = useRouter();
const keyword = ref("");
const ingredients = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient)
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
</script>

<style lang="scss" scoped>

</style>