<script setup>
defineProps({
  title: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex items-center text-xl mb-5">
    {{ title.original_title }} ({{ title.release_date }})
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
