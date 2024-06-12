<template>
  <div>
    <AppInput
      :id="'search-title'"
      :label="'제목 검색'"
      :role="'searchbox'"
      :placeholder="'검색어를 입력하새요.'"
      :ref="'search_title'"
    />
    <div class="searchbox-date">
      <span>날짜 검색</span>
      <div class="searchbox-date-inputs">
        <AppInput
          :type="'date'"
          :id="'search-date-start'"
          :label="'날짜 검색 시작 범위'"
          :role="'searchbox'"
          :placeholder="'날짜 검색 시작 범위'"
          :hiddenLabel="true"
        />
        <AppInput
          :type="'date'"
          :id="'search-date-end'"
          :label="'날짜 검색 종료 범위'"
          :role="'searchbox'"
          :placeholder="'날짜 검색 종료 범위'"
          :hiddenLabel="true"
        />
      </div>
    </div>

    <div class="searchbox-button">
      <AppButton @onClick="handleClickSearch">검색</AppButton>
      <AppButton @onClick="handleClickReset">초기화</AppButton>
    </div>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "SearchBox",
  components: {
    AppInput,
    AppButton,
  },
  methods: {
    handleClickSearch() {
      const searchTerm = this.$refs.search_title.$refs.inputRef.value;

      const filteredData = this.$store.state.data.filter((post) => post.title.includes(searchTerm));

      this.$store.commit("setRenderData", filteredData);
    },
    handleClickReset() {
      this.$store.commit("setRenderData", this.$store.state.data);
    },
  },
};
</script>
