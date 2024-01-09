<template>
  <Input
    type="text"
    class="search-input"
    placeholder="Kinolarni qidirish"
    @input="changeHandler"
	v-model="term"
  />
</template>
<script>
export default {
  props: {
    updateTermHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      term: "",
    };
  },
  methods: {
    changeHandler(e) {
      this.term = e.target.value;
      this.updateTermHandler(this.term);
    },
  },
};
</script>
<style></style>
