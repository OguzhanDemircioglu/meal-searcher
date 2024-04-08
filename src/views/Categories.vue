<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Categories</h1>

    <div class="grid md:grid-cols-5 gap-5 p-8">
      <div v-for="categorie in categories" :key="categorie.idCategory"
           class="p-8 border-b border-gray-200 bg-gray-300 shadow rounded-xl">
        <img :src="categorie.strCategoryThumb" :alt="categorie.strCategory">
        <h3 class="py-3 mb-3 font-bold">{{ categorie.strCategory }}</h3>
        <p class="mb-6" v-if="categorie.strCategoryDescription">
          {{ $filters.truncateWords(categorie.strCategoryDescription, 20) }}...
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import axiosClient from "../axiosClient.js";
import * as $filters from "../filter/index.js";

const categories = ref([]);

onMounted(async () => {
  axiosClient
      .get(`categories.php`)
      .then(({data}) => categories.value = data.categories);
});
</script>