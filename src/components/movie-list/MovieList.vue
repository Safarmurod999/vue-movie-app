<template>
  <ul class="movie-list list-group">
    <MovieListItem />
  </ul>
</template>
<script>
import MovieListItem from "../movie-list-item/MovieListItem.vue";
export default {
  components: { MovieListItem },
};
</script>
<style scoped>
.movie-list {
  margin-top: 20px;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #fcfaf5;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
