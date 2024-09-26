import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMovieStore } from '@/stores/movieStore'

const url =
  'https://api.themoviedb.org/3/search/movie?api_key=23d8e61045668c45b6036017ddf1d905&query='

export const useSeacrhStore = defineStore('searchMovies', () => {
  const isWatched = ref(false)
  const movies = ref([])

  async function getMovie(search) {
    isWatched.value = true
    const res = await fetch(`${url}${search}`)
    const data = await res.json()
    movies.value = data.results
    isWatched.value = false
  }

  function addToUserMovies(movie) {
    const movieStore = useMovieStore()
    movieStore.movies.push({ ...movie, isWatched: false })
    movieStore.activeTab = 1
  }

  return {
    isWatched,
    movies,
    getMovie,
    addToUserMovies
  }
})
