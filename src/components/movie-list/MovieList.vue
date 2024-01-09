<template>
  <Box style="margin-top: 20px;">
    <ul class="movie-list list-group">
      <MovieListItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @onLike="$emit('onLike', movie.id)"
        @onFavourite="$emit('onFavourite', movie.id)"
        @onDelete="$emit('onDelete', movie.id)"
      />
    </ul>
  </Box>
</template>
<script>
import MovieListItem from "../movie-list-item/MovieListItem.vue";
export default {
  components: { MovieListItem },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
</style>
