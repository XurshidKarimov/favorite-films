<template>
    <div class="movie">
        <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.original_title" class="movie-img">
        <div>
            <div class="movie-name">{{ movie.original_title }} ({{ movie.release_date }})</div>
            <span class="movie-overview">{{ movie.overview }}</span>
            <div class="movie-buttons" v-if="!isSearch">
                <v-btn class="btn movie-buttons-watched" @click="store.watchedChange(movie.id)">
                    <span v-if="movie.isWatched">Watched</span>
                    <span v-else>Unwatched</span>
                </v-btn>
                <v-btn class="btn movie-buttons-delete" @click="store.deleteMovie(movie.id)">Delete</v-btn>
            </div>
            <div class="movie-buttons" v-else>
                <v-btn class="btn movie-buttons-watched" @click="store.watchedChange(movie.id)">
                    Add
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useMovieStore } from '../stores/movieStore';
    const props = defineProps(['movie', 'isSearch']);

    const store = useMovieStore();

    

</script>



<style scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}
.movie-accept {
  margin-right: 10px;
}
.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}
.movie-overview {
  display: block;
  margin-bottom: 20px;
}
.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 15px;
}
.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
}
.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}
.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
}
</style>