<template>
  <header class="bg-green-300 shadow h-16 flex justify-between items-stretch">
    <div>
      <router-link
          :to="{ name: 'home' }"
          class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
      >
        Home
      </router-link>
      <router-link
          :to="{ name: 'categories' }"
          class="inline-flex items-center h-full px-5 text-orange-500 font-bold"
      >
        Categories
      </router-link>
    </div>
    <div class="flex items-center gap-1">
      <router-link
          :to="{ name: 'byName' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        SearchMealsByName
      </router-link>

      <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Letter
      </router-link>

      <router-link
          :to="{ name: 'ingredients' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
<script setup>
</script>