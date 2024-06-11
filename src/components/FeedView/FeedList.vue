<template>
  <ul>
    <FeedItem v-for="data in renderData" :key="data.id" :postData="data" />
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
