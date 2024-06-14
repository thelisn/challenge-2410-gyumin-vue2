<template>
  <li class="post-item">
    <h3 class="post-title">{{ postData.title }}</h3>
    <p class="post-date">{{ postData.date }}</p>
    <p class="post-content">{{ postData.content }}</p>
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

.post-item {
  padding: 20px 16px;
  border: solid 1px #9E9E9E;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 12px;
  background-color: #fff;
  color: #263238;
}

.post-title {
  font-weight: 500;
}

.post-date {
  font-size: 0.875rem;
  font-weight: 250;
  text-align: right;
}

.post-content {
  font-size: 0.875rem;
  font-weight: 350;
  grid-column: 1 / -1;
}
</style>
