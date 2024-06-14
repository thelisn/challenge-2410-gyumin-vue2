<template>
  <ul>
    <FeedItem
      v-for="data in renderData"
      :key="data.id"
      :postData="data"
    />
  </ul>
</template>

<script>
import FeedItem from "@/components/FeedView/FeedItem.vue";

export default {
  name: "FeedList",
  components: {
    FeedItem,
  },
  computed: {
    renderData() {
      return this.$store.state.renderData;
    },
  },
  beforeMount() {
    this.$store.dispatch("getData");
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 4px;
  min-height: 80vh;
  bottom: 0;
}
</style>
