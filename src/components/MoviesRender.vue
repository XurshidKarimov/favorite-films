<template>
    <div class="movies">
        <h3>All movies</h3>
        <movie v-for="movie in movies" :key="movie.id" :movie="movie"></movie>
    </div>
</template>

<script setup>
import Movie from './Movie.vue';
import { useMovieStore } from '../stores/movieStore';
import { storeToRefs } from 'pinia';

const store = useMovieStore();
const { movies } = storeToRefs(store);


</script>

<style scoped>

</style>