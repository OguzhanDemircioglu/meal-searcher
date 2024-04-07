<template>
  <header class="bg-white shadow h-16 flex-wrap-reverse justify-items-end">
    <router-link :to="{name:'home'}">
      Home
    </router-link>
    <div class="inline-flex">
      <router-link :to="{ name: 'byName', params: { letter } }" class=" px-2 h-full hover:bg-orange-200" >
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter', params: { letter }}" class="px-2 h-full hover:bg-orange-200">
        Meals By Letter
      </router-link>
      <router-link :to="{ name: 'byIngredient', params: { letter } }" class="px-2 h-full hover:bg-orange-200">
        Meals By Ingredient
      </router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>