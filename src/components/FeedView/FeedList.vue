<template>
  <div>
    <div v-if="error" class="alert-text">
      <p>{{ errorMessage }}</p>
      <button @click="fetchData">로딩 재시도</button>
    </div>
    <div v-else>
      <div v-if="loading" class="alert-text">
        <p>로딩중...</p>
      </div>

      <div v-else-if="renderData.length > 0">
        <ul>
          <FeedItem v-for="data in renderData" :key="data.id" :postData="data" />
        </ul>
      </div>

      <div v-else class="alert-text">
        <p>데이터가 없습니다.</p>
      </div>
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

  data() {
    return {
      error: "",
      loading: false,
    };
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

.alert-text {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin: 32px;
}
</style>
