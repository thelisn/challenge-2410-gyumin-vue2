<template>
  <div class="searchbox">
    <AppInput
      labelText="제목 검색"
      labelClass="search-label"
      role="searchbox"
      id="search-title"
      placeholder="검색어를 입력하세요."
      v-model="searchTerm"
    />

    <div class="searchbox-date">
      <span class="search-label">기간 검색</span>
      <AppInput
        labelText="날짜 검색 시작 범위"
        labelClass="a11y-hidden"
        type="date"
        role="searchbox"
        id="search-date-start"
        v-model="startDate"
      />
      <span>~</span>
      <AppInput
        labelText="날짜 검색 종료 범위"
        labelClass="a11y-hidden"
        type="date"
        role="searchbox"
        id="search-date-end"
        v-model="endDate"
      />
    </div>

    <div class="searchbox-button">
      <AppButton @click="handleClickSearch">검색</AppButton>
      <AppButton @click="handleClickReset">초기화</AppButton>
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
      searchTerm: "",
      startDate: "",
      endDate: "",
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
        return data.filter(
          (post) => new Date(post.date) <= new Date(this.endDate)
        );
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

      this.searchTerm = "";
      this.startDate = "";
      this.endDate = "";
    },
  },
};
</script>

<style>
.search-label {
  font-size: 0.875rem;
}

.searchbox {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
}

.searchbox-date {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 1;
}

.searchbox-date span {
  padding-right: 2px;
}

.searchbox-date div {
  flex-grow: 1;
}

.searchbox-button {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  margin-top: 8px;
}

.searchbox-button button {
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #64B5F6;
  background-color: #fff;
  color: #333;
}

.searchbox-button button:hover {
  background-color: #2196F3;
  color: #fff;
  font-weight: 600;
}
</style>
