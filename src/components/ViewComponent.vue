<script setup>
const props = defineProps({
  href: String
})
</script>

<template>
  <a
      :href="props.href"
      target="_blank"
      class="mx-2 px-6 py-2 rounded border-2 text-white border-blue-600 bg-blue-500 hover:bg-blue-600 transition-colors">
    <slot>View</slot>
  </a>
</template>

<style scoped lang="scss">

</style>