<template>
  <div class="movie-add-form">
    <h3>Yangi kino qo'shish</h3>
    <form class="add-form d-flex">
      <input
        type="text"
        class="form-control new-movie-label"
        placeholder="Kino nomi"
      />
      <input
        type="text"
        class="form-control new-movie-label"
        placeholder="Ko'rishlar soni"
      />
      <button class="btn btn-outline-dark" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.movie-add-form {
  margin-top: 20px;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: #fcfaf5;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
.add-form{
    gap: 10px;
    margin-top: 20px;
}
</style>
