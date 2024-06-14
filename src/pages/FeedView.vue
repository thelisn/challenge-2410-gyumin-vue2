<template>
  <div>
    <div class="feed-container">
      <div class="top-sticky-container">
        <AppButton class="open-search-button" @click="handleOpenSearch">
          {{ isSearchOpen ? "Close Search" : "Open Search" }}
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

<style lang="scss" scoped>
.open-search-button {
  padding: 8px;
  width: 100%;
  margin-top: 12px;
  border-radius: 48px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  background-color: $PRIMARY_COLOR;
  color: $white;
}

.open-search-button:hover {
  background-color: $SECONDARY_COLOR;
}

.top-sticky-container {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: $BACKGROUND_COLOR;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
}

.bottom-sticky-container {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: $white;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
}

.new-post-button {
  background-color: $PRIMARY_COLOR;
  color: $white;
  text-align: center;
  padding: 12px;
  border-radius: 30px;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  width: 100%;
}

.new-post-button:hover {
  background-color: $SECONDARY_COLOR;
}

.feed-container {
  padding: 0 24px;
}
</style>
