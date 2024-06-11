<template>
  <ul>
    <FeedItem v-for="data in storeData" :key="data.id" :postData="data" />
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
    storeData() {
      return this.$store.state.data;
    },
  },
  beforeMount() {
    this.$store.dispatch("getData");
  },
};
</script>
