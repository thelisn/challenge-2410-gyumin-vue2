<template>
  <div>
    <div class="feed-container">
      <SearchBox />

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

  methods: {
    handleNavigateToWrite() {
      this.$router.push("/write");
    },
  },
};
</script>

<style lang="scss" scoped>
.feed-container {
  padding: 0 24px;
}

.bottom-sticky-container {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: $white;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;

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

    &:hover {
      background-color: $SECONDARY_COLOR;
    }
  }
}
</style>
