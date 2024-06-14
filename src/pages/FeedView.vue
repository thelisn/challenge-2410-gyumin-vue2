<template>
  <div>
    <div class="feed-container">
      <div class="top-sticky-container">
        <AppButton class="open-search-button" @click="handleOpenSearch">
          Open Search
        </AppButton>
        <SearchBox v-if="isSearchOpen" />
      </div>

      <main>
        <FeedList />
      </main>
    </div>

    <div class="bottom-sticky-container">
      <AppButton class="new-post-button" @click="handleNavigateToWrite">
        Add New Post
      </AppButton>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/FeedView/SearchBox.vue";
import FeedList from "@/components/FeedView/FeedList.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "FeedView",
  components: {
    SearchBox,
    FeedList,
    AppButton,
  },

  data() {
    return {
      isSearchOpen: false,
    };
  },

  methods: {
    handleOpenSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },

    handleNavigateToWrite() {
      this.$router.push("/write");
    },
  },
};
</script>

<style scoped>
.open-search-button {
  padding: 8px;
  width: 100%;
  margin-top: 12px;
  border-radius: 48px;
  border: none;
  background-color: #2196f3;
  color: #ffffff;
}

.open-search-button:hover {
  background-color: #1976d2;
}

.top-sticky-container {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #FAFAFA;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
}

.bottom-sticky-container {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #E0E0E0;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
}

.new-post-button {
  background-color: #2196f3;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  border-radius: 30px;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  width: 100%;
}

.new-post-button:hover {
  background-color: #1976d2;
}

.feed-container {
  padding: 0 24px;
}
</style>
