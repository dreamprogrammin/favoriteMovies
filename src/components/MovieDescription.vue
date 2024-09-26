<script setup>
import TheMovieTitle from '@/components/TheMovieTitle.vue'
import MovieOverview from '@/components/MovieOverview.vue'
import MovieButtons from '@/components/MovieButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useMovieStore } from '@/stores/MovieStore'
import { useSeacrhStore } from '@/stores/MovieSearch'

defineProps({
  description: {
    type: Object,
    required: true
  },
  isSearched: {
    type: Boolean,
    default: false
  }
})

const movieStore = useMovieStore()
const movieSearch = useSeacrhStore()
</script>

<template>
  <div class="flex flex-col justify-around">
    <TheMovieTitle :title="description" />
    <MovieOverview :overview="description.overview" />
    <movie-buttons v-if="!isSearched">
      <BaseButton @click="movieStore.toggleWatch(description.id)">
        <span v-if="!description.isWatched === true">Watched</span>
        <span v-else>Unwatched</span>
      </BaseButton>
      <BaseButton class="bg-red-500" @click="movieStore.deleteMovie(description.id)"
        >Delete</BaseButton
      >
    </movie-buttons>
    <movie-buttons v-else>
      <BaseButton class="bg-green-500 text-white" @click="movieSearch.addToUserMovies(description)">
        Add
      </BaseButton>
    </movie-buttons>
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
