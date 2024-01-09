<template>
  <Box style="margin-top: 20px">
    <h3>Yangi kino qo'shish</h3>
    <form class="add-form d-flex" @submit.prevent="addMovie">
      <Input class="new-movie-label" placeholder="Kino nomi" v-model="name" />
      <Input
        type="number"
        class="new-movie-label"
        placeholder="Ko'rishlar soni"
        v-model="viewers"
      />
      <PrimaryButton class="btn-outline-dark">Qo'shish</PrimaryButton>
    </form>
  </Box>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      viewers: "",
    };
  },
  methods: {
    addMovie() {
      const newMovie = {
        id: Date.now(),
        name: this.name,
        viewers: this.viewers,
        like: false,
        favourite: false,
      };
      this.$emit("createMovie", newMovie);
      this.name = "";
      this.viewers = "";
    },
  },
};
</script>
<style scoped>
.add-form {
  gap: 10px;
  margin-top: 20px;
}
</style>
