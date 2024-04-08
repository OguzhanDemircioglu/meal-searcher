<template>
  <div class=" flex flex-col p-8 items-center justify-center">
    <div class="flex gap-1 justify-center mt-2">
      <router-link
          v-for="letter in letters"
          :key="letter"
          :to="{ name: 'byLetter', params: { letter } }"
          class="w-5 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>
    <MealItem :meals="meals"/>
  </div>
</template>

<script setup>
import {computed} from "@vue/reactivity";
import store from "../store";
import {useRoute} from "vue-router";
import {onMounted, watch} from "vue";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const letters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('');
const meals = computed(()=> store.state.mealsByLetter)

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

/*onMounted(()=> {
  store.dispatch('searchMealsByLetter', route.params.letter)
})*/
</script>

<style lang="scss" scoped>

</style>