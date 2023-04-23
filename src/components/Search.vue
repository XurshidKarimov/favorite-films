<template>
     <div class="search">Search</div>
     <v-form>
          <v-text-field
          v-model="movieName"
          required
          class="movieInput"
          ></v-text-field>
     </v-form>
</template>

<script setup>
     import {ref} from 'vue';

     const movieName = ref('');

</script>


<style>
     .v-text-field input{
          padding: 10px !important;
     }
</style>