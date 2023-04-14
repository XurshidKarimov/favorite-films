<template>
  <main>
    <header-component />
    
    <div class="tabs">
      <v-btn 
        class="btn" 
        @click="store.switchTab(btn.tab)" 
        v-for="btn in tabMenuButtons" 
        :key="btn.name"
        :class="{btn_green: activeTab === btn.tab}">{{ btn.name }}</v-btn>
    </div>
    
    <KeepAlive>
      <component :is="computedComponent" />
    </KeepAlive>
    
  </main>
  
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import MoviesRender from './components/MoviesRender.vue';
import Search from './components/Search.vue';
import { useMovieStore } from './stores/movieStore';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';


const store = useMovieStore();
const { activeTab } = storeToRefs(store);

const computedComponent = computed(() => {
  return activeTab.value === 1 ? MoviesRender : Search;  
});

const tabMenuButtons = ref([{tab: 1, name: 'Favorite'}, {tab: 2, name: 'Search'}]);


</script>


<style scoped>

.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
  transition: linear .3s;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
