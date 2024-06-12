<template>
  <div>
    <AppInput
      id="search-title"
      label="제목 검색"
      role="searchbox"
      placeholder="검색어를 입력하세요."
      v-model="searchTerm"
    />
    <div class="searchbox-date">
      <span>날짜 검색</span>
      <div class="searchbox-date-inputs">
        <AppInput
          type="date"
          id="search-date-start"
          label="날짜 검색 시작 범위"
          role="searchbox"
          hiddenLabel="true"
          v-model="startDate"
        />
        <AppInput
          type="date"
          id="search-date-end"
          label="날짜 검색 종료 범위"
          role="searchbox"
          hiddenLabel="true"
          v-model="endDate"
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
  data() {
    return {
      searchTerm: '',
      startDate: '',
      endDate: ''
    };
  },
  methods: {
    filteredByTitle(data) {
      if (this.searchTerm) {
        return data.filter((post) => post.title.includes(this.searchTerm));
      }
      return data;
    },
    filteredByStartDate(data) {
      if (this.startDate) {
        return data.filter(
          (post) => new Date(post.date) >= new Date(this.startDate)
        );
      }
      return data;
    },
    filteredByEndDate(data) {
      if (this.endDate) {
        return data.filter((post) => new Date(post.date) <= new Date(this.endDate));
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
      this.searchTerm = '';
      this.startDate = '';
      this.endDate = '';
    },
  },
};
</script>
