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
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import axiosClient from "../axiosClient.js"

const letters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('');
const ingredients = ref([])

/*onMounted(async () => {
  const res = await axiosClient.get('list.php?i=list')
  ingredients.value = res.data;
})*/
</script>


<style lang="scss" scoped></style>