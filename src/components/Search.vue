<template>
     <div class="search">Search</div>
     <v-form @submit.prevent="store.getMovies(movieName)">
          <v-text-field
          v-model="movieName"
          required
          :loading="store.loading === true"
          class="movieInput"
          ></v-text-field>
     </v-form>

     <movie v-for="movie in store.movies" :key="movie.id" :movie="movie" :isSearch="true"></movie>
     <v-pagination :length="store.pages" v-model="pageN" @click="store.getMovies(movieName, pageN)"></v-pagination>     
</template>

<script setup>
     import {ref} from 'vue';
     import { useSearchStore } from '../stores/SearchStore'
     import Movie from './Movie.vue';

     const pageN = ref(1);
     const store = useSearchStore();
     const movieName = ref('');

</script>


<style>
     .v-text-field input{
          padding: 10px !important;
     }
</style>