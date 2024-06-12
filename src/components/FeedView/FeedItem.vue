<template>
  <li>
    <h3>{{ postData.title }}</h3>
    <p>{{ postData.date }}</p>
    <p>{{ postData.content }}</p>
  </li>
</template>

<script>
export default {
  name: "FeedItem",
  props: {
    postData: Object,
  },
};
</script>

<style scoped>
p {
  overflow-wrap: break-word;
  white-space: pre-line;
}
</style>
