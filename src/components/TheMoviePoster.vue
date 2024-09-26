<script setup>
defineProps({
  path: {
    type: String,
    required: true,
    default: ''
  }
})
</script>

<template>
  <div>
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${path}`"
      :alt="path"
      class="w-50 h-50 object-cover rounded-full"
    />
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
