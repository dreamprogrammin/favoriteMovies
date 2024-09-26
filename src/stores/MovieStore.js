import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([])
  const activeTab = ref(1)

  const moviesInLocalStorage = localStorage.getItem('movies')
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)
  }

  const watchedMovies = computed(() => movies.value.filter((movie) => movie.isWatched))

  const totalCountMovies = computed(() => movies.value.length)

  function setActiveTab(id) {
    activeTab.value = id
  }

  function toggleWatch(id) {
    const idx = movies.value.findIndex((movie) => movie.id === id)
    movies.value[idx].isWatched = !movies.value[idx].isWatched
  }

  function deleteMovie(id) {
    movies.value = movies.value.filter((movie) => movie.id !== id)
  }

  watch(
    () => movies.value,
    (state) => {
      localStorage.setItem('movies', JSON.stringify(state))
    },
    { deep: true }
  )

  return {
    movies,
    activeTab,
    watchedMovies,
    totalCountMovies,
    setActiveTab,
    toggleWatch,
    deleteMovie
  }
})
