<template>
  <header>
    <h3>Posts</h3>
    <p class="date">(Today) {{ new Date().toLocaleDateString() }}</p>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding-top: 48px;
  margin: 0 32px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

h3 {
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 400;
  color: $blueGray8;
}

.date {
  font-size: 0.75rem;
  font-weight: 300;
  color: $gray6;
}
</style>
