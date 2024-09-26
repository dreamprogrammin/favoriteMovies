<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheMovie from '@/components/TheMovie.vue'
import TheTabs from '@/components/TheTabs.vue'
import TheSeach from '@/components/TheSeach.vue'
import TheWatchedMovies from '@/components/TheWatchedMovies.vue'
import { useMovieStore } from '@/stores/movieStore.js'

const movieStore = useMovieStore()
</script>

<template>
  <main class="max-w-2xl m-auto">
    <the-header />
    <the-tabs />
    <div v-if="movieStore.activeTab === 1">
      <the-watched-movies />
      <h3>All movies: {{ movieStore.totalCountMovies }}</h3>
      <the-movie v-for="movie in movieStore.movies" :key="movie.id" :movie="movie" />
    </div>
    <the-seach v-else />
  </main>
</template>

<style scoped></style>
