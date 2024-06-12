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
          :hiddenLabel="true"
          :ref="'search_date_start'"
        />
        <AppInput
          :type="'date'"
          :id="'search-date-end'"
          :label="'날짜 검색 종료 범위'"
          :role="'searchbox'"
          :hiddenLabel="true"
          :ref="'search_date_end'"
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
    filteredByTitle(data) {
      const searchTerm = this.$refs.search_title.$refs.inputRef.value;

      if (searchTerm) {
        return data.filter((post) => post.title.includes(searchTerm));
      }

      return data;
    },

    filteredByStartDate(data) {
      const startDate = this.$refs.search_date_start.$refs.inputRef.value;

      if (startDate) {
        return data.filter(
          (post) => new Date(post.date) >= new Date(startDate)
        );
      }

      return data;
    },

    filteredByEndDate(data) {
      const endDate = this.$refs.search_date_end.$refs.inputRef.value;

      if (endDate) {
        return data.filter((post) => new Date(post.date) <= new Date(endDate));
      }

      return data;
    },

    handleClickSearch() {
      let filteredData = this.$store.state.data;

      filteredData = this.filteredByTitle(filteredData);
      filteredData = this.filteredByStartDate(filteredData);
      filteredData = this.filteredByEndDate(filteredData);

      this.$store.commit("setRenderData", filteredData);
    },

    handleClickReset() {
      this.$store.commit("setRenderData", this.$store.state.data);

      this.$refs.search_title.$refs.inputRef.value = "";
      this.$refs.search_date_start.$refs.inputRef.value = "";
      this.$refs.search_date_end.$refs.inputRef.value = "";
    },
  },
};
</script>
