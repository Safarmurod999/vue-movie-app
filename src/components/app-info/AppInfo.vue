<template>
  <Box>
    <p class="fs-3">Barcha kinolar soni:{{ movies.length }}</p>
    <p class="fs-3">
      Ko'rilgan kinolar soni: {{ movies.filter((el) => el.favourite).length }}
    </p>
  </Box>
</template>
<script>
export default {
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
