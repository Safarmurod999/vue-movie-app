<template>
  <li
    class="list-group-item d-flex justify-content-between"
    :class="[{ favourite: movie.favourite }, { like: movie.like }]"
  >
    <span class="list-group-item-label" @click="onLike">{{ movie.name }}</span>
    <div class="d-flex justify-content-center align-items-center gap-2">
      <input
        type="number"
        class="list-group-item-input"
        :value="movie.viewers"
        disabled
      />
      <button class="btn-cookie btn-sm" @click="onFavourite">
        <i class="fas fa-cookie"></i>
      </button>
      <button class="btn-trash btn-sm" @click="onDelete">
        <i class="fas fa-trash"></i>
      </button>
      <i class="fas fa-star"></i>
    </div>
  </li>
</template>
<script>
import axios from "axios";

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onLike() {
      this.$emit("onLike", this.movie.id);
    },
    onFavourite() {
      this.$emit("onFavourite", this.movie.id);
    },
    onDelete() {
      this.$emit("onDelete", this.movie.id);
    },

  },

};
</script>
<style scoped>
.list-group-item {
  padding: 10px 20px;
  border: none;
  border-bottom: 1px solid #000;
}
.list-group-item:last-child {
  border-bottom: none;
}
.list-group-item-label {
  line-height: 35px;
  font-size: 20px;
  cursor: pointer;
}
.list-group-item-input {
  line-height: 35px;
  font-size: 20px;
  border: none;
  text-align: center;
  outline: none;
}
.list-group-item button {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.btn-cookie {
  color: #e09f3e;
}
.btn-trash {
  color: #e5383b;
}
.fa-star {
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
  color: #ffd700;
  transition: 0.3s all;
  transform: translateX(30px);
  opacity: 0;
}
.list-group-item.like .fa-star {
  transform: translateX(0);
  opacity: 1;
}
.list-group-item.favourite span {
  color: #e09f3e;
}
</style>
