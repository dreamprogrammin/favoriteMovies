<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { useMovieStore } from '@/stores/movieStore'

const movieStore = useMovieStore()

const setTab = (id) => {
  movieStore.setActiveTab(id)
}
</script>
<template>
  <div class="flex gap-12 justify-center">
    <base-button
      @click="setTab(1)"
      :class="[
        `bg-gray-200 text-gray-500`,
        { 'bg-green-500 text-white': movieStore.activeTab === 1 }
      ]"
      >Favorite</base-button
    >
    <base-button
      @click="setTab(2)"
      :class="[
        `bg-gray-200 text-gray-500`,
        { 'bg-green-500 text-white': movieStore.activeTab === 2 }
      ]"
      >Search</base-button
    >
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
