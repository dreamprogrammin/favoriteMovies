<script setup>
defineProps({
  overview: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span class="mb-2.5">{{ overview }}</span>
</template>

<style scoped>
/* Ваши стили */
</style>
