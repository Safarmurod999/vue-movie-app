<template>
  <div class="app">
    <div class="content">
      <AppInfo :movies="movies" />
      <div class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilter
          :updateFilterHandler="updateFilterHandler"
          :filterName="filter"
        />
      </div>
      <Box v-if="!movies.length && !isLoading" class="fs-2 mt-3"
        >Ma'lumot mavjud emas</Box
      >
      <Box v-else-if="isLoading" class="fs-2 mt-3 d-flex justify-content-center"
        ><div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div></Box
      >
      <MovieList
        v-else
        :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
        @onLike="onLikeHandler"
        @onFavourite="onFavouriteHandler"
        @onDelete="onDeleteHandler"
      />
      <Box class="d-flex justify-content-center"
        ><nav aria-label="pagination">
          <ul class="pagination pagination-md">
            <li
              class="page-item"
              v-for="pageNum in totalPages"
              :key="pageNum"
              :class="{ active: page == pageNum }"
              @click="changePageHandler(pageNum)"
            >
              <span class="page-link">{{ pageNum }}</span>
            </li>
          </ul>
        </nav></Box
      >
      <MovieAddForm @createMovie="createMovie" />
    </div>
  </div>
</template>

<script>
import AppInfo from "@/components/app-info/AppInfo.vue";
import SearchPanel from "@/components/search-panel/SearchPanel.vue";
import AppFilter from "@/components/app-filter/AppFilter.vue";
import MovieList from "@/components/movie-list/MovieList.vue";
import MovieAddForm from "@/components/movie-add-form/MovieAddForm.vue";
import axios from "axios";
export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm,
  },
  data() {
    return {
      movies: [],
      term: "",
      filter: "all",
      isLoading: false,
      limit: 10,
      page: 1,
      totalPages: 0,
    };
  },
  methods: {
    async createMovie(item) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          item
        );
        this.movies.push(response.data);
      } catch (error) {
        alert(error.message);
      }
    },
    onLikeHandler(id) {
      const item = this.movies.find((el) => el.id == id);
      item.like = !item.like;
      localStorage.setItem("movies", JSON.stringify(this.movies));
    },
    onFavouriteHandler(id) {
      const item = this.movies.find((el) => el.id == id);
      item.favourite = !item.favourite;
      localStorage.setItem("movies", JSON.stringify(this.movies));
    },
    async onDeleteHandler(id) {
      try {
        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        this.movies = this.movies.filter((c) => c.id !== id);
      } catch (error) {
        console.log(error.message);
      }
    },
    onSearchHandler(arr, term) {
      if (term.length == 0) {
        return arr;
      }
      return arr.filter((c) => c.name.toLowerCase().indexOf(term) > -1);
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "popular":
          return arr.filter((c) => c.like);
        case "mostViewers":
          return arr.filter((c) => c.viewers > 500);
        default:
          return arr;
      }
    },
    updateTermHandler(term) {
      this.term = term;
    },
    updateFilterHandler(filter) {
      this.filter = filter;
    },
    async fetchMovie() {
      try {
        this.isLoading = true;
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );
        const newData = res.data.map((el) => {
          return {
            id: el.id,
            name: el.title,
            like: false,
            favourite: false,
            viewers: (el.id * Math.random() * 150).toFixed(0),
          };
        });
        console.log(newData);
        this.totalPages = Math.ceil(res.headers["x-total-count"] / this.limit);
        this.movies = newData;
      } catch (error) {
        console.log(error.message);
      } finally {
        this.isLoading = false;
      }
    },
    changePageHandler(id) {
      this.page = id;
      this.fetchMovie();
    },
  },
  mounted() {
    this.fetchMovie();
  },
};
</script>
<style>
.app {
  height: 100vh;
  color: #000;
}
.content {
  width: 1000px;
  min-height: 700px;
  background: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}
.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>
