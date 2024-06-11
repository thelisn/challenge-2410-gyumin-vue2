<template>
  <div>
    <SearchBox />
    <FeedList />
  </div>
</template>

<script>
import SearchBox from "@/components/FeedView/SearchBox.vue";
import FeedList from "@/components/FeedView/FeedList.vue";

export default {
  name: "FeedView",
  components: {
    SearchBox,
    FeedList,
  },
};
</script>
