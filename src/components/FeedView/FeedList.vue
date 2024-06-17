<template>
  <div>
    <div v-if="error">
      <p>데이터를 불러오는 중 문제가 발생했습니다: {{ errorMessage }}</p>
      <button @click="fetchData">재시도</button>
    </div>
    <div v-else>
      <div v-if="renderData.length > 0">
        <ul>
          <FeedItem v-for="data in renderData" :key="data.id" :postData="data" />
        </ul>
      </div>
      <p v-else class="no-data">데이터가 없습니다.</p>
    </div>
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
    
    errorMessage() {
      if (this.error.response && this.error.response.data.message) {
        return this.error.response.data.message;
      }
      return this.error.message || "알 수 없는 에러가 발생했습니다.";
    }
  },

  methods: {
    async fetchData() {
      this.error = "";
      this.loading = true;

      try {
        await this.$store.dispatch("getData");
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  },

  mounted() {
    this.fetchData();
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
