<template>
  <div v-if="!isLoad">
    <div class="container movies-container">
      <MovieCard
        v-for="{ id, poster_path, title } in movies"
        :key="id"
        :image="poster_path"
        :title="title"
      />
    </div>
    <Button
      class="movies-button"
      @action="getData"
      :title="`Следующая страница`"
    />
  </div>
  <div v-else class="load-container">
    <h1>Загрузка...</h1>
  </div>
</template>

<script>
//vue
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
//components
import MovieCard from "../components/MovieCard/MovieCard";
import Button from "../components/Button/Button";

export default {
  name: "Movie",
  components: {
    MovieCard,
    Button,
  },

  setup() {
    const store = useStore()
    const isLoad = ref(false)

    const movies = computed(() => store.getters.getMovies)

    onMounted(() => {
      movies.value.length <= 0 && getData()
    })


    const getData = async () => {
      isLoad.value = true;

      const res = await store.dispatch("getMovie");

      if (res === 200) {
        window.scrollTo({
          top: 0,
        });

        isLoad.value = false;
      }
    }

    return {
      isLoad,
      movies,
      getData
    }

  },

};
</script>
<style scoped>
.movies-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.movies-button {
  margin: 70px auto;
}

.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
</style>