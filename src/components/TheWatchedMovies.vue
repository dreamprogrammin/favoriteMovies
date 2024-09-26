<script setup>
import { useMovieStore } from '@/stores/MovieStore'
import TheMovie from '@/components/TheMovie.vue'

const movieStore = useMovieStore()
</script>

<template>
  <div>
    <h3>All watched movies</h3>
    <the-movie v-for="movie in movieStore.watchedMovies" :key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
