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
const letters = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'.split('');
</script>

<style lang="scss" scoped></style>