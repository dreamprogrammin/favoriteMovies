<script setup>
import { useSeacrhStore } from '@/stores/MovieSearch'
import { ref } from 'vue'
import Loader from '@/components/Loader.vue'
import TheMovie from '@/components/TheMovie.vue'

const searchMovie = ref('')
const searchStore = useSeacrhStore()
</script>

<template>
  <form @submit.prevent="searchStore.getMovie(searchMovie)">
    <input
      type="text"
      class="border border-[#e7e7e7] w-full h-10 px-2 mb-5 mt-5 rounded-lg"
      v-model="searchMovie"
      placeholder="searchMovie..."
    />
  </form>
  <loader v-if="searchStore.isWatched" />
  <div v-else>
    <TheMovie
      v-for="movie in searchStore.movies"
      :key="movie.id"
      :movie="movie"
      :isSearched="true"
    />
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
