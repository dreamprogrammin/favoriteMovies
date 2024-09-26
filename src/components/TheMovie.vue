<script setup>
import TheMoviePoster from '@/components/TheMoviePoster.vue'
import MovieDescription from '@/components/MovieDescription.vue'
defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => ({})
  },
  isSearched: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <div class="grid grid-cols-[200px_1fr] gap-x-7 mb-5 border-2 border-gray-200 p-2.5 rounded-lg">
    <TheMoviePoster :path="movie.poster_path || ''" />
    <movie-description :description="movie" :is-searched="isSearched" />
  </div>
</template>
