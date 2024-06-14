<template>
  <div v-if="renderData.length > 0">
    <ul>
      <FeedItem
        v-for="data in renderData"
        :key="data.id"
        :postData="data"
      />
    </ul>
  </div>
  <div v-else>
    <p class="no-data">데이터가 없습니다.</p>
  </div>
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

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 4px;
  min-height: 80vh;
  bottom: 0;
}

.no-data {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin: 32px;
}
</style>
