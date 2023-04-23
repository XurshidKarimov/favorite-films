import { defineStore } from "pinia";

export const useSearchStore = defineStore("searchStore", {
    state: () => ({
        url: 'https://api.themoviedb.org/3/search/movie?api_key=5d9ffcc910ae7a84bca0ab898b5ccffe&query=',
        movies: [],
        loading: false,
        pages: null,
    }),
    actions: {
        async getMovies(movieName, pageN = 1){
            this.loading = true;
            const res = await fetch(`${this.url}${movieName}&page=${pageN}`);
            const data = await res.json();
            this.loading = false;
            this.movies = data.results;
            this.pages = data.total_pages;
            console.log(data, this.movies);
        }
    }    
})